-- Ginja Waitlist Table Setup
-- Run this in your Supabase SQL Editor

-- Create waitlist table for Ginja app
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  instagram_username TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ip_address INET,
  user_agent TEXT,
  referrer TEXT,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'contacted', 'converted', 'unsubscribed'))
);

-- For existing tables created with older schema versions
ALTER TABLE waitlist DROP COLUMN IF EXISTS city;
ALTER TABLE waitlist DROP COLUMN IF EXISTS notes;

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_waitlist_status ON waitlist(status);
DROP INDEX IF EXISTS idx_waitlist_city;

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public inserts (for the waitlist form)
CREATE POLICY "Allow public inserts on waitlist" ON waitlist
  FOR INSERT WITH CHECK (true);

-- Create policy to allow authenticated users to read all records (for admin)
CREATE POLICY "Allow authenticated read on waitlist" ON waitlist
  FOR SELECT USING (auth.role() = 'authenticated');

-- Add trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_waitlist_updated_at 
  BEFORE UPDATE ON waitlist 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Add helpful comments
COMMENT ON TABLE waitlist IS 'Stores waitlist signups for Ginja productivity app';
COMMENT ON COLUMN waitlist.full_name IS 'User full name';
COMMENT ON COLUMN waitlist.email IS 'User email address (unique)';
COMMENT ON COLUMN waitlist.instagram_username IS 'Optional Instagram handle';
COMMENT ON COLUMN waitlist.status IS 'Current status in waitlist process';

-- Insert some sample data (optional - remove if not needed)
-- INSERT INTO waitlist (full_name, email, instagram_username) VALUES
-- ('Test User', 'test@example.com', '@testuser'),
-- ('Demo User', 'demo@example.com', '@demouser');

-- View the table structure
SELECT 
    column_name, 
    data_type, 
    is_nullable, 
    column_default 
FROM information_schema.columns 
WHERE table_name = 'waitlist' 
ORDER BY ordinal_position;
