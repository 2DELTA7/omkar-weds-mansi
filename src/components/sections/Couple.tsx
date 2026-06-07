import SectionHeader from "../ui/SectionHeader";
export default function Couple() {
  return (
    <section id="couple" className="couple-section">
      <SectionHeader
        eyebrow="The Bride & Groom"
        title="The Blessed Couple"
        motif="✦"
      />

      {/* Union Animation */}
      <div className="couple-union fade-up">

        <div className="rings-wrapper">
          <span className="wedding-ring ring-left">
            💍
          </span>

          <span className="wedding-ring ring-right">
            💍
          </span>
        </div>

        <div className="union-text">
          <span>Two Hearts</span>
          <span className="union-divider">✦</span>
          <span>One Soul</span>
        </div>

      </div>

      <div className="couple-grid">

        {/* Groom */}
        <div className="couple-card fade-up">

          <div className="couple-avatar">
            O
          </div>

          <h3 className="couple-name">
            Dr. Omkar
          </h3>

          <p className="couple-title">
            Groom
          </p>

          <div className="couple-divider" />

          <p className="family-heading">
            Beloved Son Of
          </p>

          <p className="family-parents">
            Dr. Bapusaheb Ingale
            <br />
            &
            <br />
            Mrs. Savita Ingale
          </p>

        </div>

        {/* Bride */}
        <div className="couple-card fade-up">

          <div className="couple-avatar">
            M
          </div>

          <h3 className="couple-name">
            Dr. Mansi
          </h3>

          <p className="couple-title">
            Bride
          </p>

          <div className="couple-divider" />

          <p className="family-heading">
            Beloved Daughter Of
          </p>

          <p className="family-parents">
            Mr. Anil Tambade
            <br />
            &
            <br />
            Mrs. Sujata Tambade
          </p>

        </div>

      </div>

      <div className="couple-quote fade-up">
        <p>
          "Two souls, one sacred journey.
          Bound by love, blessed by family,
          and united forever under the grace
          of the Almighty."
        </p>
      </div>
    </section>
  );
}