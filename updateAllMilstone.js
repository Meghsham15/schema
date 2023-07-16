const updateAllMilstone = {
    id: "ehh-ent-pro-ual-m",
  name: "Update All milstone",
  description: "",
  model: {
    type: "object",
    properties: {
      name: {
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
}

export {updateAllMilstone};