import { Link } from "react-router-dom";

interface CTAButtonProps {
  to: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}

const CTAButton = ({ to, children, variant = "primary", className = "" }: CTAButtonProps) => {
  const base = "inline-block px-8 py-3 font-sans text-sm tracking-widest uppercase transition-all duration-300 rounded-sm";
  const styles = variant === "primary"
    ? "bg-accent text-accent-foreground hover:opacity-90"
    : "border border-accent text-accent hover:bg-accent hover:text-accent-foreground";

  return (
    <Link to={to} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
};

export default CTAButton;
