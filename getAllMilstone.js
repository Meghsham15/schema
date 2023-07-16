const getAllMilstone = {
    id: "ehh-ent-pro-gal-m",
  name: "Get All Milstone",
  description: "To get all the milstones",
  
  model: {
  },
  actions: ["getAll"],
  resource: {
    resourceType: "externalApi",
    host: "http://localhost:4000",
  },
}

export {getAllMilstone};