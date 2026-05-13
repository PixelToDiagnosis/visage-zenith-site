import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeading from "@/components/SectionHeading";

const tips = [
  {
    fr: { title: "Les 5 gestes anti-âge essentiels", excerpt: "Découvrez les habitudes quotidiennes qui préservent la jeunesse de votre peau.", cat: "Anti-âge" },
    nl: { title: "De 5 essentiële anti-aging tips", excerpt: "Ontdek de dagelijkse gewoontes die de jeugd van uw huid behouden.", cat: "Anti-aging" },
  },
  {
    fr: { title: "Botox : mythes et réalités", excerpt: "Tout ce que vous devez savoir sur les injections de toxine botulique.", cat: "Botox" },
    nl: { title: "Botox: mythes en feiten", excerpt: "Alles wat u moet weten over botulinetoxine-injecties.", cat: "Botox" },
  },
  {
    fr: { title: "Comment préparer sa peau avant un peeling", excerpt: "Les étapes clés pour optimiser les résultats de votre peeling.", cat: "Peelings" },
    nl: { title: "Hoe bereidt u uw huid voor op een peeling", excerpt: "De belangrijkste stappen om de resultaten van uw peeling te optimaliseren.", cat: "Peelings" },
  },
  {
    fr: { title: "Soins post-injection : les bonnes pratiques", excerpt: "Nos recommandations pour les heures et jours suivant vos injections.", cat: "Injections" },
    nl: { title: "Nazorg na injecties: goede praktijken", excerpt: "Onze aanbevelingen voor de uren en dagen na uw injecties.", cat: "Injecties" },
  },
  {
    fr: { title: "Acide hyaluronique vs Botox : quelles différences ?", excerpt: "Comprendre les deux traitements les plus populaires en médecine esthétique.", cat: "Médecine esthétique" },
    nl: { title: "Hyaluronzuur vs Botox: wat zijn de verschillen?", excerpt: "Begrijp de twee populairste behandelingen in de esthetische geneeskunde.", cat: "Esthetische geneeskunde" },
  },
  {
    fr: { title: "Le microneedling : tout savoir sur cette technique", excerpt: "Une technique douce pour stimuler le renouvellement de la peau.", cat: "Microneedling" },
    nl: { title: "Microneedling: alles over deze techniek", excerpt: "Een zachte techniek om de huidvernieuwing te stimuleren.", cat: "Microneedling" },
  },
];

const Tips = () => {
  const { lang, t } = useLanguage();

  return (
    <>
      <section className="section-padding bg-off-white">
        <div className="container-wide">
          <SectionHeading
            title={t("Conseils & Expertise", "Tips & Expertise")}
            subtitle={t(
              "Articles, conseils et informations pour prendre soin de votre peau et comprendre la médecine esthétique.",
              "Artikelen, tips en informatie om voor uw huid te zorgen en esthetische geneeskunde te begrijpen."
            )}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip, i) => {
              const content = lang === "fr" ? tip.fr : tip.nl;
              return (
                <article key={i} className="bg-cream p-8 rounded-sm border border-border hover:shadow-md transition-shadow">
                  <span className="text-xs uppercase tracking-widest text-gold">{content.cat}</span>
                  <h2 className="font-serif text-xl mt-3 mb-3">{content.title}</h2>
                  <p className="body-small mb-4">{content.excerpt}</p>
                  {i === 0 ? (
                    <a
                      href="/anti-aging-tips.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm text-accent hover:opacity-80 underline"
                    >
                      {t("Ouvrir le guide (PDF) →", "Open de gids (PDF) →")}
                    </a>
                  ) : i === 1 && lang === "nl" ? (
                    <a
                      href="/botox-mythen-feiten.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm text-accent hover:opacity-80 underline"
                    >
                      Open de gids (PDF) →
                    </a>
                  ) : i === 2 && lang === "nl" ? (
                    <a
                      href="/peeling-voorbereiding.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm text-accent hover:opacity-80 underline"
                    >
                      Open de gids (PDF) →
                    </a>
                  ) : i === 3 && lang === "nl" ? (
                    <a
                      href="/nazorg-injecties.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm text-accent hover:opacity-80 underline"
                    >
                      Open de gids (PDF) →
                    </a>
                  ) : i === 4 && lang === "nl" ? (
                    <a
                      href="/hyaluronzuur-vs-botox.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm text-accent hover:opacity-80 underline"
                    >
                      Open de gids (PDF) →
                    </a>
                  ) : i === 5 && lang === "nl" ? (
                    <a
                      href="/microneedling.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm text-accent hover:opacity-80 underline"
                    >
                      Open de gids (PDF) →
                    </a>
                  ) : (
                    <span className="text-sm text-accent cursor-pointer">{t("Lire la suite →", "Lees meer →")}</span>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Tips;
