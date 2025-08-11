import { U as UserConfig, P as Plugin } from './types-B254mqw1.mjs';
import { V as Variant, C as Candidate } from './resolve-config-QUZ9b-Gn.mjs';
import './colors.mjs';

declare const enum ThemeOptions {
    NONE = 0,
    INLINE = 1,
    REFERENCE = 2,
    DEFAULT = 4,
    STATIC = 8,
    USED = 16
}
declare class Theme {
    #private;
    private values;
    private keyframes;
    prefix: string | null;
    constructor(values?: Map<string, {
        value: string;
        options: ThemeOptions;
    }>, keyframes?: Set<AtRule>);
    add(key: string, value: string, options?: ThemeOptions): void;
    keysInNamespaces(themeKeys: Iterable<ThemeKey>): string[];
    get(themeKeys: ThemeKey[]): string | null;
    hasDefault(key: string): boolean;
    getOptions(key: string): ThemeOptions;
    entries(): IterableIterator<[string, {
        value: string;
        options: ThemeOptions;
    }]> | [string, {
        value: string;
        options: ThemeOptions;
    }][];
    prefixKey(key: string): string;
    clearNamespace(namespace: string, clearOptions: ThemeOptions): void;
    markUsedVariable(themeKey: string): boolean;
    resolve(candidateValue: string | null, themeKeys: ThemeKey[], options?: ThemeOptions): string | null;
    resolveValue(candidateValue: string | null, themeKeys: ThemeKey[]): string | null;
    resolveWith(candidateValue: string, themeKeys: ThemeKey[], nestedKeys?: `--${string}`[]): [string, Record<string, string>] | null;
    namespace(namespace: string): Map<string | null, string>;
    addKeyframes(value: AtRule): void;
    getKeyframes(): AtRule[];
}
type ThemeKey = `--${string}`;

type VariantFn<T extends Variant['kind']> = (rule: Rule, variant: Extract<Variant, {
    kind: T;
}>) => null | void;
type CompareFn = (a: Variant, z: Variant) => number;
declare const enum Compounds {
    Never = 0,
    AtRules = 1,
    StyleRules = 2
}
declare class Variants {
    compareFns: Map<number, CompareFn>;
    variants: Map<string, {
        kind: Variant["kind"];
        order: number;
        applyFn: VariantFn<any>;
        compoundsWith: Compounds;
        compounds: Compounds;
    }>;
    private completions;
    /**
     * Registering a group of variants should result in the same sort number for
     * all the variants. This is to ensure that the variants are applied in the
     * correct order.
     */
    private groupOrder;
    /**
     * Keep track of the last sort order instead of using the size of the map to
     * avoid unnecessarily skipping order numbers.
     */
    private lastOrder;
    static(name: string, applyFn: VariantFn<'static'>, { compounds, order }?: {
        compounds?: Compounds;
        order?: number;
    }): void;
    fromAst(name: string, ast: AstNode[]): void;
    functional(name: string, applyFn: VariantFn<'functional'>, { compounds, order }?: {
        compounds?: Compounds;
        order?: number;
    }): void;
    compound(name: string, compoundsWith: Compounds, applyFn: VariantFn<'compound'>, { compounds, order }?: {
        compounds?: Compounds;
        order?: number;
    }): void;
    group(fn: () => void, compareFn?: CompareFn): void;
    has(name: string): boolean;
    get(name: string): {
        kind: Variant["kind"];
        order: number;
        applyFn: VariantFn<any>;
        compoundsWith: Compounds;
        compounds: Compounds;
    } | undefined;
    kind(name: string): "static" | "arbitrary" | "functional" | "compound";
    compoundsWith(parent: string, child: string | Variant): boolean;
    suggest(name: string, suggestions: () => string[]): void;
    getCompletions(name: string): string[];
    compare(a: Variant | null, z: Variant | null): number;
    keys(): IterableIterator<string>;
    entries(): IterableIterator<[string, {
        kind: Variant["kind"];
        order: number;
        applyFn: VariantFn<any>;
        compoundsWith: Compounds;
        compounds: Compounds;
    }]>;
    private set;
    private nextOrder;
}

declare function compileAstNodes(candidate: Candidate, designSystem: DesignSystem): {
    node: AstNode;
    propertySort: {
        order: number[];
        count: number;
    };
}[];

