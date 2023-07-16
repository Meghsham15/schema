const updateOneProjectById = {
  id: "ehh-ent-pro-uoid",
  name: "Update One By Id",
  description: "",
  authentication: true,
  model: {
    type: "object",
    properties: {
      _id:{
        type:"string"
      },
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
  actions: ["updateOneById"],
  resource: {
    resourceType: "externalApi",
    host: "http://localhost:4000",
  },
};

export { updateOneProjectById };
