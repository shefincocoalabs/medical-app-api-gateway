module.exports = {
  port: 9000,
  routes: [{
      path: "accounts",
      port: "7001"
    }, {
      path: "contacts",
      port: "7002"
    },
    {
      path: "subjects",
      port: "7003"
    },
    {
      path: "videos",
      port: "7004"
    }
  ]

}
