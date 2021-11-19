import NextHead from "next/head";
import strings from "../../data/strings";

const Head = () => (
  <NextHead>
    <title>{strings.components.molecules.head.title}</title>
    <meta
      name="description"
      content={strings.components.molecules.head.metaDescription}
    />
    <link rel="icon" href="/favicon.ico" />
  </NextHead>
);

export default Head;
