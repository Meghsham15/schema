const deleteAll = {
  id: "ehh-ent-pro-dal",
  name: "Delete All Poject",
  description: "",
  authentication: true,
  authorisation: [],
  model: {
    type: "object",
    properties: {},
    required: [],
  },
  actions: ["deleteAll"],
  resource: {
    resourceType: "externalApi",
        host: "http://localhost:4000",
  },
};

export { deleteAll };
