import Link from "next/link";

export default function Generation() {
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
          2026 · LE MOUVEMENT
        </p>

        <h1>
          UNE NOUVELLE
          <br />
          GÉNÉRATION <span>S&apos;ENGAGE.</span>
        </h1>

        <div className="article-line"></div>

        <p className="article-lead">
          Des élèves de secondaire 5 décident de participer
          activement à la vie de leur école.
        </p>

        <p>
          Héritage Conservateur représente une nouvelle
          génération qui souhaite proposer des idées et
          participer à la construction de son avenir.
        </p>

        <p>
          Notre mouvement repose sur la responsabilité, le
          respect, la tradition et l'avenir.
        </p>

        <p>
          Nous espérons rassembler davantage d'élèves autour
          de projets communs et d'une vision positive pour
          notre école.
        </p>

        <div className="article-quote">
          « NOTRE AVENIR COMMENCE PAR NOS ACTIONS
          D&apos;AUJOURD&apos;HUI. »
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