import Link from "next/link";

const articles = [
  {
    number: "01",
    date: "SEPTEMBRE 2026",
    title: "BIENVENUE CHEZ HÉRITAGE CONSERVATEUR",
    text:
      "Découvrez notre mouvement étudiant et notre vision pour l'avenir.",
    href: "/actualites/bienvenue",
  },
  {
    number: "02",
    date: "BIENTÔT",
    title: "DE NOUVELLES IDÉES POUR NOTRE ÉCOLE",
    text:
      "Notre équipe prépare de nouveaux projets et propositions.",
    href: "/actualites/programme",
  },
  {
    number: "03",
    date: "2026",
    title: "UNE NOUVELLE GÉNÉRATION S'ENGAGE",
    text:
      "Des élèves de secondaire 5 décident de faire entendre leur voix.",
    href: "/actualites/generation",
  },
];

export default function Actualites() {
  return (
    <main className="news-page">
      <nav className="navbar">
        <Link href="/" className="brand">
          <img
            src="/1000011275.jpg"
            alt="Héritage Conservateur"
          />

          <div>
            <strong>HÉRITAGE</strong>
            <span>CONSERVATEUR</span>
          </div>
        </Link>

        <Link href="/" className="back-link">
          ← ACCUEIL
        </Link>
      </nav>

      <section className="news-page-hero">
        <p className="eyebrow">
          HÉRITAGE CONSERVATEUR · 2026
        </p>

        <h1>
          NOS
          <br />
          <span>ACTUALITÉS.</span>
        </h1>

        <p>
          Toutes les nouvelles, les projets et les annonces
          du mouvement.
        </p>
      </section>

      <section className="all-articles">
        {articles.map((article) => (
          <Link
            href={article.href}
            key={article.number}
            className="article-row"
          >
            <span className="article-number">
              {article.number}
            </span>

            <div>
              <p className="article-date">
                {article.date}
              </p>

              <h2>{article.title}</h2>

              <p className="article-text">
                {article.text}
              </p>
            </div>

            <b>→</b>
          </Link>
        ))}
      </section>
    </main>
  );
}