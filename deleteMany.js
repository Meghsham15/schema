const deleteMany = {
  id: "ehh-ent-pro-dmn",
  name: "Delete Many Projects",
  description: "",
  authentication: true,
  authorisation: [],
  model: {
    type: "object",
    properties: {
      _id: {
        type: "Array",
      },
    },
  },
  actions: ["delete"],
  resource: {
    resourceType: "externalApi",
        host: "http://localhost:4000",
  },
};

export { deleteMany };
