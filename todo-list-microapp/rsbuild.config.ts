import { defineConfig } from "@rsbuild/core";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  server: {
    port: 3002,
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "list_todo",
      exposes: {
        "./list": "./src/App.tsx",
      },
      filename: "remoteEntry.js",
      shared: {
        react: { singleton: true, eager: true, requiredVersion: "^18.2.0" },
      },
    }),
  ],
});
