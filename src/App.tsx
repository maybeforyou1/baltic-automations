export default function Site() {
    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
            {/* Top Bar */}
            <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-neutral-800">
                <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-600 shadow-[inset_0_1px_0_rgba(255,255,255,.2)]" />
                        <div>
                            <p className="text-xl font-semibold tracking-tight">Baltic Automations</p>
                            <p className="text-xs text-neutral-400 -mt-1">AI Systems for Real Estate & Clinics</p>
                        </div>
                    </div>
                    <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
                        <a href="#solutions" className="hover:text-white">Solutions</a>
                        <a href="#work" className="hover:text-white">Results</a>
                        <a href="#pricing" className="hover:text-white">Pricing</a>
                        <a href="#faq" className="hover:text-white">FAQ</a>
                        <a href="#contact" className="hover:text-white">Contact</a>
                    </nav>
                    <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-600 px-5 py-2.5 text-neutral-900 font-semibold shadow-lg hover:shadow-yellow-500/20">Get a Demo</a>
                </div>
            </header>

            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(234,179,8,.25),rgba(0,0,0,0))]" />
                <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 md:pt-24 md:pb-32">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
                                Luxury‑grade <span className="text-yellow-400">AI automation</span> that books clients while you sleep.
                            </h1>
                            <p className="mt-6 text-lg text-neutral-300 max-w-xl">
                                We implement secure, on‑brand AI assistants that answer questions, qualify leads and schedule appointments across web, WhatsApp and email. Built for Lithuanian real estate developers and clinics.
                            </p>
                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <a href="#pricing" className="rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-600 px-6 py-3 text-neutral-900 font-semibold shadow-xl hover:shadow-yellow-500/30">See Packages</a>
                                <a href="#work" className="rounded-2xl border border-neutral-800 px-6 py-3 font-medium hover:bg-neutral-900">View Results</a>
                            </div>
                            <div className="mt-6 text-sm text-neutral-400">GDPR‑ready • Human‑in‑the‑loop • 30–50% ticket deflection</div>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-3xl border border-neutral-800 bg-neutral-900 p-4 shadow-2xl">
                                <div className="rounded-2xl bg-neutral-950 p-6 border border-neutral-800">
                                    <p className="text-sm text-neutral-400 mb-2">Live Demo Preview</p>
                                    <div className="rounded-xl border border-neutral-800 p-4 bg-neutral-900">
                                        <div className="text-sm text-neutral-400 mb-2">Client asks:</div>
                                        <div className="rounded-lg bg-neutral-800 p-3 w-fit">Do you have 2‑bed apartments in Šnipiškės?</div>
                                        <div className="h-3" />
                                        <div className="text-sm text-neutral-400 mb-2 self-end text-right">Assistant:</div>
                                        <div className="rounded-lg bg-yellow-500/10 border border-yellow-500/20 p-3 w-fit ml-auto">
                                            <span className="text-yellow-300">We do.</span> Typical range is €190–240k. Want me to book a viewing for tomorrow 13:30 or 17:00?
                                        </div>
                                        <div className="mt-4 flex gap-2 justify-end">
                                            <button className="rounded-xl border border-neutral-700 px-3 py-1.5 text-sm hover:bg-neutral-800">Tomorrow 13:30</button>
                                            <button className="rounded-xl border border-neutral-700 px-3 py-1.5 text-sm hover:bg-neutral-800">Tomorrow 17:00</button>
                                        </div>
                                    </div>
                                    <div className="mt-4 text-xs text-neutral-500">24/7 lead capture • Auto‑calendar booking • Human fallback</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof */}
            <section className="border-y border-neutral-800 bg-neutral-900/30">
                <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <Stat kpi="30–50%" label="Ticket Deflection" />
                    <Stat kpi="+22%" label="More Booked Visits" />
                    <Stat kpi="< 2 wks" label="Time to Value" />
                    <Stat kpi="99.9%" label="Uptime & Monitoring" />
                </div>
            </section>

            {/* Solutions */}
            <section id="solutions" className="mx-auto max-w-7xl px-6 py-20">
                <div className="grid md:grid-cols-3 gap-6">
                    <SolutionCard title="AI Concierge for Real Estate" points={["Qualifies buyers by budget & area", "Books viewings into your calendar", "Routes hot leads to agents instantly"]} />
                    <SolutionCard title="Clinic Booking Assistant" points={["Answers services & pricing", "Collects patient data securely", "Schedules & reminds via SMS/email"]} />
                    <SolutionCard title="Omnichannel Automation" points={["Website • WhatsApp • Messenger • Email", "Syncs with HubSpot/Pipedrive", "Weekly optimization & reporting"]} />
                </div>
            </section>

            {/* Case Study / Results */}
            <section id="work" className="mx-auto max-w-7xl px-6 pb-20">
                <div className="rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Proven impact within 30 days</h2>
                            <p className="mt-4 text-neutral-300">We pilot on one high‑value journey, measure deflection, bookings and response times, then expand. If we don’t hit an agreed KPI by day 60, your second month is free.</p>
                            <ul className="mt-6 space-y-3 text-neutral-200">
                                <li className="flex items-start gap-3"><Bullet /> 42% support deflection for a multi‑clinic group.</li>
                                <li className="flex items-start gap-3"><Bullet /> +19% booked viewings for a Vilnius developer.</li>
                                <li className="flex items-start gap-3"><Bullet /> 6 minutes saved per routine query on average.</li>
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <MiniMetric title="Leads captured" value="312/mo" />
                            <MiniMetric title="Bookings" value="184/mo" />
                            <MiniMetric title="CSAT" value="4.7/5" />
                            <MiniMetric title="ROI" value="8.4×" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="mx-auto max-w-7xl px-6 pb-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Packages</h2>
                    <p className="mt-3 text-neutral-300">Choose a plan that fits your growth. All packages include GDPR‑ready data handling and human‑in‑the‑loop safeguards.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <PriceCard tier="Silver" price="€1,500/mo" setup="€2,000 setup" cta="Start Silver" perks={["AI assistant on one channel (web)", "Lead capture + email alerts", "Basic FAQ training", "Monthly performance report"]} />
                    <PriceCard tier="Gold" featured price="€3,000/mo" setup="€3,000 setup" cta="Go Gold" perks={["Everything in Silver", "Omnichannel (web + WhatsApp/Messenger)", "Calendar booking + reminders", "CRM sync (HubSpot/Pipedrive)", "Weekly optimization call"]} />
                    <PriceCard tier="Platinum" price="€6,000/mo" setup="€5,000 setup" cta="Own the Market" perks={["Everything in Gold", "Custom integrations (ERP/EMR)", "Advanced analytics dashboard", "Prioritized SLA & dedicated manager", "Quarterly strategy + A/B testing"]} />
                </div>
                <p className="text-center text-sm text-neutral-400 mt-6">Need a pilot? Ask about our 2‑week feasibility sprint.</p>
            </section>

            {/* FAQ */}
            <section id="faq" className="mx-auto max-w-6xl px-6 pb-24">
                <h2 className="text-3xl font-semibold tracking-tight mb-8">FAQ</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <Faq q="How fast can we go live?" a="Most pilots launch in under 2 weeks once we have access to your tools and knowledge base." />
                    <Faq q="Is this safe and GDPR‑compliant?" a="Yes. We minimize data, add audit logs, and include human‑in‑the‑loop for sensitive topics. A DPA can be signed." />
                    <Faq q="Will the AI replace our staff?" a="No. It handles routine questions 24/7 so your team can focus on complex, high‑value cases." />
                    <Faq q="Do you integrate with our systems?" a="We connect to HubSpot, Pipedrive, Google Workspace, Calendly and most helpdesks. Custom integrations available in Platinum." />
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="mx-auto max-w-3xl px-6 pb-24">
                <div className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-8">
                    <h2 className="text-3xl font-semibold tracking-tight">Request a demo</h2>
                    <p className="mt-2 text-neutral-300">Tell us about your goals. We’ll share a 3‑minute personalized walkthrough and a clear ROI plan.</p>
                    <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input className="rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/40" placeholder="Full name" />
                        <input className="rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/40" placeholder="Work email" />
                        <input className="rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/40 md:col-span-2" placeholder="Company & website" />
                        <select className="rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 text-neutral-300 focus:outline-none focus:ring-2 focus:ring-yellow-500/40">
                            <option>Industry</option>
                            <option>Real Estate</option>
                            <option>Clinic / Healthcare</option>
                            <option>Other</option>
                        </select>
                        <select className="rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 text-neutral-300 focus:outline-none focus:ring-2 focus:ring-yellow-500/40">
                            <option>Plan of interest</option>
                            <option>Silver</option>
                            <option>Gold</option>
                            <option>Platinum</option>
                        </select>
                        <textarea className="rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/40 md:col-span-2" rows={4} placeholder="What problem should we solve first?" />
                        <button type="button" className="md:col-span-2 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-600 px-6 py-3 text-neutral-900 font-semibold shadow-xl hover:shadow-yellow-500/30">Send request</button>
                        <p className="md:col-span-2 text-xs text-neutral-500 mt-2">By submitting, you agree we may contact you about your inquiry. We do not sell personal data.</p>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-neutral-800">
                <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-neutral-400">© {new Date().getFullYear()} Baltic Automations. All rights reserved.</p>
                    <div className="flex items-center gap-6 text-sm text-neutral-400">
                        <a href="#" className="hover:text-white">Privacy</a>
                        <a href="#" className="hover:text-white">Data Processing</a>
                        <a href="#contact" className="hover:text-white">Book a Demo</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function Stat({ kpi, label }: { kpi: string; label: string }) {
    return (
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
            <div className="text-3xl font-semibold text-yellow-400">{kpi}</div>
            <div className="text-sm text-neutral-400 mt-1">{label}</div>
        </div>
    );
}

