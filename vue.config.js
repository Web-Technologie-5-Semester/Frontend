const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0', // Macht den Server von außerhalb des Containers erreichbar
    port: 8080,      // Interner Port im Container
  },
});
