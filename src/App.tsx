import { useState } from "react";
import {
  ArrowRight,
  Bot,
  CalendarDays,
  CheckCircle,
  Database,
  Mail,
  MessageSquare,
  Sparkles,
  Zap,
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(250,204,21,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_28%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-8">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-[0_0_40px_rgba(250,204,21,0.35)]">
                <Zap size={20} />
              </div>
              <div>
                <p className="text-sm font-bold tracking-tight">Nodewave</p>
                <p className="text-xs text-zinc-500">AI Automation Studio</p>
              </div>
            </div>

            <a
              href={CALENDLY_URL}
              target="_blank"
              className="rounded-full border border-white/10 bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-yellow-400"
            >
              Book a call <span className="text-zinc-500">(umów rozmowę)</span>
            </a>
          </nav>

          <div className="grid gap-16 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-300">
                <Sparkles size={16} />
                Built for local businesses <span className="text-yellow-100/60">(dla lokalnych firm)</span>
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
                Turn missed leads into booked calls.
                <span className="block text-yellow-400">Automatically.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300">
                AI workflows that qualify leads, reply instantly and organize your customer communication
                while you focus on running the business.
              </p>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
                (Automatyzacje AI, które oceniają leady, odpowiadają klientom i porządkują komunikację,
                gdy Ty zajmujesz się prowadzeniem firmy.)
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-7 py-4 font-bold text-black transition hover:bg-yellow-300"
                >
                  Get Free Automation Audit <ArrowRight size={18} />
                </a>

                <a
                  href="#workflow"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  See how it works <span className="text-zinc-500">(zobacz jak działa)</span>
                </a>
              </div>

              <div className="mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">
                {[
                  ["8 sec", "AI response time", "czas odpowiedzi AI"],
                  ["24/7", "Lead capture", "zbieranie leadów"],
                  ["CRM", "Auto-sync", "automatyczny zapis"],
                ].map(([value, label, pl]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-2xl font-black text-yellow-400">{value}</p>
                    <p className="mt-1 text-sm font-medium">{label}</p>
                    <p className="text-xs text-zinc-500">({pl})</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] border border-white/10 bg-black p-5">
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-sm font-semibold">Live workflow preview</p>
                  <p className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">Running</p>
                </div>

                <div className="space-y-3">
                  <WorkflowItem icon={<MessageSquare />} title="New lead submitted" pl="Nowy lead wysłany" />
                  <WorkflowItem icon={<Bot />} title="AI qualifies the lead" pl="AI ocenia jakość leada" highlight />
                  <WorkflowItem icon={<Database />} title="Saved to CRM" pl="Zapis do CRM" />
                  <WorkflowItem icon={<Mail />} title="Email sent automatically" pl="Automatyczny email" />
                  <WorkflowItem icon={<CalendarDays />} title="Call booked in Calendly" pl="Rozmowa umówiona w Calendly" />
                </div>
              </div>
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

function WorkflowItem({
  icon,
  title,
  pl,
  highlight = false,
}: {
  icon: React.ReactNode;
  title: string;
  pl: string;
  highlight?: boolean;
}) {
  return (
    <div className={`flex items-center gap-4 rounded-2xl border p-4 ${highlight ? "border-yellow-400/40 bg-yellow-400/10" : "border-white/10 bg-white/[0.035]"}`}>
      <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${highlight ? "bg-yellow-400 text-black" : "bg-white/10 text-yellow-400"}`}>
        {icon}
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-xs text-zinc-500">({pl})</p>
      </div>
      <CheckCircle className="ml-auto text-yellow-400" size={18} />
    </div>
  );
}