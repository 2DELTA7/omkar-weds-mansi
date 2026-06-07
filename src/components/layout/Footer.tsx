import CornerDecor from "../ui/CornerDecor";
export default function Footer() {
  return (
    <footer>
<CornerDecor position="tl" />
  <CornerDecor position="tr" />
  <CornerDecor position="bl" />
  <CornerDecor position="br" />

      <div className="footer-mandala">
        ✦ ❖ ✦
      </div>

      <h2 className="footer-couple">
        Dr. Omkar
        <br />
        &
        <br />
        Dr. Mansi
      </h2>

      <p className="footer-message">
        Your presence, blessings and good wishes
        mean the world to us.
      </p>

      <p className="footer-message">
        We look forward to celebrating this
        joyous occasion together and creating
        beautiful memories with our family
        and friends.
      </p>

      <div className="footer-divider" />

      <p className="footer-date">
        Sunday • 19 July 2026
      </p>

      <p className="footer-date">
        7 Vachaan Lawns, Nagpur
      </p>
<p
  style={{
    marginTop: "1rem",
    opacity: .8
  }}
>
  Awaiting your gracious presence
  and blessings.
</p>
      <p className="footer-hashtag">
        #OmkarWedsMansi
      </p>

    </footer>
  );
}