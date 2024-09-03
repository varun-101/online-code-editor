module.exports = {
  apps: [
    {
      name: 'Client',
      script: 'node',  // Use node to execute the script
      args: 'D:/Sem 4 mpr/frontend/Code-Sync/client/app.js',  // Correct path to your client's main JavaScript file
      watch: true,
      autorestart: true,
    },
    {
      name: 'Compiler',
      script: 'node',  // Use node to execute the script
      args: 'D:/Sem 4 mpr/compiler/output.js',  // Correct path to your compiler's main JavaScript file
      watch: true,
      autorestart: true,
    },
    {
      name: 'Server',
      script: 'node',  // Use node to execute the script
      args: 'D:/Sem 4 mpr/frontend/Code-Sync/server/server.js',  // Ensure this is the correct path
      watch: true,
      autorestart: true,
    }
  ]
};
