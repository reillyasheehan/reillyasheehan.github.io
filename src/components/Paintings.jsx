import PaintingCard from "./PaintingCard.jsx";
import { paintings } from "../data/paintings.js";

function Paintings() {
  return (
    <section id="paintings" aria-labelledby="paintings-heading">
      <div className="paintings-header">
        <div>
          <p className="section-label">Selected Work</p>
          <h2 className="section-heading" id="paintings-heading">
            Paintings
          </h2>
        </div>
        <p className="section-intro">
          A selection of plein air and studio paintings. Available works may be
          purchased by contacting the artist.
        </p>
      </div>

      {paintings.length > 0 ? (
        <div className="painting-grid">
          {paintings.map((painting) => (
            <PaintingCard key={painting.id ?? painting.title} painting={painting} />
          ))}
        </div>
      ) : (
        <p className="empty-state">Add your first painting in src/data/paintings.js.</p>
      )}
    </section>
  );
}

export default Paintings;
