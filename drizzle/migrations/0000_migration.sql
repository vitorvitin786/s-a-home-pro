create type public.app_role as enum ('admin');
create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role app_role not null,
  unique (user_id, role)
);
grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;
create policy "Users read own roles" on public.user_roles for select to authenticated using (user_id = auth.uid());

create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean language sql stable security definer set search_path = public
as $$ select exists (select 1 from public.user_roles where user_id = _user_id and role = _role) $$;

create or replace function public.grant_owner_admin()
returns trigger language plpgsql security definer set search_path = public
as $$
begin
  if lower(new.email) = 'sauloaguiarcamp@outlook.com' and new.email_confirmed_at is not null then
    insert into public.user_roles (user_id, role) values (new.id, 'admin') on conflict do nothing;
  end if;
  return new;
end $$;
create trigger on_auth_user_owner after insert or update of email_confirmed_at on auth.users
for each row execute function public.grant_owner_admin();

create table public.estimate_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  phone text not null,
  email text not null,
  project_type text not null default '',
  zip text not null default '',
  address text not null default '',
  service text not null default '',
  sqft text not null default '',
  contact_method text not null default '',
  start_date text not null default '',
  description text not null,
  status text not null default 'new',
  notes text not null default ''
);
grant select, update, delete on public.estimate_requests to authenticated;
grant all on public.estimate_requests to service_role;
alter table public.estimate_requests enable row level security;
create policy "Admins read leads" on public.estimate_requests for select to authenticated using (public.has_role(auth.uid(), 'admin'));
create policy "Admins update leads" on public.estimate_requests for update to authenticated using (public.has_role(auth.uid(), 'admin')) with check (public.has_role(auth.uid(), 'admin'));
create policy "Admins delete leads" on public.estimate_requests for delete to authenticated using (public.has_role(auth.uid(), 'admin'));