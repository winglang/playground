import { IGrammarDefinition, Registry } from 'monaco-textmate';
import { wireTmGrammars } from 'monaco-editor-textmate';
import jsJson from './js.tmLanguage.json';
import wingJson from './wing.tmLanguage.json';

export async function wireGrammers(monaco: any) {
    const registry = new Registry({
        getGrammarDefinition: async (scopeName: string, dependantScope: string): Promise<IGrammarDefinition> => {
            if (scopeName === 'source.wing') {
                return {
                    format: 'json',
                    content: wingJson
                };
            } else if (scopeName === 'source.js') {
                return {
                    format: 'json',
                    content: jsJson
                };
            } else {
                return {
                    format: 'json',
                    content: jsJson
                };
            }
        }
    });

    const grammers = new Map();

    grammers.set('wing', 'source.wing');
    grammers.set('js', 'source.js');

    return wireTmGrammars(monaco, registry, grammers);
}