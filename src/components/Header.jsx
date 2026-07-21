import { siteContent } from "../siteContent.js";

function Header() {
  return (
    <header className="site-header" id="top">
      <a className="site-name" href="#top" aria-label="Go to top">
        {siteContent.name}
      </a>
      <nav className="site-nav" aria-label="Primary navigation">
        <a href="#about">About</a>
        <a href="#paintings">Paintings</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
