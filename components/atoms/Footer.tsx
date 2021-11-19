import strings from "../../data/strings";

const Footer = () => (
  <footer className="container max-w-xl mx-auto text-center mb-4">
    <p className="mr-auto">
      <small>{strings.components.atoms.footer.copyright}</small>
    </p>
  </footer>
);

export default Footer;
