-- Ginja Waitlist Table Setup
-- Run this in your Supabase SQL Editor

-- Create waitlist table for Ginja app
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  instagram_username TEXT,
  city TEXT NOT NULL,
  notes TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ip_address INET,
  user_agent TEXT,
  referrer TEXT,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'contacted', 'converted', 'unsubscribed'))
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_waitlist_city ON waitlist(city);
CREATE INDEX IF NOT EXISTS idx_waitlist_status ON waitlist(status);

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
COMMENT ON COLUMN waitlist.city IS 'User city/area of residence';
COMMENT ON COLUMN waitlist.notes IS 'What features they want to see';
COMMENT ON COLUMN waitlist.status IS 'Current status in waitlist process';

-- Insert some sample data (optional - remove if not needed)
-- INSERT INTO waitlist (full_name, email, instagram_username, city, notes) VALUES 
-- ('Test User', 'test@example.com', '@testuser', 'Lagos', 'I love the Nigerian vibe and voice features!'),
-- ('Demo User', 'demo@example.com', '@demouser', 'Abuja', 'The AI suggestions feature sounds amazing!');

-- View the table structure
SELECT 
    column_name, 
    data_type, 
    is_nullable, 
    column_default 
FROM information_schema.columns 
WHERE table_name = 'waitlist' 
ORDER BY ordinal_position;
