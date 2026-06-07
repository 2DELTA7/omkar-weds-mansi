import SectionHeader from "../ui/SectionHeader";
import WeddingFrame from "../ui/WeddingFrame";
import CornerDecor from "../ui/CornerDecor";
export default function Invitation() {
  return (
    <section
  id="invitation"
  className="invitation-section"
>
  <CornerDecor position="tl" />
  <CornerDecor position="tr" />
  <CornerDecor position="bl" />
  <CornerDecor position="br" />

  <WeddingFrame />
      <SectionHeader
        eyebrow="Shubh Vivah"
        title="The Invitation"
        motif="✿"
      />

      <div className="invite-card fade-up">
        <span className="corner-tl">✦</span>
        <span className="corner-tr">✦</span>
        <span className="corner-bl">✦</span>
        <span className="corner-br">✦</span>

        <div className="invite-om">ॐ</div>

        <p className="invite-sanskrit">
          || शुभ विवाह ||
        </p>

        <p className="invite-body">
          We joyfully announce the auspicious wedding
          of 
          <br />
          <span className="invite-names-inline">
            Omkar & Mansi 
          </span>
          
          on Sunday, 19th July 2026 at the
          auspicious mahurat of 10:53 AM.
        </p>

        <p
          className="invite-body"
          style={{ marginTop: "1.5rem" }}
        >
          We request the honour of your presence
          and seek your heartfelt blessings on
          this auspicious occasion.
        </p>
      </div>
    </section>
  );
}