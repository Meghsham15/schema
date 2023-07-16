const updateManyByIds = {
  id: "ehh-ent-pro-umn-ids",
  name: "Update Many Tickets By Ids",
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
  actions: ["update"],
  resource: {
    resourceType: "externalApi",
    host: "http://localhost:4000",
  },
};

export { updateManyByIds };
