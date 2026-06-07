type VenueCardProps = {
  type: string;
  name: string;
  address: string;
  date: string;
  mapUrl: string;
  variant: string;
};

export default function VenueCard({
  type,
  name,
  address,
  date,
  mapUrl,
  variant,
}: VenueCardProps) {
  return (
    <div className="venue-card fade-up">

      <div
        className={`venue-map-placeholder ${
          variant === "reception"
            ? "reception-map"
            : ""
        }`}
      >
        <div className="venue-map-grid" />

        <div className="venue-overlay" />

        <div className="venue-map-content">
          <span className="map-pin">
            📍
          </span>

          <h3 className="venue-map-title">
            {name}
          </h3>
        </div>
      </div>

      <div className="venue-body">

        <p className="venue-type">
          {type}
        </p>

        <h3 className="venue-name">
          {name}
        </h3>

        <p className="venue-address">
          {address}
        </p>

        <div className="venue-divider" />

        <p className="venue-date">
          📅 {date}
        </p>

        <div className="venue-actions">

          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`venue-cta ${
              variant === "reception"
                ? "venue-cta-red"
                : ""
            }`}
          >
            🧭 Navigate
          </a>

        </div>

      </div>
    </div>
  );
}