import Link from "next/link";

export default function Bienvenue() {
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
          SEPTEMBRE 2026
        </p>

        <h1>
          BIENVENUE CHEZ
          <br />
          <span>HÉRITAGE CONSERVATEUR.</span>
        </h1>

        <div className="article-line"></div>

        <p className="article-lead">
          Une nouvelle aventure commence pour notre mouvement
          étudiant.
        </p>

        <p>
          Héritage Conservateur est un mouvement créé par des
          élèves qui souhaitent participer activement à la vie
          de leur école.
        </p>

        <p>
          Notre objectif est simple : encourager les idées,
          le dialogue, les projets et l'engagement des élèves.
        </p>

        <p>
          Nous sommes une équipe d'élèves de secondaire 5 qui
          souhaite construire une communauté scolaire plus
          forte et plus engagée.
        </p>

        <div className="article-quote">
          « UNE NOUVELLE GÉNÉRATION PEUT FAIRE LA DIFFÉRENCE. »
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