const strings = {
  global: {
    title: "Uxsician Travel Insights",
    description:
      "Search for a country and we will find some travel insights about it for you.",
  },
  pages: {
    index: {},
    insights: {},
  },
  components: {
    atoms: {
      head: {
        title: "Uxsician Travel Insights",
        metaDescription:
          "Tool to get more insights on before your trip to any country. It's not about your hotel, flight or car rental, it's about the country culture, currency, top touristic sights, etc.",
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} Uxsician`,
      },
    },
    organisms: {
      SearchCountryForm: {
        error: "You must type or select a valid Country name.",
        placeholder: "Type or select a Country Name",
      },
      commingSoonCard: {
        copy: "Comming Soon!",
      },
    },
  },
};

export default strings;
