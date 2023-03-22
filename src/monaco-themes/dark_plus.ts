export default {
    "$schema": "vscode://schemas/color-theme",
	"name": "Alabaster",
	"tokenColors": [
		{
			"name": "Comments",
			"scope": [
				"comment",
				"punctuation.definition.comment"
			],
			"settings": {
				"foreground": "#AA3731"
			}
		},
		{
			"name": "Strings",
			"scope": [
				"string",
				"string.regexp",
				"constant.other.symbol"
			],
			"settings": {
				"foreground": "#448C27"
			}
		},
		{
			"name": "Strings: Escape Sequences",
			"scope": "constant.character.escape",
			"settings": {
				"foreground": "#777777"
			}
		},
		{
			"name": "Numbers, Characters",
			"scope": [
				"constant.numeric",
				"constant.character",
				"constant.keyword",
				"constant"
			],
			"settings": {
				"foreground": "#7A3E9D"
			}
		},
		{
			"name": "Global definitions",
			"scope": "entity.name",
			"settings": {
				"foreground": "#325CC0"
			}
		},
		{
			"name": "Punctuation",
			"scope": "punctuation",
			"settings": {
				"foreground": "#777777"
			}
		},
		{
			"name": "Invalid",
			"scope": "invalid",
			"settings": {
				"background": "#96000014",
				"foreground": "#660000"
			}
		},
		{
			"name": "Extra: Diff Range",
			"scope": [
				"meta.diff.range",
				"meta.diff.index",
				"meta.separator"
			],
			"settings": {
				"background": "#DDDDFF",
				"foreground": "#434343"
			}
		},
		{
			"name": "Extra: Diff From",
			"scope": "meta.diff.header.from-file",
			"settings": {
				"background": "#FFDDDD",
				"foreground": "#434343"
			}
		},
		{
			"name": "Extra: Diff To",
			"scope": "meta.diff.header.to-file",
			"settings": {
				"background": "#DDFFDD",
				"foreground": "#434343"
			}
		},
        {
            name: 'Types declaration and references',
            scope: ['meta.return-type', 'support.class', 'support.type', 'entity.name.type', 'entity.name.namespace', 'entity.name.scope-resolution', 'entity.name.class', 'storage.type.numeric.go', 'storage.type.byte.go', 'storage.type.boolean.go', 'storage.type.string.go', 'storage.type.uintptr.go', 'storage.type.error.go', 'storage.type.rune.go', 'storage.type.cs', 'storage.type.generic.cs', 'storage.type.modifier.cs', 'storage.type.variable.cs', 'storage.type.annotation.java', 'storage.type.generic.java', 'storage.type.java', 'storage.type.object.array.java', 'storage.type.primitive.array.java', 'storage.type.primitive.java', 'storage.type.token.java', 'storage.type.groovy', 'storage.type.annotation.groovy', 'storage.type.parameters.groovy', 'storage.type.generic.groovy', 'storage.type.object.array.groovy', 'storage.type.primitive.array.groovy', 'storage.type.primitive.groovy'],
            settings: {
                foreground: '#4EC9B0'
            }
        },
        {
            name: 'Types declaration and references, TS grammar specific',
            scope: ['meta.type.cast.expr', 'meta.type.new.expr', 'support.constant.math', 'support.constant.dom', 'support.constant.json', 'entity.other.inherited-class'],
            settings: {
                foreground: '#4EC9B0'
            }
        },
        {
            name: 'Variable and parameter name',
            scope: ['variable', 'meta.definition.variable.name', 'support.variable', 'entity.name.variable'],
            settings: {
                foreground: '#646cff'
            }
        },
	],
	"colors": {
		"editor.background": "#f8fafc",
		"editor.foreground": "#000000",
		"editor.lineHighlightBackground": "#F0F0F0",
		"editor.selectionBackground": "#BFDBFE",
		"editor.selectionHighlightBackground": "#CFCFCF81",
		"panel.background": "#F0F0F0",
		"sideBar.background": "#F0F0F0",
		"editorGroupHeader.tabsBackground": "#F0F0F0",
		"activityBar.background": "#F0F0F0",
		"activityBar.foreground": "#007ACC",
		"editorLineNumber.foreground": "#9DA39A",
		"editorCursor.foreground": "#007ACC",
		"editor.findMatchBackground": "#FFBC5D",
		"editor.findMatchHighlightBackground": "#FFD86381",
		"statusBar.background": "#DDDDDD",
		"statusBar.foreground": "#474747",
		"statusBar.debuggingBackground": "#FFBC5D",
		"statusBar.debuggingForeground": "#000000",
		"statusBar.noFolderBackground": "#7A3E9D",
		"statusBar.noFolderForeground": "#fff",

		"list.activeSelectionBackground": "#DDDDDD",
		"list.activeSelectionForeground": "#000000",
		"list.inactiveSelectionBackground": "#E6E6E6",
		"list.focusHighlightForeground": "#007ACC",
		"focusBorder": "#CCCCCC",

		"quickInputList.focusForeground": "#000000",
		"quickInputList.focusBackground": "#DDDDDD",

		"editorSuggestWidget.selectedBackground": "#DDDDDD",
		"editorSuggestWidget.focusHighlightForeground": "#000000",
		"editorSuggestWidget.highlightForeground": "#000000",
		"editorSuggestWidget.selectedForeground": "#000000",

		"terminal.ansiWhite": "#BBBBBB",
		"terminal.ansiBlack": "#000000",
		"terminal.ansiBlue": "#325CC0",
		"terminal.ansiCyan": "#0083B2",
		"terminal.ansiGreen": "#448C27",
		"terminal.ansiMagenta": "#7A3E9D",
		"terminal.ansiRed": "#AA3731",
		"terminal.ansiYellow": "#CB9000",
		"terminal.ansiBrightWhite": "#FFFFFF",
		"terminal.ansiBrightBlack": "#777777",
		"terminal.ansiBrightBlue": "#007ACC",
		"terminal.ansiBrightCyan": "#00AACB",
		"terminal.ansiBrightGreen": "#60CB00",
		"terminal.ansiBrightMagenta": "#E64CE6",
		"terminal.ansiBrightRed": "#F05050",
		"terminal.ansiBrightYellow": "#FFBC5D"
	}
};
