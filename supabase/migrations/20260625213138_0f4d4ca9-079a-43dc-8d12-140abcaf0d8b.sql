
CREATE TABLE public.quote_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  service TEXT NOT NULL,
  scope TEXT NOT NULL,
  timing TEXT NOT NULL,
  notes TEXT,
  postcode TEXT NOT NULL,
  city TEXT,
  client_type TEXT NOT NULL,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  contact_preference TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new',
  source TEXT,
  user_agent TEXT,
  ip_hash TEXT
);

GRANT INSERT ON public.quote_requests TO anon;
GRANT INSERT ON public.quote_requests TO authenticated;
GRANT ALL ON public.quote_requests TO service_role;

ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

-- Anyone (anon + authenticated) can submit; nobody can read via API.
CREATE POLICY "Anyone can submit a quote request"
  ON public.quote_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE INDEX quote_requests_created_at_idx ON public.quote_requests (created_at DESC);
CREATE INDEX quote_requests_status_idx ON public.quote_requests (status);

-- Rate limit table (service_role only)
CREATE TABLE public.quote_rate_limit (
  ip_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT ALL ON public.quote_rate_limit TO service_role;

ALTER TABLE public.quote_rate_limit ENABLE ROW LEVEL SECURITY;

CREATE INDEX quote_rate_limit_ip_created_idx ON public.quote_rate_limit (ip_hash, created_at DESC);
