export { P as PluginUtils } from './resolve-config-QUZ9b-Gn.mjs';
import { a as PluginFn, C as Config, b as PluginWithConfig, c as PluginWithOptions } from './types-B254mqw1.mjs';
export { d as PluginAPI, P as PluginsConfig, T as ThemeConfig } from './types-B254mqw1.mjs';
import './colors.mjs';

declare function createPlugin(handler: PluginFn, config?: Partial<Config>): PluginWithConfig;
declare namespace createPlugin {
    var withOptions: <T>(pluginFunction: (options?: T) => PluginFn, configFunction?: (options?: T) => Partial<Config>) => PluginWithOptions<T>;
}

export { Config, PluginFn as PluginCreator, createPlugin as default };
