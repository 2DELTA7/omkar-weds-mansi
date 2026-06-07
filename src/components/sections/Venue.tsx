import SectionHeader from "../ui/SectionHeader";
import VenueCard from "../ui/VenueCard";

import { venues } from "../../data/venues";

export default function Venue() {
  return (
    <section id="venue">
      <SectionHeader
        eyebrow="Find Your Way"
        title="Venues & Directions"
        motif="✿"
      />

      <div className="venue-grid">
        {venues.map((venue) => (
          <VenueCard
            key={venue.name}
            {...venue}
          />
        ))}
      </div>
    </section>
  );
}