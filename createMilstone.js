const createMilstone ={
    id: "ehh-ent-pro-crt-m",
  name: "Create One milstone",
  description: "Create a milstone",
  
  model: {
    type: "object",
    properties: {
      _id: {
        type: "string",
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
  actions: ["insertOne"],
  resource: {
    resourceType: "externalApi",
        host: "http://localhost:4000",
  },
}

export {createMilstone};