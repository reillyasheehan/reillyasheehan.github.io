import "./App.css";

function App() {
  return (
    <>
      <header className="site-header">
        <a className="site-name" href="#">
          Reilly Sheehan
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#paintings">Paintings</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="about">
          <p className="section-label">About the Artist</p>
          <h1>Reilly Sheehan</h1>
          <p>
            Artist biography coming soon.
          </p>

          <h2>Awards</h2>
          <p>Awards coming soon.</p>

          <h2>News</h2>
          <p>News and exhibitions coming soon.</p>
        </section>

        <section id="paintings">
          <p className="section-label">Selected Work</p>
          <h2>Paintings</h2>
          <p>Artwork coming soon.</p>
        </section>

        <section id="contact">
          <p className="section-label">Get in Touch</p>
          <h2>Contact</h2>
          <p>
            For artwork inquiries, exhibitions, or other questions, please
            reach out.
          </p>
        </section>
      </main>
    </>
  );
}

export default App;