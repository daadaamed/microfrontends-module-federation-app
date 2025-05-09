import { defineConfig } from "@rsbuild/core";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  server: {
    port: 3001,
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "add_todo",
      exposes: {
        "./todo": "./src/App.tsx",
      },

      filename: "remoteEntry.js",
      // shared: {
      //   react: { singleton: true, requiredVersion: "^18.2.0" },
      //   "react-dom": { singleton: true, requiredVersion: "^18.2.0" },
      // },
    }),
  ],
});
