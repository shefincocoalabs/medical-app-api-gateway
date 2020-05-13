module.exports = {
    apps : [
    {
      name: 'Medical API Gateway | Development',
      script: 'app.js', 
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G', 
      env: {
        NODE_ENV: 'development'
      }
    },
    {
      name: 'Medical API Gateway | Production',
      script: 'app.js', 
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G', 
      env: {
        NODE_ENV: 'production'
      }
    }    
    
    ]
};