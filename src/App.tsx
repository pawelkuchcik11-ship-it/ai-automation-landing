import { useState } from "react";
import {
  ArrowRight,
  Bot,
  Mail,
  Database,
  BarChart3,
  Zap,
  CheckCircle,
  Workflow,
  CalendarDays,
} from "lucide-react";

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
      setStatus("Sending...");

      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      setStatus("Thanks! Your automation audit request has been sent.");
      setSubmitted(true);
      form.reset();
    } catch {
      setStatus("Something went wrong. Please try again.");
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden px-6 py-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#facc15_0,transparent_35%)] opacity-20" />
        <div className="relative mx-auto max-w-7xl">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 text-black">
                <Zap size={22} />
              </div>
              <span className="text-lg font-bold">Nodewave</span>
            </div>

            <a
              href={CALENDLY_URL}
              target="_blank"
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-yellow-400"
            >
              Book a call
            </a>
          </nav>

          <div className="grid gap-16 py-24 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-300">
                AI automation studio for local businesses
              </p>

              <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
                Turn marketing chaos into automated growth.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
                We build AI-powered workflows that capture leads, reply instantly,
                save hours every week and organize your customer communication.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-7 py-4 font-bold text-black hover:bg-yellow-300"
                >
                  Get Free Automation Audit <ArrowRight size={18} />
                </a>

                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 font-semibold text-white hover:bg-white/10"
                >
                  Book Free Consultation
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {["AI emails", "CRM sync", "Lead automation"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <CheckCircle className="mb-3 text-yellow-400" size={22} />
                    <p className="font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <form
              id="contact"
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 shadow-2xl backdrop-blur"
            >
              <h2 className="text-3xl font-bold">Get your free automation audit</h2>
              <p className="mt-3 text-gray-400">
                Fill the form and our AI workflow will handle the first response.
              </p>

              <div className="mt-8 space-y-4">
                <input name="name" required placeholder="Your name" className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 text-white outline-none focus:border-yellow-400" />
                <input name="email" type="email" required placeholder="Your email" className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 text-white outline-none focus:border-yellow-400" />
                <input name="company" placeholder="Company name" className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 text-white outline-none focus:border-yellow-400" />
                <textarea name="message" rows={5} placeholder="What do you want to automate?" className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 text-white outline-none focus:border-yellow-400" />

                <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-4 font-bold text-black hover:bg-yellow-300">
                  Submit audit request <ArrowRight size={18} />
                </button>

                {status && <p className="text-sm text-yellow-300">{status}</p>}

                {submitted && (
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-yellow-400/40 px-5 py-4 font-bold text-yellow-300 hover:bg-yellow-400/10"
                  >
                    <CalendarDays size={18} />
                    Book a free call now
                  </a>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">What we automate</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black md:text-5xl">
            Systems that save time and convert leads faster.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              ["AI Email Automation", Mail],
              ["CRM Updates", Database],
              ["AI Chatbots", Bot],
              ["Reports", BarChart3],
            ].map(([title, Icon]: any) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-black p-7 hover:border-yellow-400/50">
                <Icon className="text-yellow-400" size={30} />
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">
                  Reduce manual work, improve response time and keep customer communication organized.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <Workflow className="text-yellow-400" size={36} />
              <h2 className="mt-5 text-4xl font-black">Your automation funnel</h2>
              <p className="mt-4 text-gray-300">
                From form submission to CRM, AI response and booked consultation — everything works automatically.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {["Form submitted", "Saved to CRM", "AI response generated", "Email sent automatically"].map((item) => (
                <div key={item} className="rounded-2xl bg-black p-5">
                  <CheckCircle className="mb-3 text-yellow-400" />
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}