module.exports = {
  development: {
  port: 9000,
  routes: [{
      path: "accounts",
      port: "9001"
    }, {
      path: "contacts",
      port: "9002"
    },
    {
      path: "subjects",
      port: "9003"
    },
    {
      path: "videos",
      port: "9004"
    }
  ]
},
production: {
  port: 8081,
  routes: [{
      path: "accounts",
      port: "8082"
    }, {
      path: "contacts",
      port: "8083"
    },
    {
      path: "subjects",
      port: "8084"
    },
    {
      path: "videos",
      port: "8085"
    }
  ]
},


}