interface ClassMetadata {
    modifiers: string[];
}
type ClassEntry = [string, ClassMetadata];
interface SelectorOptions {
    modifier?: string;
    value?: string;
}
interface VariantEntry {
    name: string;
    isArbitrary: boolean;
    values: string[];
    hasDash: boolean;
    selectors: (options: SelectorOptions) => string[];
}

type CompileFn<T extends Candidate['kind']> = (value: Extract<Candidate, {
    kind: T;
}>) => AstNode[] | undefined | null;
interface SuggestionGroup {
    supportsNegative?: boolean;
    values: (string | null)[];
    modifiers: string[];
}
type UtilityOptions = {
    types: string[];
};
type Utility = {
    kind: 'static' | 'functional';
    compileFn: CompileFn<any>;
    options?: UtilityOptions;
};
declare class Utilities {
    private utilities;
    private completions;
    static(name: string, compileFn: CompileFn<'static'>): void;
    functional(name: string, compileFn: CompileFn<'functional'>, options?: UtilityOptions): void;
    has(name: string, kind: 'static' | 'functional'): boolean;
    get(name: string): Utility[];
    getCompletions(name: string): SuggestionGroup[];
    suggest(name: string, groups: () => SuggestionGroup[]): void;
    keys(kind: 'static' | 'functional'): string[];
}

type DesignSystem = {
    theme: Theme;
    utilities: Utilities;
    variants: Variants;
    invalidCandidates: Set<string>;
    important: boolean;
    getClassOrder(classes: string[]): [string, bigint | null][];
    getClassList(): ClassEntry[];
    getVariants(): VariantEntry[];
    parseCandidate(candidate: string): Readonly<Candidate>[];
    parseVariant(variant: string): Readonly<Variant> | null;
    compileAstNodes(candidate: Candidate): ReturnType<typeof compileAstNodes>;
    getVariantOrder(): Map<Variant, number>;
    resolveThemeValue(path: string, forceInline?: boolean): string | undefined;
    trackUsedVariables(raw: string): void;
    candidatesToCss(classes: string[]): (string | null)[];
};

type StyleRule = {
    kind: 'rule';
    selector: string;
    nodes: AstNode[];
};
type AtRule = {
    kind: 'at-rule';
    name: string;
    params: string;
    nodes: AstNode[];
};
type Declaration = {
    kind: 'declaration';
    property: string;
    value: string | undefined;
    important: boolean;
};
type Comment = {
    kind: 'comment';
    value: string;
};
type Context = {
    kind: 'context';
    context: Record<string, string | boolean>;
    nodes: AstNode[];
};
type AtRoot = {
    kind: 'at-root';
    nodes: AstNode[];
};
type Rule = StyleRule | AtRule;
type AstNode = StyleRule | AtRule | Declaration | Comment | Context | AtRoot;

type Config = UserConfig;
type CompileOptions = {
    base?: string;
    loadModule?: (id: string, base: string, resourceHint: 'plugin' | 'config') => Promise<{
        module: Plugin | Config;
        base: string;
    }>;
    loadStylesheet?: (id: string, base: string) => Promise<{
        content: string;
        base: string;
    }>;
};
type Root = null | 'none' | {
    base: string;
    pattern: string;
};
declare const enum Features {
    None = 0,
    AtApply = 1,
    AtImport = 2,
    JsPluginCompat = 4,
    ThemeFunction = 8,
    Utilities = 16,
    Variants = 32
}
declare function compileAst(input: AstNode[], opts?: CompileOptions): Promise<{
    globs: {
        base: string;
        pattern: string;
    }[];
    root: Root;
    features: Features;
    build(candidates: string[]): AstNode[];
}>;
declare function compile(css: string, opts?: CompileOptions): Promise<{
    globs: {
        base: string;
        pattern: string;
    }[];
    root: Root;
    features: Features;
    build(candidates: string[]): string;
}>;
declare function __unstable__loadDesignSystem(css: string, opts?: CompileOptions): Promise<DesignSystem>;
declare function postcssPluginWarning(): void;

export { type Config, Features, __unstable__loadDesignSystem, compile, compileAst, postcssPluginWarning as default };
