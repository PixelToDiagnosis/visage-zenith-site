interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true }: SectionHeadingProps) => (
  <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
    <div className={`gold-line mb-6 ${centered ? "mx-auto" : ""}`} />
    <h2 className="heading-section mb-4">{title}</h2>
    {subtitle && <p className="body-text max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

export default SectionHeading;
