
const getAllProjects = {
  id: "ehh-ent-pro-gal",
  name: "Get All Organisations",
  description: "",
  store:"allProjects",
  
  model: {
    type: "object",
    properties: {},
  },
  actions: ["getAll"],
  resource: {
    resourceType: "externalApi",
    host: "http://localhost:4000",
  },
};

export { getAllProjects };
