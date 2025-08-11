import { N as NamedUtilityValue, P as PluginUtils } from './resolve-config-QUZ9b-Gn.mjs';

type Config = UserConfig;
type PluginFn = (api: PluginAPI) => void;
type PluginWithConfig = {
    handler: PluginFn;
    config?: UserConfig;
    /** @internal */
    reference?: boolean;
};
type PluginWithOptions<T> = {
    (options?: T): PluginWithConfig;
    __isOptionsFunction: true;
};
type Plugin = PluginFn | PluginWithConfig | PluginWithOptions<any>;
type PluginAPI = {
    addBase(base: CssInJs): void;
    addVariant(name: string, variant: string | string[] | CssInJs): void;
    matchVariant<T = string>(name: string, cb: (value: T | string, extra: {
        modifier: string | null;
    }) => string | string[], options?: {
        values?: Record<string, T>;
        sort?(a: {
            value: T | string;
            modifier: string | null;
        }, b: {
            value: T | string;
            modifier: string | null;
        }): number;
    }): void;
    addUtilities(utilities: Record<string, CssInJs | CssInJs[]> | Record<string, CssInJs | CssInJs[]>[], options?: {}): void;
    matchUtilities(utilities: Record<string, (value: string, extra: {
        modifier: string | null;
    }) => CssInJs | CssInJs[]>, options?: Partial<{
        type: string | string[];
        supportsNegativeValues: boolean;
        values: Record<string, string> & {
            __BARE_VALUE__?: (value: NamedUtilityValue) => string | undefined;
        };
        modifiers: 'any' | Record<string, string>;
    }>): void;
    addComponents(utilities: Record<string, CssInJs> | Record<string, CssInJs>[], options?: {}): void;
    matchComponents(utilities: Record<string, (value: string, extra: {
        modifier: string | null;
    }) => CssInJs>, options?: Partial<{
        type: string | string[];
        supportsNegativeValues: boolean;
        values: Record<string, string> & {
            __BARE_VALUE__?: (value: NamedUtilityValue) => string | undefined;
        };
        modifiers: 'any' | Record<string, string>;
    }>): void;
    theme(path: string, defaultValue?: any): any;
    config(path?: string, defaultValue?: any): any;
    prefix(className: string): string;
};
type CssInJs = {
    [key: string]: string | string[] | CssInJs | CssInJs[];
};

type ResolvableTo<T> = T | ((utils: PluginUtils) => T);
type ThemeValue = ResolvableTo<Record<string, unknown>> | null | undefined;
type ThemeConfig = Record<string, ThemeValue> & {
    extend?: Record<string, ThemeValue>;
};
type ContentFile = string | {
    raw: string;
    extension?: string;
};
type DarkModeStrategy = false | 'media' | 'class' | ['class', string] | 'selector' | ['selector', string] | ['variant', string | string[]];
interface UserConfig {
    presets?: UserConfig[];
    theme?: ThemeConfig;
    plugins?: Plugin[];
}
interface UserConfig {
    content?: ContentFile[] | {
        relative?: boolean;
        files: ContentFile[];
    };
}
interface UserConfig {
    darkMode?: DarkModeStrategy;
}
interface UserConfig {
    prefix?: string;
}
interface UserConfig {
    blocklist?: string[];
}
interface UserConfig {
    important?: boolean | string;
}
interface UserConfig {
    future?: 'all' | Record<string, boolean>;
}

export type { Config as C, Plugin as P, ThemeConfig as T, UserConfig as U, PluginFn as a, PluginWithConfig as b, PluginWithOptions as c, PluginAPI as d };
