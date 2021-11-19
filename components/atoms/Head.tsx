import NextHead from "next/head";
import strings from "../../data/strings";

const Head = () => (
  <NextHead>
    <title>{strings.components.atoms.head.title}</title>
    <meta
      name="description"
      content={strings.components.atoms.head.metaDescription}
    />
    <link rel="icon" href="/favicon.ico" />
  </NextHead>
);

export default Head;