function SolutionCard({ title, points }: { title: string; points: string[] }) {
    return (
        <div className="rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-6">
            <h3 className="text-xl font-semibold">{title}</h3>
            <ul className="mt-4 space-y-2 text-neutral-300">
                {points.map((p, i) => (
                    <li key={i} className="flex items-start gap-3"><Bullet />{p}</li>
                ))}
            </ul>
        </div>
    );
}

function Bullet() {
    return (
        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600" />
    );
}

function MiniMetric({ title, value }: { title: string; value: string }) {
    return (
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5">
            <div className="text-neutral-400 text-xs">{title}</div>
            <div className="text-2xl font-semibold mt-1">{value}</div>
        </div>
    );
}

function PriceCard({ tier, price, setup, cta, perks, featured }: { tier: string; price: string; setup: string; cta: string; perks: string[]; featured?: boolean }) {
    return (
        <div className={
            "relative rounded-3xl border p-6 flex flex-col" +
            (featured
                ? " border-yellow-500/40 bg-gradient-to-br from-yellow-500/10 to-amber-500/10 shadow-[0_0_0_1px_rgba(234,179,8,.15)]"
                : " border-neutral-800 bg-neutral-900/40")
        }>
            {featured && (
                <div className="absolute -top-3 right-4 rounded-full bg-gradient-to-r from-yellow-400 to-amber-600 px-3 py-1 text-xs font-semibold text-neutral-900 shadow">Most Popular</div>
            )}
            <h3 className="text-xl font-semibold">{tier}</h3>
            <div className="mt-2 text-3xl font-semibold text-yellow-400">{price}</div>
            <div className="text-sm text-neutral-400">{setup}</div>
            <ul className="mt-5 space-y-2 text-neutral-200">
                {perks.map((p, i) => (
                    <li key={i} className="flex items-start gap-3"><Bullet />{p}</li>
                ))}
            </ul>
            <div className="mt-6" />
            <a href="#contact" className={
                "mt-auto inline-flex justify-center rounded-2xl px-5 py-3 font-semibold " +
                (featured
                    ? " bg-gradient-to-br from-yellow-400 to-amber-600 text-neutral-900 shadow-xl hover:shadow-yellow-500/30"
                    : " border border-neutral-700 hover:bg-neutral-900")
            }>
                {cta}
            </a>
        </div>
    );
}

function Faq({ q, a }: { q: string; a: string }) {
    return (
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/30 p-5">
            <p className="font-semibold text-neutral-100">{q}</p>
            <p className="mt-2 text-neutral-400">{a}</p>
        </div>
    );
}
