"use client";

import SectionHeader from "../ui/SectionHeader";

export default function EPatrika() {
  return (
    <section
      id="patrika"
      className="patrika-section"
    >
      <SectionHeader
        eyebrow="Traditional Invitation"
        title="E-Patrika"
        motif="✦"
      />

      <div className="patrika-container">

        <iframe
          src="/e-patrika.pdf"
          className="patrika-preview"
          title="Wedding Patrika"
        />

        <a
          href="/e-patrika.pdf"
          download
          className="patrika-download-btn"
        >
          📥 Download E-Patrika
        </a>

      </div>
    </section>
  );
}