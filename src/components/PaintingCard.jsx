import { useEffect, useState } from "react";

function PaintingCard({ painting }) {
  const [isOpen, setIsOpen] = useState(false);

  const details = [painting.medium, painting.dimensions]
    .filter(Boolean)
    .join(" · ");

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <figure className="painting-card">
        <button
          className="painting-image-button"
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label={`View ${painting.title} at full size`}
        >
          <img
            className="painting-image"
            src={painting.image}
            alt={painting.alt || painting.title}
            loading="lazy"
          />
        </button>
      </figure>

      {isOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={painting.title}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <button
            className="lightbox-close"
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close full-size image"
          >
            ×
          </button>

          <div className="lightbox-content">
            <img
              className="lightbox-image"
              src={painting.image}
              alt={painting.alt || painting.title}
            />

            <div className="lightbox-caption">
              <h2>{painting.title}</h2>

              {details && <p>{details}</p>}

              {painting.year && <p>{painting.year}</p>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PaintingCard;