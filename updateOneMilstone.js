const updateOneMilstone = {
    id: "ehh-ent-pro-uon-m",
  name: "Update One milstone",
  description: "",
  
  model: {
    type: "object",
    properties: {
      _id:{
        type:"String"
      },
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
  actions: ["updateOne"],
  resource: {
    resourceType: "externalApi",
    host: "http://localhost:4000",
  },
}

export {updateOneMilstone};