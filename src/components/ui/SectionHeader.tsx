type Props = {
  eyebrow: string;
  title: string;
  motif?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  motif = "✿",
}: Props) {
  return (
    <div className="section-header">
      <span className="section-eyebrow">
        {eyebrow}
      </span>

      <h2 className="section-title">
        {title}
      </h2>

      <div className="section-divider">
        <div className="divider-line" />

        <span className="divider-motif">
          {motif}
        </span>

        <div className="divider-line" />
      </div>
    </div>
  );
}