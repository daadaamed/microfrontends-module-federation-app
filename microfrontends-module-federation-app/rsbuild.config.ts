import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "host",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.tsx",
      },
      remotes: {
        add_todo_in_host: "add_todo@http://localhost:3001/remoteEntry.js",
        list_todo_in_host: "list_todo@http://localhost:3002/remoteEntry.js",
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: "^18.2.0" },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: "^18.2.0",
        },
        "react-router-dom": { singleton: true, eager: true },
      },
    }),
  ],
});
