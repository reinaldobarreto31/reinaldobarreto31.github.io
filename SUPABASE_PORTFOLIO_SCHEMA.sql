create table if not exists public.portfolio_content (
  id text primary key check (id = 'main'),
  payload jsonb not null,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id) on delete set null
);

alter table public.portfolio_content enable row level security;

grant usage on schema public to anon, authenticated;
grant select on public.portfolio_content to anon, authenticated;
grant insert, update on public.portfolio_content to authenticated;

drop policy if exists "Public can read portfolio content" on public.portfolio_content;
create policy "Public can read portfolio content"
  on public.portfolio_content
  for select
  to anon, authenticated
  using (id = 'main');

drop policy if exists "Portfolio admin can insert content" on public.portfolio_content;
create policy "Portfolio admin can insert content"
  on public.portfolio_content
  for insert
  to authenticated
  with check (
    id = 'main'
    and (auth.jwt() ->> 'email') = 'corelabs.dev.nexus@gmail.com'
  );

drop policy if exists "Portfolio admin can update content" on public.portfolio_content;
create policy "Portfolio admin can update content"
  on public.portfolio_content
  for update
  to authenticated
  using (
    id = 'main'
    and (auth.jwt() ->> 'email') = 'corelabs.dev.nexus@gmail.com'
  )
  with check (
    id = 'main'
    and (auth.jwt() ->> 'email') = 'corelabs.dev.nexus@gmail.com'
  );
