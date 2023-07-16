const deleteOneMilstone = {
    id: "ehh-ent-pro-don-m",
  name: "Delete One milstone",
  description: "",
  authentication: true,
  model: {
    type: "object",
    properties: {
      name:{
        type:"String"
      }
    },
  },
  actions: ["deleteOne"],
  resource: {
    resourceType: "externalApi",
        host: "http://localhost:4000",
  },
}

export {deleteOneMilstone};