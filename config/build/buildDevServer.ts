import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevSever(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
  };
}
