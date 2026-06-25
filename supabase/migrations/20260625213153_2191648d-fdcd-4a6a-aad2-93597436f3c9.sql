
-- Replace the permissive INSERT policy with one that validates basic input shape.
DROP POLICY IF EXISTS "Anyone can submit a quote request" ON public.quote_requests;

CREATE POLICY "Anyone can submit a valid quote request"
  ON public.quote_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    char_length(name) BETWEEN 2 AND 100
    AND char_length(phone) BETWEEN 6 AND 20
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND char_length(email) <= 255
    AND postcode ~* '^\d{4}\s?[A-Za-z]{2}$'
    AND char_length(service) BETWEEN 1 AND 100
    AND char_length(scope) BETWEEN 1 AND 50
    AND char_length(timing) BETWEEN 1 AND 50
    AND char_length(client_type) BETWEEN 1 AND 30
    AND char_length(contact_preference) BETWEEN 1 AND 30
    AND (notes IS NULL OR char_length(notes) <= 500)
    AND (city IS NULL OR char_length(city) <= 100)
    AND status = 'new'
  );

-- Lock down rate-limit table: deny everything for anon/authenticated; service_role bypasses RLS.
CREATE POLICY "No public access to rate limit"
  ON public.quote_rate_limit
  FOR ALL
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);
