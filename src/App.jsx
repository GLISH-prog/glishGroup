const stats = [
  { value: '0', label: 'Sites livrés' },
  { value: '100%', label: 'Design sur-mesure' },
  { value: '7 jours', label: 'MVP rapide' },
]

const steps = [
  {
    title: 'Brief express',
    desc: 'Objectif, audience, pages clés. On pose une direction claire.',
  },
  {
    title: 'Design & contenu',
    desc: 'Maquettes modernes, micro-animations, contenu structuré.',
  },
  {
    title: 'Lancement',
    desc: 'Site React + Tailwind, optimisé mobile et performant.',
  },
]

const offers = [
  {
    title: 'Landing page',
    price: 'De 30 000 a 80 000 FCFA',
    items: ['1 page optimisée', 'Design sur-mesure', 'Formulaire de contact'],
  },
  {
    title: 'Site vitrine',
    price: 'A partir de 100 000 FCFA',
    items: ['4 a 6 pages', 'Animations modernes', 'SEO de base'],
  },
  {
    title: 'Refonte',
    price: 'Sur devis (FCFA)',
    items: ['Audit design', 'Nouveau look', 'Migration rapide'],
  },
]

const projects = [
  { name: 'Studio Nova', tag: 'Site one-page' },
  { name: 'Maison Kivu', tag: 'Site vitrine premium' },
  { name: 'Judo Elite', tag: 'Club sportif' },
]

