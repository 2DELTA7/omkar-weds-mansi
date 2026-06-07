import Image from "next/image";
import CornerDecor from "../ui/CornerDecor";
export default function Hero() {
  return (
    <section id="hero">
      <CornerDecor position="tl" />
        <CornerDecor position="tr" />
        <CornerDecor position="bl" />
        <CornerDecor position="br" />
      <div className="hero-content fade-up">
        <Image
          src="/ganpati3.png"
          alt="Lord Ganesha"
          width={180}
          height={0}
          priority
          className="ganesha-image"
        />

        <p className="hero-invite-text">
          With the blessings of our parents,
          elders and the Almighty,</p>
        <p className="hero-invite-text">
          We cordially invite you to celebrate
          our wedding ceremony.
        </p>

        <div className="couple-names-wrap">

          <div className="groom-name">
            Dr. Omkar
          </div>

          <div className="amp-symbol">
            &
          </div>

          <div className="bride-name">
            Dr. Mansi
          </div>

        </div>

        <div className="hero-ornament">

          <div className="ornament-line" />

          <div className="ornament-diamond" />

          <div className="ornament-line" />

        </div>

        <p className="hero-date">
          Sunday, 19 July 2026
        </p>

        <p className="hero-date">
          10:53 AM
        </p>

        <p className="hero-venue">
          7 Vachaan Lawns • Nagpur
        </p>

      </div>
    </section>
  );
}