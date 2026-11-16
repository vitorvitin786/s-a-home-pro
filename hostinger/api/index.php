<?php
declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
session_set_cookie_params(['httponly'=>true,'secure'=>!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off','samesite'=>'Lax','path'=>'/']);
session_start();
$root = dirname(__DIR__, 2) . '/sa-home-private';
if (!is_dir($root) && !mkdir($root, 0700, true) && !is_dir($root)) { http_response_code(500); exit('{"error":"Storage unavailable"}'); }
$config = $root . '/config.php';
if (!is_file($config)) { http_response_code(503); exit('{"error":"Administrator setup required"}'); }
$settings = require $config;
function reply(int $status, array $body): never { http_response_code($status); echo json_encode($body); exit; }
function loggedIn(): bool { return ($_SESSION['admin'] ?? false) === true; }
function csrf(): void { if (!hash_equals($_SESSION['csrf'] ?? '', $_SERVER['HTTP_X_CSRF_TOKEN'] ?? '')) reply(403,['error'=>'Invalid CSRF token']); }
function readJson(): array { $data=json_decode(file_get_contents('php://input'),true); if (!is_array($data)) reply(400,['error'=>'Invalid JSON']); return $data; }
function storePath(): string { global $root; return $root.'/leads.jsonl'; }
function readLeads(): array { $p=storePath(); if (!file_exists($p)) return []; $h=fopen($p,'rb'); if (!$h) return []; flock($h,LOCK_SH); $rows=[]; while(($line=fgets($h))!==false) { $v=json_decode($line,true); if(is_array($v)) $rows[]=$v; } flock($h,LOCK_UN); fclose($h); return $rows; }
$action=$_GET['action'] ?? '';
$method=$_SERVER['REQUEST_METHOD'] ?? 'GET';
if ($action==='session' && $method==='GET') reply(200,['authenticated'=>loggedIn(),'csrf'=>loggedIn()?($_SESSION['csrf'] ?? ''):null]);
if ($action==='login' && $method==='POST') {
 $d=readJson(); $email=(string)($d['email']??''); $pass=(string)($d['password']??'');
 $attemptKey=hash('sha256',($_SERVER['REMOTE_ADDR']??'unknown')); $attemptFile=$root.'/attempt-'.$attemptKey;
 $a=is_file($attemptFile)?json_decode((string)file_get_contents($attemptFile),true):[]; if(!is_array($a))$a=[];
 $a=array_values(array_filter($a,fn($t)=>is_int($t)&&$t>time()-900));
 if(count($a)>=8) reply(429,['error'=>'Too many attempts; try later']);
 if(!hash_equals(strtolower((string)($settings['email']??'')),strtolower($email)) || !password_verify($pass,(string)($settings['password_hash']??''))) {
   $a[]=time(); file_put_contents($attemptFile,json_encode($a),LOCK_EX); reply(401,['error'=>'Invalid credentials']);
 }
 @unlink($attemptFile); session_regenerate_id(true); $_SESSION['admin']=true; $_SESSION['csrf']=bin2hex(random_bytes(24)); reply(200,['ok'=>true,'csrf'=>$_SESSION['csrf']]);
}
if ($action==='logout' && $method==='POST') { csrf(); $_SESSION=[]; session_destroy(); reply(200,['ok'=>true]); }
if ($action==='submit' && $method==='POST') {
 $d=readJson(); if(!empty($d['botcheck'])) reply(200,['ok'=>true]);
 $fields=['fullName'=>120,'phone'=>30,'email'=>200,'projectType'=>60,'zip'=>10,'address'=>300,'service'=>120,'sqft'=>30,'contactMethod'=>20,'startDate'=>20,'description'=>5000];
 $clean=[]; foreach($fields as $key=>$max) { $v=trim((string)($d[$key]??'')); if(strlen($v)>$max) reply(422,['error'=>'Field too long']); $clean[$key]=$v; }
 if($clean['fullName']==='' || $clean['description']==='' || ($clean['email']!=='' && !filter_var($clean['email'],FILTER_VALIDATE_EMAIL)) || !preg_match('/^[0-9]{5}$/',$clean['zip']) || strlen(preg_replace('/\\D/','',$clean['phone']))<7) reply(422,['error'=>'Please check required fields']);
 $row=['id'=>bin2hex(random_bytes(16)),'created_at'=>gmdate('c'),'status'=>'new','notes'=>'',
 'full_name'=>$clean['fullName'],'phone'=>$clean['phone'],'email'=>$clean['email'],'project_type'=>$clean['projectType'],'zip'=>$clean['zip'],'address'=>$clean['address'],'service'=>$clean['service'],'sqft'=>$clean['sqft'],'contact_method'=>$clean['contactMethod'],'start_date'=>$clean['startDate'],'description'=>$clean['description']];
 $h=fopen(storePath(),'ab'); if(!$h) reply(500,['error'=>'Storage unavailable']); flock($h,LOCK_EX); $ok=fwrite($h,json_encode($row,JSON_UNESCAPED_UNICODE)."\n")!==false; fflush($h); flock($h,LOCK_UN); fclose($h);
 if(!$ok) reply(500,['error'=>'Could not save request']);
 reply(200,['ok'=>true]);
}
if (!loggedIn()) reply(401,['error'=>'Authentication required']);
if ($action==='leads' && $method==='GET') { $rows=readLeads(); usort($rows,fn($a,$b)=>strcmp($b['created_at'],$a['created_at'])); reply(200,['leads'=>$rows]); }
if ($action==='update' && $method==='POST') {
 csrf(); $d=readJson(); $id=(string)($d['id']??''); $allowed=['new','contacted','estimate scheduled','quoted','won','lost'];
 if(isset($d['status']) && !in_array($d['status'],$allowed,true)) reply(422,['error'=>'Invalid status']);
 if(isset($d['notes']) && (!is_string($d['notes']) || strlen($d['notes'])>5000)) reply(422,['error'=>'Invalid notes']);
 $p=storePath(); $h=fopen($p,'c+'); if(!$h) reply(500,['error'=>'Storage unavailable']); flock($h,LOCK_EX); $rows=[]; rewind($h);
 while(($line=fgets($h))!==false) { $row=json_decode($line,true); if(!is_array($row))continue; if(hash_equals((string)$row['id'],$id)) { if(isset($d['status']))$row['status']=$d['status']; if(isset($d['notes']))$row['notes']=$d['notes']; } $rows[]=$row; }
 rewind($h); ftruncate($h,0); foreach($rows as $row)fwrite($h,json_encode($row,JSON_UNESCAPED_UNICODE)."\n"); fflush($h); flock($h,LOCK_UN); fclose($h); reply(200,['ok'=>true]);
}
reply(404,['error'=>'Not found']);
