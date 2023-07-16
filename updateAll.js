const updateAll = {
  id: "ehh-ent-pro-ual",
  name: "Update All Organisations",
  description: "",
  model: {
    type: "object",
    properties: {
      organisationName: {
        type: "string",
        maxLength: 255,
      },
      content: {
        type: "string",
        maxLength: 255,
      },
      moto: {
        type: "string",
        maxLength: 255,
      },
      logo: {
        type: "string",
      },
    },
  },
  actions: ["updateAll"],
  resource: {
    resourceType: "externalApi",
    host: "http://localhost:4000",
  },
};

export { updateAll };
