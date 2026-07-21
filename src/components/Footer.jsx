import { siteContent } from "../siteContent.js";

function Footer() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} {siteContent.name}</span>
      <span>Built with React</span>
    </footer>
  );
}

export default Footer;