export default function App() {
  return (
    <div className="min-h-screen bg-grid">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-night/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan/15 text-cyan shadow-glow">
              <span className="font-display text-xl">G</span>
            </div>
            <div>
              <p className="font-display text-lg text-white">glishGroup</p>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Agence web</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-white/70 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#offres" className="hover:text-white">Offres</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-cyan/20 px-5 py-2 text-sm font-semibold text-cyan ring-1 ring-cyan/40 transition hover:bg-cyan/30"
          >
            Demander un devis
          </a>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-20 pt-14">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="glass rounded-[2.5rem] px-10 py-12 shadow-soft">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">Conception de sites web</p>
              <h1 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl">
                glishGroup conçoit des sites web modernes, rapides et clairs.
              </h1>
              <p className="mt-5 text-lg text-white/70 text-balance">
                Une agence focalisée sur une seule mission : créer des sites web qui convertissent et
                renforcent la crédibilité de ta marque.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#offres"
                  className="rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-night shadow-glow transition hover:-translate-y-1"
                >
                  Voir les offres
                </a>
                <a
                  href="#services"
                  className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Notre service
                </a>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="panel rounded-3xl px-5 py-6 text-center shadow-soft"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <p className="font-display text-2xl text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-[2.5rem] bg-slate px-8 py-10 text-white shadow-soft">
            <div className="absolute -right-10 top-8 h-32 w-32 rounded-full bg-blue/40 blur-3xl" />
            <div className="absolute bottom-8 left-6 h-24 w-24 rounded-full bg-cyan/40 blur-2xl" />
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Focus</p>
            <h2 className="mt-4 font-display text-3xl">Site web sur-mesure</h2>
            <p className="mt-4 text-sm text-white/70">
              Interfaces sobres, structure claire, expérience fluide. Chaque pixel sert ton objectif.
            </p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 px-5 py-5">
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">Stack</p>
              <p className="mt-3 text-lg">React + TailwindCSS</p>
            </div>
            <div className="mt-10 grid gap-4">
              {projects.map((project) => (
                <div key={project.name} className="rounded-2xl border border-white/10 px-5 py-4">
                  <p className="text-lg font-semibold">{project.name}</p>
                  <p className="text-sm text-white/60">{project.tag}</p>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section id="services" className="grid gap-8 lg:grid-cols-[0.6fr_1fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Service unique</p>
            <h2 className="font-display text-3xl text-white">Conception de sites web</h2>
            <p className="text-sm text-white/70">
              Un seul service, mais une exécution premium. Pages vitrines et landing pages performantes.
            </p>
          </div>
          <div className="glass rounded-3xl px-8 py-8 shadow-soft">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="font-display text-xl text-white">UX claire</p>
                <p className="mt-2 text-sm text-white/70">
                  Parcours simple, contenu priorisé, sections bien hiérarchisées.
                </p>
              </div>
              <div>
                <p className="font-display text-xl text-white">Design moderne</p>
                <p className="mt-2 text-sm text-white/70">
                  Couleurs tech, typographies nettes, ambiance digitale.
                </p>
              </div>
              <div>
                <p className="font-display text-xl text-white">Responsive total</p>
                <p className="mt-2 text-sm text-white/70">
                  Mobile first, parfaitement fluide sur tous les écrans.
                </p>
              </div>
              <div>
                <p className="font-display text-xl text-white">Livraison rapide</p>
                <p className="mt-2 text-sm text-white/70">
                  Première version disponible en une semaine.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="grid gap-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">Process</p>
              <h2 className="font-display text-3xl text-white">Un workflow simple et efficace</h2>
            </div>
            <p className="max-w-xl text-sm text-white/70">
              Tu suis chaque étape, avec une visibilité complète jusqu'à la mise en ligne.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="panel rounded-3xl px-6 py-8 shadow-soft"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Etape {index + 1}</p>
                <p className="mt-3 font-display text-xl text-white">{step.title}</p>
                <p className="mt-2 text-sm text-white/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="offres" className="grid gap-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">Offres</p>
              <h2 className="font-display text-3xl text-white">Choisis le format adapté</h2>
            </div>
            <p className="max-w-xl text-sm text-white/70">
              Chaque offre est personnalisable selon ton activité et ton budget.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {offers.map((offer) => (
              <div key={offer.title} className="glass rounded-3xl px-7 py-8 shadow-soft">
                <p className="font-display text-2xl text-white">{offer.title}</p>
                <p className="mt-3 text-sm text-white/60">{offer.price}</p>
                <ul className="mt-5 space-y-2 text-sm text-white/70">
                  {offer.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex rounded-full bg-cyan/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan"
                >
                  Demander
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass rounded-[2.5rem] px-10 py-10 shadow-soft">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Contact</p>
            <h2 className="mt-4 font-display text-3xl text-white">Parlons de ton projet</h2>
            <p className="mt-3 text-sm text-white/70">
              Envoie un message et on revient vers toi rapidement avec une proposition claire.
            </p>
            <form
              className="mt-6 grid gap-4"
              action="mailto:shekinahkitsoro@gmail.com"
              method="post"
              encType="text/plain"
            >
              <input
                type="text"
                placeholder="Nom complet"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40"
              />
              <input
                type="email"
                placeholder="Email"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40"
              />
              <textarea
                rows="4"
                placeholder="Parle-nous de ton site"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40"
              />
              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-night shadow-glow"
                >
                  Envoyer
                </button>
                <a
                  href="https://wa.me/24268069454"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-cyan/40 px-6 py-3 text-sm font-semibold text-cyan transition hover:bg-cyan/10"
                >
                  WhatsApp
                </a>
              </div>
            </form>
          </div>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-slate px-10 py-10 text-white shadow-soft">
            <div className="absolute -right-6 top-10 h-32 w-32 rounded-full bg-violet/40 blur-3xl" />
            <div className="absolute bottom-8 left-6 h-24 w-24 rounded-full bg-cyan/40 blur-2xl" />
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Disponibilité</p>
            <h3 className="mt-4 font-display text-2xl">Des slots ouverts ce mois-ci</h3>
            <p className="mt-3 text-sm text-white/70">
              2 nouveaux projets acceptés par mois pour garantir un suivi premium.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <p>Email: shekinahkitsoro@gmail.com</p>
              <p>WhatsApp: +242 068069454</p>
              <p>Ville: Disponible à distance</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 text-sm text-white/60">
          <p>© 2026 glishGroup. Conception de sites web uniquement.</p>
          <p>React + TailwindCSS</p>
        </div>
      </footer>
    </div>
  )
}
