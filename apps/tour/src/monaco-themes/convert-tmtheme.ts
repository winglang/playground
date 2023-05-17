import Color from 'color';

const sanitizeColor = (color: string) => {
    if (!color) {
        return color;
    }

    if (/#......$/.test(color) || /#........$/.test(color)) {
        return color;
    }

    try {
        const c: any = new Color(color)
        return c.hexString();
    } catch (e) {
        return '#FF0000';
    }
};

const colorsAllowed = ({ foreground, background }: { foreground: string, background: string }) => {
    if (foreground === 'inherit' || background === 'inherit') {
        return false;
    }

    return true;
};

const getTheme = (theme: any) => {
    const { tokenColors = [], colors = {} } = theme;
    const rules = tokenColors
        .filter((t: any) => t.settings && t.scope && colorsAllowed(t.settings))
        .reduce((acc: Array<any>, token: any) => {
            const settings = {
                foreground: sanitizeColor(token.settings.foreground),
                background: sanitizeColor(token.settings.background),
                fontStyle: token.settings.fontStyle
            };

            const scope = typeof token.scope === 'string' ? token.scope.split(',').map((a: any) => a.trim()) : token.scope;

            scope.map((s: any) =>
                acc.push({
                    token: s,
                    ...settings
                })
            );

            return acc;
        }, []);

    const newColors = colors;
    Object.keys(colors).forEach(c => {
        if (newColors[c]) return c;

        delete newColors[c];

        return c;
    });

    return {
        base: getBase(theme.type),
        inherit: true,
        colors: newColors,
        rules,
        type: theme.type
    };
};

const getBase = (type: string) => {
    if (type === 'dark') {
        return 'vs-dark';
    }

    if (type === 'hc') {
        return 'hc-black';
    }

    return 'vs';
};

export default getTheme;
