-- CloudInfra IT 2026 - Supabase SQL Schema (Manual Entry Mode)
-- Path: d:\Project\cloudinfrait\supabase\schema.sql

-- 1. Job Postings Table
CREATE TABLE IF NOT EXISTS public.job_postings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    organization TEXT NOT NULL DEFAULT 'CloudInfra IT',
    location TEXT NOT NULL, -- e.g. "Dallas, TX (Hybrid)"
    employment_type TEXT NOT NULL, -- e.g. "CONTRACTOR", "FULL_TIME"
    specialty TEXT NOT NULL, -- e.g. "Cloud & DevOps", "Cybersecurity"
    description TEXT NOT NULL, -- HTML/Markdown supported
    salary_range TEXT, -- e.g. "$140,000 - $180,000"
    direct_apply_url TEXT, -- External link if not using internal app
    posted_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    valid_through TIMESTAMPTZ, -- For JobPosting schema expiry
    status TEXT NOT NULL DEFAULT 'published', -- 'draft', 'published', 'filled', 'expired'
    is_featured BOOLEAN DEFAULT false
);

-- 2. Applications Table (Optional for Lead Capture)
CREATE TABLE IF NOT EXISTS public.applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    job_id UUID REFERENCES public.job_postings(id),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    resume_url TEXT, -- Supabase Storage reference
    work_auth TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    status TEXT NOT NULL DEFAULT 'received'
);

-- 3. Row Level Security (RLS)
-- Deny public write to jobs, allow public read
ALTER TABLE public.job_postings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Read Jobs" ON public.job_postings FOR SELECT USING (status = 'published');

-- Allow public write to applications
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Apply" ON public.applications FOR INSERT WITH CHECK (true);

-- 4. Trigger for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_job_postings_updated_at
    BEFORE UPDATE ON public.job_postings
    FOR EACH ROW
    EXECUTE PROCEDURE update_updated_at_column();
