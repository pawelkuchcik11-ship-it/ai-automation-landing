import { useState } from "react";
import { ArrowRight, CalendarDays } from "lucide-react";

const WEBHOOK_URL = "https://mysaveplace.app.n8n.cloud/webhook/lead-form";
const CALENDLY_URL = "https://calendly.com/pawel-kuchcik11/30min";

export default function App() {
  const [status, setStatus] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("message"),
    };

    try {
      setStatus("Sending... (wysyłanie...)");

      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      setStatus("Request sent. Book your call below. (Zgłoszenie wysłane. Umów rozmowę poniżej.)");
      setSubmitted(true);
      form.reset();
    } catch {
      setStatus("Something went wrong. Please try again. (Coś poszło nie tak. Spróbuj ponownie.)");
    }
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-black text-white">
  <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black opacity-90"></div>

  <div className="relative mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:justify-between">
    
    <div className="max-w-2xl">
      
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur">
        <span className="h-2 w-2 rounded-full bg-green-400"></span>
        AI Automation Studio for Local Businesses
      </div>

      <h1 className="text-5xl font-bold leading-tight tracking-tight lg:text-7xl">
        Turn repetitive work into{" "}
        <span className="bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
          automated growth.
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
        We build AI systems that capture leads, respond instantly,
        organize customer communication and save hours every week.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        
        <a
          href="https://calendly.com/pawel-kuchcik11/30min"
          target="_blank"
          className="rounded-xl bg-white px-6 py-4 text-center font-semibold text-black transition hover:scale-105 hover:bg-zinc-200"
        >
          Book Free Consultation
        </a>

        <a
          href="#audit"
          className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-center font-semibold text-white backdrop-blur transition hover:bg-white/10"
        >
          Get Free Audit
        </a>

      </div>

      <div className="mt-12 flex flex-wrap gap-8 text-sm text-zinc-500">
        <div>
          <p className="text-2xl font-bold text-white">40h+</p>
          <p>Saved Weekly</p>
        </div>

        <div>
          <p className="text-2xl font-bold text-white">98%</p>
          <p>Faster Response Time</p>
        </div>

        <div>
          <p className="text-2xl font-bold text-white">24/7</p>
          <p>AI Lead Handling</p>
        </div>
      </div>
    </div>

    <div className="mt-16 lg:mt-0">
      
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-zinc-400">
              Automation Dashboard
            </p>

            <h3 className="text-xl font-semibold">
              Live Lead Activity
            </h3>
          </div>

          <div className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
            Live
          </div>
        </div>

        <div className="space-y-4">
          
          <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">New Lead Captured</p>
                <p className="text-sm text-zinc-500">
                  Dental Clinic
                </p>
              </div>

              <span className="text-green-400">Hot Lead</span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">AI Email Sent</p>
                <p className="text-sm text-zinc-500">
                  Follow-up completed
                </p>
              </div>

              <span className="text-blue-400">Success</span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Meeting Booked</p>
                <p className="text-sm text-zinc-500">
                  Calendly synced
                </p>
              </div>

              <span className="text-purple-400">Booked</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

<section className="border-b border-white/10 bg-[#070707] px-6 py-24 text-white">
  <div className="mx-auto max-w-7xl">

    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
        How it works
      </p>

      <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
        A simple automation system that works 24/7.
      </h2>

      <p className="mt-6 text-lg text-zinc-400">
        From lead capture to follow-up emails and Discord notifications —
        everything runs automatically in the background.
      </p>
    </div>

    <div className="mt-20 grid gap-6 md:grid-cols-3">

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10 text-2xl">
          1
        </div>

        <h3 className="text-2xl font-bold">
          Lead captured
        </h3>

        <p className="mt-4 text-zinc-400">
          A customer fills out the form on your website.
          The automation instantly captures all data.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl">
          2
        </div>

        <h3 className="text-2xl font-bold">
          AI qualification
        </h3>

        <p className="mt-4 text-zinc-400">
          AI analyzes the lead quality, scores the request
          and decides what happens next.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-2xl">
          3
        </div>

        <h3 className="text-2xl font-bold">
          Automated follow-up
        </h3>

        <p className="mt-4 text-zinc-400">
          Your team receives notifications, CRM updates
          and automated AI responses immediately.
        </p>
      </div>

    </div>
  </div>
</section>

      <section id="contact" className="border-t border-white/10 bg-[#080808] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
              Free audit <span className="normal-case tracking-normal text-zinc-500">(darmowa analiza)</span>
            </p>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Show us your process. We’ll show you what can be automated.
            </h2>
            <p className="mt-5 max-w-xl text-zinc-400">
              Tell us where your marketing or customer communication feels messy.
              The system will save your lead, score it, notify Discord and send an AI-generated reply.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-black p-8">
            <div className="space-y-4">
              <input name="name" required placeholder="Your name (Twoje imię)" className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 outline-none transition focus:border-yellow-400" />
              <input name="email" type="email" required placeholder="Your email (Twój email)" className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 outline-none transition focus:border-yellow-400" />
              <input name="company" placeholder="Company name (Nazwa firmy)" className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 outline-none transition focus:border-yellow-400" />
              <textarea name="message" rows={5} placeholder="What do you want to automate? (Co chcesz zautomatyzować?)" className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 outline-none transition focus:border-yellow-400" />

              <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-4 font-black text-black transition hover:bg-yellow-300">
                Submit audit request <ArrowRight size={18} />
              </button>

              {status && <p className="text-sm text-yellow-300">{status}</p>}

              {submitted && (
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl border border-yellow-400/40 px-6 py-4 font-bold text-yellow-300 transition hover:bg-yellow-400/10"
                >
                  <CalendarDays size={18} />
                  Book a free call now <span className="text-yellow-100/60">(umów darmową rozmowę)</span>
                </a>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
