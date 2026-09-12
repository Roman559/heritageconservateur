import Link from "next/link";

export default function Programme() {
  return (
    <main className="article-page">
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

        <Link
          href="/actualites"
          className="back-link"
        >
          ← ACTUALITÉS
        </Link>
      </nav>

      <article className="article-content">
        <p className="eyebrow">
          NOTRE PROGRAMME
        </p>

        <h1>
          DE NOUVELLES IDÉES
          <br />
          POUR <span>NOTRE ÉCOLE.</span>
        </h1>

        <div className="article-line"></div>

        <p className="article-lead">
          Notre équipe prépare plusieurs propositions et projets
          pour améliorer la vie scolaire.
        </p>

        <p>
          Nous croyons que les élèves doivent pouvoir partager
          leurs idées et participer activement à leur communauté.
        </p>

        <p>
          Notre programme se concentre sur quatre priorités :
          la voix des élèves, la réussite, la vie scolaire et
          la construction d'une communauté forte.
        </p>

        <p>
          De nouvelles informations seront bientôt publiées
          concernant nos futurs projets.
        </p>

        <div className="article-quote">
          « DES IDÉES, DES PROJETS, UNE VISION POUR L'AVENIR. »
        </div>

        <Link
          href="/actualites"
          className="article-button"
        >
          ← RETOUR AUX ACTUALITÉS
        </Link>
      </article>
    </main>
  );
}