# 🚀 Ginja Landing Page Setup Instructions

## 📋 **What I've Created For You:**

### ✅ **1. Database Schema (supabase_waitlist_setup.sql)**
Your waitlist table includes:
- **full_name** - User's full name
- **email** - Email address (unique)
- **instagram_username** - Instagram handle (optional)
- **city** - User's city/area
- **notes** - What features they want to see
- **created_at** - Timestamp when they joined
- **status** - Track waitlist progress
- **Additional fields** - IP, user agent, referrer for analytics

### ✅ **2. Updated Form Fields**
The waitlist form now matches your database schema with:
- Full Name (required)
- Email (required)
- Instagram Username (optional)
- City/Area (required)
- Feature Requests (required)

## 🔧 **Setup Steps:**

### **Step 1: Create Database Table**
1. Go to your Supabase dashboard
2. Navigate to SQL Editor
3. Copy and paste the contents of `supabase_waitlist_setup.sql`
4. Run the script

### **Step 2: Get Your Supabase Keys**
1. In Supabase dashboard, go to Settings > API
2. Copy your:
   - **Project URL**: `https://kjdkvhfmjsrnlvkfmvuj.supabase.co`
   - **Anon/Public Key**: `eyJ...` (long key starting with eyJ)

### **Step 3: Update Environment Variables**
Create `frontend/.env.local` with:
```bash
NEXT_PUBLIC_SUPABASE_URL=https://kjdkvhfmjsrnlvkfmvuj.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-actual-anon-key-here
```

### **Step 4: Start Your App**
```bash
cd frontend
npm run dev
```

Visit: http://localhost:3000

## 🎯 **Current Status:**
- ✅ Frontend code is ready and working
- ✅ Database schema is designed
- ✅ Form handles demo mode (works without Supabase)
- ⏳ **You need to**: Run the SQL script and add your anon key

## 🔍 **Testing:**
1. **Demo Mode**: Works right now without Supabase setup
2. **Full Mode**: After adding your anon key, form will save to database
3. **View Data**: Check your Supabase dashboard > Table Editor > waitlist

## 📊 **Database Features:**
- **Row Level Security** enabled for security
- **Indexes** for fast queries
- **Automatic timestamps** for tracking
- **Status tracking** for managing leads
- **Analytics fields** for insights

## 🇳🇬 **Nigerian Features Included:**
- Authentic Nigerian tone throughout
- Lagos/Abuja/Port Harcourt city examples
- Instagram integration for social connection
- Feature request field for user feedback

---

**Ready to see your landing page? The form works in demo mode right now!** 🚀
