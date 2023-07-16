const deleteAllMilstone = {
    id: "ehh-ent-pro-dal-m",
  name: "Delete All milstone",
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
}

export {deleteAllMilstone};