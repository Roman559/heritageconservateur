"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <main>
      <nav className="navbar">
        <Link href="/" className="brand">
          <img src="/1000011275.jpg" alt="Héritage Conservateur" />

          <div>
            <strong>HÉRITAGE</strong>
            <span>CONSERVATEUR</span>
          </div>
        </Link>

        <button
          className="menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "×" : "☰"}
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#vision">Vision</a>
          <a href="#valeurs">Valeurs</a>
          <a href="#programme">Programme</a>
          <Link href="/actualites">Actualités</Link>
          <a href="#equipe">Équipe</a>
          <a href="#rejoindre" className="nav-join">
            Nous rejoindre →
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-top">
          <p>PARTI POLITIQUE ÉTUDIANT · 2026</p>
          <span>HÉRITAGE CONSERVATEUR</span>
        </div>

        <div className="hero-main">
          <div className="hero-content">
            <p className="eyebrow">UN NOUVEAU MOUVEMENT</p>

            <h1>
              POUR UNE ÉCOLE
              <br />
              QUI <span>REGARDE</span>
              <br />
              VERS L&apos;AVENIR.
            </h1>

            <p className="hero-text">
              Une nouvelle génération d&apos;élèves qui souhaite
              participer activement à la vie de son école.
            </p>

            <div className="hero-actions">
              <a href="#vision" className="hero-button">
                DÉCOUVRIR NOTRE VISION
                <span>↓</span>
              </a>

              <Link href="/actualites" className="hero-secondary">
                ACTUALITÉS →
              </Link>
            </div>
          </div>

          <div className="hero-logo">
            <div className="logo-ring ring-one"></div>
            <div className="logo-ring ring-two"></div>

            <img
              src="/1000011275.jpg"
              alt="Logo Héritage Conservateur"
            />
          </div>
        </div>

        <div className="hero-bottom">
          <div>
            <span>01</span>
            <p>RESPONSABILITÉ</p>
          </div>

          <div>
            <span>02</span>
            <p>RESPECT</p>
          </div>

          <div>
            <span>03</span>
            <p>TRADITION</p>
          </div>

          <div>
            <span>04</span>
            <p>AVENIR</p>
          </div>
        </div>
      </section>

      <section id="vision" className="vision">
        <div className="vision-background">HC</div>

        <div className="section-number">
          01 / NOTRE VISION
        </div>

        <div className="vision-content">
          <div>
            <p className="eyebrow">NOTRE VISION</p>

            <h2>
              UNE ÉCOLE FORTE
              <br />
              COMMENCE AVEC
              <br />
              DES ÉLÈVES <span>ENGAGÉS.</span>
            </h2>
          </div>

          <div className="vision-text">
            <div className="red-line"></div>

            <p>
              Héritage Conservateur est un mouvement étudiant
              créé pour permettre aux élèves de participer
              davantage à leur communauté scolaire.
            </p>

            <p>
              Nous voulons encourager le dialogue, les idées,
              les projets et l&apos;engagement des élèves.
            </p>

            <p className="school-note">
              Une équipe d&apos;élèves de secondaire 5, unie pour
              faire entendre sa voix.
            </p>
          </div>
        </div>
      </section>

      <section id="valeurs" className="values">
        <div className="values-header">
          <div>
            <p className="eyebrow light">02 · NOS VALEURS</p>

            <h2>
              CE QUI NOUS
              <br />
              <span>GUIDE.</span>
            </h2>
          </div>

          <p>
            Quatre principes qui représentent notre vision
            pour une communauté scolaire plus forte.
          </p>
        </div>

        <div className="values-list">
          <article className="value-item">
            <span className="value-number">01</span>

            <div>
              <h3>RESPONSABILITÉ</h3>

              <p>
                Encourager les élèves à participer activement
                à la vie de leur école.
              </p>
            </div>

            <span className="value-arrow">→</span>
          </article>

          <article className="value-item">
            <span className="value-number">02</span>

            <div>
              <h3>RESPECT</h3>

              <p>
                Favoriser le dialogue et une communauté où
                chaque élève peut être entendu.
              </p>
            </div>

            <span className="value-arrow">→</span>
          </article>

          <article className="value-item">
            <span className="value-number">03</span>

            <div>
              <h3>TRADITION</h3>

              <p>
                Préserver les valeurs positives qui contribuent
                à une communauté scolaire forte.
              </p>
            </div>

            <span className="value-arrow">→</span>
          </article>

          <article className="value-item">
            <span className="value-number">04</span>

            <div>
              <h3>AVENIR</h3>

              <p>
                Encourager les élèves à développer leurs idées,
                leurs projets et leurs ambitions.
              </p>
            </div>

            <span className="value-arrow">→</span>
          </article>
        </div>
      </section>

      <section id="programme" className="programme">
        <p className="eyebrow">03 · NOTRE PROGRAMME</p>

        <h2>
          DES IDÉES
          <br />
          POUR <span>AGIR.</span>
        </h2>

        <div className="programme-grid">
          <article>
            <span>01</span>
            <h3>LA VOIX DES ÉLÈVES</h3>
            <p>
              Créer davantage d&apos;occasions pour écouter les
              idées et les préoccupations des élèves.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>LA RÉUSSITE</h3>
            <p>
              Encourager la motivation, l&apos;entraide et les
              ambitions scolaires.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>LA VIE SCOLAIRE</h3>
            <p>
              Développer de nouvelles activités et projets
              pour enrichir la vie de l&apos;école.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>UNE COMMUNAUTÉ FORTE</h3>
            <p>
              Encourager le respect, la collaboration et
              l&apos;engagement des élèves.
            </p>
          </article>
        </div>
      </section>

      <section className="home-news">
        <div className="home-news-header">
          <div>
            <p className="eyebrow light">
              04 · ACTUALITÉS
            </p>

            <h2>
              RESTEZ
              <br />
              <span>INFORMÉS.</span>
            </h2>
          </div>

          <Link href="/actualites" className="view-all">
            VOIR TOUTES LES ACTUALITÉS →
          </Link>
        </div>

        <div className="news-preview">
          <Link href="/actualites/bienvenue" className="preview-card">
            <span>01</span>
            <p>SEPTEMBRE 2026</p>
            <h3>
              BIENVENUE CHEZ
              HÉRITAGE CONSERVATEUR
            </h3>
            <b>→</b>
          </Link>

          <Link href="/actualites/programme" className="preview-card">
            <span>02</span>
            <p>BIENTÔT</p>
            <h3>
              DE NOUVELLES IDÉES
              POUR NOTRE ÉCOLE
            </h3>
            <b>→</b>
          </Link>

          <Link href="/actualites/generation" className="preview-card">
            <span>03</span>
            <p>2026</p>
            <h3>
              UNE NOUVELLE
              GÉNÉRATION S&apos;ENGAGE
            </h3>
            <b>→</b>
          </Link>
        </div>
      </section>

      <section id="equipe" className="team">
        <div className="team-header">
          <p className="eyebrow">05 · NOTRE ÉQUIPE</p>

          <h2>
            LES VISAGES
            <br />
            DU <span>MOUVEMENT.</span>
          </h2>

          <p>
            Notre équipe est composée d&apos;élèves de secondaire 5
            qui souhaitent s&apos;engager dans leur communauté scolaire.
          </p>
        </div>

        <div className="team-members">
          <article className="member-card">
            <div className="member-photo">
              <span>01</span>
              <div className="photo-placeholder">
                PHOTO
              </div>
            </div>

            <div className="member-info">
              <h3>À VENIR</h3>
              <p>PRÉSIDENT</p>
              <span>
                Membre fondateur du mouvement.
              </span>
            </div>
          </article>

          <article className="member-card">
            <div className="member-photo">
              <span>02</span>
              <div className="photo-placeholder">
                PHOTO
              </div>
            </div>

            <div className="member-info">
              <h3>À VENIR</h3>
              <p>VICE-PRÉSIDENT</p>
              <span>
                Membre de l&apos;équipe Héritage Conservateur.
              </span>
            </div>
          </article>

          <article className="member-card">
            <div className="member-photo">
              <span>03</span>
              <div className="photo-placeholder">
                PHOTO
              </div>
            </div>

            <div className="member-info">
              <h3>À VENIR</h3>
              <p>COMMUNICATIONS</p>
              <span>
                Responsable des communications.
              </span>
            </div>
          </article>
        </div>
      </section>

      <section id="rejoindre" className="join">
        <div>
          <p className="eyebrow">06 · NOUS REJOINDRE</p>

          <h2>
            FAITES
            <br />
            ENTENDRE
            <br />
            <span>VOTRE VOIX.</span>
          </h2>

          <p className="join-subtitle">
            Vous avez des idées pour améliorer votre école ?
            Vous souhaitez participer au mouvement ?
          </p>
        </div>

        <div className="join-form-area">
          {!formSent ? (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  placeholder="PRÉNOM"
                  required
                />

                <input
                  type="text"
                  placeholder="NOM"
                  required
                />
              </div>

              <input
                type="email"
                placeholder="EMAIL"
                required
              />

              <textarea
                placeholder="VOTRE MESSAGE..."
                required
              ></textarea>

              <button type="submit">
                ENVOYER →
              </button>
            </form>
          ) : (
            <div className="success-message">
              <span>✓</span>
              <h3>MERCI !</h3>

              <p>
                Votre message a été enregistré.
              </p>

              <button
                onClick={() => setFormSent(false)}
              >
                ENVOYER UN AUTRE MESSAGE
              </button>
            </div>
          )}
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <img
            src="/1000011275.jpg"
            alt="Héritage Conservateur"
          />

          <div>
            <strong>HÉRITAGE</strong>
            <span>CONSERVATEUR</span>
          </div>
        </div>

        <div className="footer-center">
          PARTI POLITIQUE ÉTUDIANT · 2026
        </div>

        <p>
          HÉRITAGE · RESPONSABILITÉ · AVENIR
        </p>
      </footer>
    </main>
  );
}