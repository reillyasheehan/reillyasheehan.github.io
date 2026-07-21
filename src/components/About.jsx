import Awards from "./Awards.jsx";
import { siteContent } from "../siteContent.js";

function About() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="about-layout">
        <div className="artist-photo-frame">
          <div className="artist-photo-placeholder">
            Add your portrait as public/artist-photo.jpg
          </div>

          <img
            className="artist-photo"
            src={siteContent.artistPhoto}
            alt={siteContent.name}
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        </div>

        <div className="about-copy">
          <p className="section-label">About the Artist</p>

          <h1 className="section-heading" id="about-heading">
            {siteContent.name}
          </h1>

          <p className="tagline">{siteContent.tagline}</p>

          <div className="bio">
            {siteContent.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="about-lists">
            <Awards />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;