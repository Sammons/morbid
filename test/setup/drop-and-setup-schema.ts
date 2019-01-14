
export const initialize = () => {
  return `
  create extension if not exists pgcrypto;
  
  create schema media;
  
  create table media.media_channel(
    id uuid primary key default gen_random_uuid(),
    kind text not null,
    data jsonb not null
  );
  
  create table media.media_participant(
    id uuid primary key default gen_random_uuid(),
    data jsonb not null
  );
  
  create table media.media_subscription(
    id uuid primary key default gen_random_uuid(),
    media_participant_id uuid not null references media.media_participant(id),
    media_channel uuid not null references media.media_channel(id),
    data jsonb not null
  );
  
  create table media.media_correspondence(
    id uuid primary key default gen_random_uuid(),
    media_channel_id uuid not null references media.media_channel(id),
    data jsonb not null
  );
  
  create schema sys;
  
  create table sys.system_events(
    id serial primary key,
    kind text not null,
    moment timestamptz default now(),
    data jsonb not null
  );
  
  create schema tenant;
  
  create table tenant.organization(
    id uuid primary key default gen_random_uuid(),
    label text not null,
    data jsonb not null
  );
  
  create table tenant.credential(
    id uuid primary key default gen_random_uuid(),
    kind text not null,
    id_for_credential_kind text not null,
    data jsonb not null
  );
  
  create table tenant.member(
    id uuid primary key default gen_random_uuid(),
    organization_id uuid not null references tenant.organization(id),
    data jsonb not null
  );
  
  create table tenant.possible_role(
    id uuid primary key default gen_random_uuid(),
    organization_id uuid not null references tenant.organization(id),
    data jsonb not null
  );
  
  create table tenant.assigned_role(
    id uuid primary key default gen_random_uuid(),
    role_id uuid not null references tenant.possible_role(id),
    data jsonb not null
  );
  
  create table tenant.subscription_template(
    id uuid primary key default gen_random_uuid(),
    label text not null,
    data jsonb not null
  );
  
  create table tenant.applied_subscription(
    id uuid primary key default gen_random_uuid(),
    subscription_id uuid not null references tenant.subscription_template(id),
    organization_id uuid not null references tenant.organization(id)
  );
  
  create schema accounting;
  
  create table accounting.contact(
    id uuid primary key default gen_random_uuid(),
    email text not null,
    data jsonb not null
  );
  
  create table accounting.account (
    id uuid primary key default gen_random_uuid(),
    label text not null,
    data jsonb not null
  );
  
  create table accounting.account_contact (
    id uuid primary key default gen_random_uuid(),
    contact_id uuid not null references accounting.contact(id),
    account_id uuid not null references accounting.account(id)
  );
  
  create table accounting.account_event (
    id uuid primary key default gen_random_uuid(),
    account_id uuid not null references accounting.account(id),
    kind text,
    data jsonb not null
  );
  
  create table accounting.invoice(
    id uuid primary key default gen_random_uuid(),
    created_by uuid not null references accounting.contact(id),
    recipient uuid not null references accounting.contact(id),
    data jsonb not null
  );
`;
};