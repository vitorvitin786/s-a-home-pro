const API = "/api/index.php?action=";
async function request<T>(action: string, body?: unknown, csrf?: string): Promise<T> {
 const response = await fetch(API + encodeURIComponent(action), { credentials: "same-origin", method: body === undefined ? "GET" : "POST", headers: { ...(body === undefined ? {} : { "Content-Type": "application/json" }), ...(csrf ? { "X-CSRF-Token": csrf } : {}) }, body: body === undefined ? undefined : JSON.stringify(body) });
 const contentType = response.headers.get("content-type") ?? "";
 if (!contentType.includes("application/json")) {
  throw new Error("The website API is not configured on this hosting deployment.");
 }
 const data = await response.json();
 if (!response.ok) throw new Error(data.error || "Request failed");
 return data as T;
}
export type Lead = { id: string; created_at: string; status: string; notes: string; full_name: string; phone: string; email: string; project_type: string; zip: string; address: string; service: string; sqft: string; contact_method: string; start_date: string; description: string };
export const api = {
 submit: (data: Record<string,string>) => request<{ok:boolean}>("submit",data),
 login: (email:string,password:string) => request<{ok:boolean;csrf:string}>("login",{email,password}),
 session: () => request<{authenticated:boolean;csrf:string|null}>("session"),
 logout: (csrf:string) => request("logout",{},csrf),
 leads: () => request<{leads:Lead[]}>("leads"),
 update: (id:string, patch:Partial<Pick<Lead,"status"|"notes">>,csrf:string) => request("update",{id,...patch},csrf),
};
