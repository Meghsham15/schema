const getOneMilstone = {
    id: "ehh-ent-pro-gon-m",
  name: "Get One milstone",
  description: "Get One milstone",
  model: {
    type: "object",
    properties: {
      name:{
        type:"string"
      }
    },
  },
  actions: ["getOne"],
 resource: {
    resourceType: "externalApi",
    host: "http://localhost:4000",
  },
}

export {getOneMilstone};