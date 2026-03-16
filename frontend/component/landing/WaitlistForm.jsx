import React, { useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const hasSupabaseConfig = Boolean(supabaseUrl && supabaseKey);
const supabase = hasSupabaseConfig ? createClient(supabaseUrl, supabaseKey) : null;

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    const payload = {
      full_name: formData.fullName.trim(),
      email: formData.email.trim(),
      instagram_username: null,
    };

    try {
      if (!supabase) {
        setStatus('error');
        setMessage('Waitlist is unavailable right now. Please try again.');
        return;
      }

      const { error } = await supabase.from('waitlist').insert([payload]);
      if (error) {
        throw error;
      }

      setStatus('success');
      setMessage('You are on the waitlist. We will email you before launch.');
      setFormData({ fullName: '', email: '' });
    } catch (error) {
      const errorMessage = error?.message || 'Something went wrong. Please try again.';
      setStatus('error');
      if (error?.code === '42501') {
        setMessage('Database policy blocked insert. Check Supabase RLS insert policy for table "waitlist".');
        return;
      }
      setMessage(
        errorMessage.toLowerCase().includes('duplicate')
          ? 'This email is already on the waitlist.'
          : errorMessage
      );
    }
  };

  return (
    <section id="waitlist" className="px-4 pb-20 sm:px-6 sm:pb-28">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#E5DBCC] bg-white px-6 py-10 shadow-[0_18px_54px_rgba(30,26,20,0.09)] sm:px-10 sm:py-14">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A26A3F]">Early access</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold text-[#1D1C18] sm:text-4xl">
            Join the waitlist to get early access.
          </h2>
        </div>

        {status === 'success' ? (
          <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-[#D6E9CB] bg-[#F1FAEC] p-8 text-center">
            <CheckCircle2 className="mx-auto h-10 w-10 text-[#4E8C06]" />
            <h3 className="mt-4 text-2xl font-semibold text-[#1D1C18]">You are on the waitlist</h3>
            <p className="mt-2 text-sm text-[#4F6550] sm:text-base">{message}</p>
            <button
              className="mt-5 text-sm font-semibold text-[#ED8522] hover:text-[#C94B16]"
              onClick={() => setStatus('idle')}
            >
              Add another email
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-10 grid max-w-2xl gap-5">
            <div className="grid gap-2">
              <label htmlFor="fullName" className="text-sm font-medium text-[#49453E]">
                Full name
              </label>
              <input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                type="text"
                required
                placeholder="Your full name"
                className="h-12 rounded-2xl border border-[#DCD2C5] bg-[#FFFEFC] px-4 text-sm text-[#201D18] outline-none transition-colors focus:border-[#ED8522]"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium text-[#49453E]">
                Email
              </label>
              <input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                required
                placeholder="you@example.com"
                className="h-12 rounded-2xl border border-[#DCD2C5] bg-[#FFFEFC] px-4 text-sm text-[#201D18] outline-none transition-colors focus:border-[#ED8522]"
              />
            </div>

            {status === 'error' && (
              <p className="rounded-2xl border border-[#F1B6B6] bg-[#FFF1F1] px-4 py-3 text-sm text-[#B93838]">{message}</p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#ED8522] px-6 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(237,133,34,0.22)] transition-colors hover:bg-[#C94B16] disabled:cursor-not-allowed disabled:bg-[#E79A78]"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Joining waitlist...
                </>
              ) : (
                'Join waitlist'
              )}
            </button>

            <p className="text-center text-xs text-[#7A7368]">No spam. Just launch updates and early access invites.</p>
          </form>
        )}
      </div>
    </section>
  );
}
