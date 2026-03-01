# Supabase Setup

## 1. Create a Supabase project

Go to [supabase.com](https://supabase.com) and create a new project.

## 2. Run the migration

In the Supabase Dashboard, open **SQL Editor** and run the contents of `migrations/001_contact_and_get_involved.sql`:

- `contact_submissions` – Contact form submissions
- `get_involved_submissions` – Get Involved form submissions

## 3. Add environment variables

Copy `.env.example` to `.env.local` and add your Supabase credentials:

- **NEXT_PUBLIC_SUPABASE_URL** – Project URL (Settings → API)
- **SUPABASE_SERVICE_ROLE_KEY** – Service role key (Settings → API, under "Project API keys")

⚠️ Never expose the service role key in client-side code. It's only used in API routes.
