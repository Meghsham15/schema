const updateMany = {
  id: "ehh-ent-pro-umn",
  name: "Update Many Tickets By Ids",
  description: "",
  authentication: true,
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
  actions: ["update"],
  resource: {
    resourceType: "externalApi",
    host: "http://localhost:4000",
  },
};

export { updateMany };
