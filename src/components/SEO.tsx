import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";

const SITE = "https://www.drmarieevebousmar.be";

interface SEOProps {
  titleFr: string;
  titleNl: string;
  descFr: string;
  descNl: string;
  path: string;
  jsonLd?: object | object[];
}

const SEO = ({ titleFr, titleNl, descFr, descNl, path, jsonLd }: SEOProps) => {
  const { lang } = useLanguage();
  const title = lang === "fr" ? titleFr : titleNl;
  const desc = lang === "fr" ? descFr : descNl;
  const url = `${SITE}${path}`;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <html lang={lang === "fr" ? "fr" : "nl"} />
      <title>{title}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content={lang === "fr" ? "fr_BE" : "nl_BE"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
      ))}
    </Helmet>
  );
};

export default SEO;
