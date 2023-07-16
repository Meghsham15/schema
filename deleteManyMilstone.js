const deleteManyMilstone = {
    id: "ehh-ent-pro-dmn-m",
  name: "Delete Many milstone",
  description: "",
  authentication: true,
  authorisation: [],
  model: {
    type: "object",
    properties: {
      name: {
        type: "string",
      },
    },
  },
  actions: ["delete"],
  resource: {
    resourceType: "externalApi",
        host: "http://localhost:4000",
  },
};

export {deleteManyMilstone};