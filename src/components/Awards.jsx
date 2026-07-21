import { siteContent } from "../siteContent.js";

function Awards() {
  return (
    <div className="info-list awards-list">
      <h2>Awards</h2>

      <ul>
        {siteContent.awards.map((award) => (
          <li key={`${award.year}-${award.title}`}>
            <span className="info-date">{award.year}</span>

            {award.url ? (
              <a
                className="award-link"
                href={award.url}
                target="_blank"
                rel="noreferrer"
              >
                {award.title}
              </a>
            ) : (
              <strong>{award.title}</strong>
            )}

            {award.organization ? ` — ${award.organization}` : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Awards;