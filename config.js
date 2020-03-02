module.exports = {
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

}
