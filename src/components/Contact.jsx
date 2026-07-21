import { siteContent } from "../siteContent.js";

function Contact() {
  const emailSubject = encodeURIComponent("Artwork inquiry");

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="contact-layout">
        <div>
          <p className="section-label">Get in Touch</p>
          <h2 className="section-heading" id="contact-heading">Contact</h2>
        </div>

        <div className="contact-copy">
          <p>
            For artwork inquiries or other questions, please reach out by email.
          </p>
          <div className="contact-links">
            <a
              className="contact-link"
              href={`mailto:${siteContent.email}?subject=${emailSubject}`}
            >
              Email Reilly
            </a>
            <a
              className="contact-link"
              href={siteContent.instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              {siteContent.instagramLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
