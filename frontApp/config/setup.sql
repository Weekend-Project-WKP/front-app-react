create extension vector
with
    schema extensions;

create table categories (
    id serial primary key,
    category text not null,
    embedding vector(384)
);

create table products (
    id serial primary key,
    name text not null,
    category integer references categories(id),
    user_id uuid references auth.users(id),
    historic boolean default false
);

/*
    Row Level Security
*/

alter table products enable row level security
alter table categories enable row level security