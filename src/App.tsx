import { useState } from "react";
import { ArrowRight, Bot, Mail, Database, BarChart3, Zap, CheckCircle } from "lucide-react";

export default function App() {
  const [status, setStatus] = useState("");

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

      await fetch("https://mysaveplace.app.n8n.cloud/webhook-test/lead-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      setStatus("Thanks! We'll contact you shortly.");
      form.reset();
    } catch {
      setStatus("Something went wrong. Please try again.");
    }
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-7xl px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <div className="h-8 w-8 rounded-lg bg-yellow-400 flex items-center justify-center text-black">
              <Zap size={18} />
            </div>
            Nodewave
          </div>
          <a href="#contact" className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black">
            Free Audit
          </a>
        </nav>

        <div className="grid gap-14 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm text-yellow-400">AI automation studio for local businesses</p>
            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Stop Losing Customers Because of Slow Manual Processes.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-gray-300">
              We build AI-powered systems that capture leads, reply instantly, save your time and organize your marketing.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black">
                Get Free Automation Audit
              </a>
              <a href="#services" className="rounded-full border border-white/20 px-6 py-3 text-gray-200">
                See Services
              </a>
            </div>
          </div>

          <form id="contact" onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
            <h2 className="text-2xl font-bold">Tell us about your business</h2>
            <p className="mt-2 text-sm text-gray-400">We’ll send your data to n8n and trigger your AI workflow.</p>

            <div className="mt-6 space-y-4">
              <input name="name" required placeholder="Your name" className="w-full rounded-xl bg-white px-4 py-3 text-black" />
              <input name="email" type="email" required placeholder="Your email" className="w-full rounded-xl bg-white px-4 py-3 text-black" />
              <input name="company" placeholder="Company name" className="w-full rounded-xl bg-white px-4 py-3 text-black" />
              <textarea name="message" rows={5} placeholder="What do you want to automate?" className="w-full rounded-xl bg-white px-4 py-3 text-black" />

              <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 font-bold text-black">
                Submit <ArrowRight size={18} />
              </button>

              {status && <p className="text-sm text-yellow-300">{status}</p>}
            </div>
          </form>
        </div>
      </section>

      <section id="services" className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold">What we automate</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              ["Email Automation", Mail],
              ["CRM Updates", Database],
              ["AI Chatbots", Bot],
              ["Reports", BarChart3],
            ].map(([title, Icon]: any) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Icon className="text-yellow-400" />
                <h3 className="mt-4 font-bold">{title}</h3>
                <p className="mt-2 text-sm text-gray-400">Reduce manual work and improve customer communication.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white p-10 text-black">
          <h2 className="text-4xl font-bold">Your automation funnel</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {["Form submitted", "Saved to CRM", "AI response", "Email sent"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="text-green-600" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}