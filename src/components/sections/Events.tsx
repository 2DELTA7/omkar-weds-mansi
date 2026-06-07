import SectionHeader from "../ui/SectionHeader";
import Countdown from "../ui/Countdown";
import CornerDecor from "../ui/CornerDecor";

import { events } from "../../data/events";

export default function Events() {
  return (
    <section id="events">
      <CornerDecor position="tl" />
        <CornerDecor position="tr" />
        <CornerDecor position="bl" />
        <CornerDecor position="br" />
      
      <SectionHeader
        eyebrow="Auspicious Celebrations"
        title="Wedding Festivities"
        motif="✦"
      />

      <Countdown />

      <div className="events-grid">

        {events.map((event) => (
          <div
            key={event.title}
            className="event-card fade-up"
          >
            <div
              className={`event-badge ${
                event.type === "reception"
                  ? "reception"
                  : ""
              }`}
            >
              {event.badge}
            </div>

            <h3 className="event-title">
              {event.title}
            </h3>

            <p className="event-detail">
              📅 {event.date}
            </p>

            <p className="event-detail">
              ⏰ {event.time}
            </p>

            <p className="event-detail">
              📍 {event.venue}, {event.address}
            </p>
          </div>
        ))}

      </div>

      <div className="events-footer-note fade-up">
        We request the honour of your
        gracious presence and blessings
        as we celebrate these cherished
        moments with our loved ones.
      </div>
    </section>
  );
}