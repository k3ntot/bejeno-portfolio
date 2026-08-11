interface SectionHeaderProps {
  label: string;
  heading: string;
  subheading?: string;
  centered?: boolean;
  className?: string;
  id?: string;
}

export default function SectionHeader({
  label,
  heading,
  subheading,
  centered = false,
  className = "",
  id,
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <p className="section-label mb-3">{label}</p>
      <h2 id={id} className="section-heading text-balance">{heading}</h2>
      {subheading && (
        <p className={`section-subheading mt-4 ${centered ? "" : "max-w-2xl"}`}>{subheading}</p>
      )}
    </div>
  );
}
