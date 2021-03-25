import { parse, stringify, Rule, Declaration } from 'css'

function loader (source: string): string {
    const ast = parse(source, {  })
    const { type, stylesheet } = ast
    if(type === 'stylesheet' && stylesheet) {
        const { rules = [] } = stylesheet
        rules.forEach((rule) => {
            if(rule.type === 'rule') {
                const { selectors = [], declarations = [] } = rule as Rule
                const sels = selectors.map(sel => {
                    return sel.replace(/^\s+|\s+$/g, '').replace(/\s*([\+\>\~\:]+)\s*/g, '$1').replace(/\s+/g, ' ')
                });
                (rule as Rule).selectors = sels

                declarations.forEach(declaration => {
                    if(declaration.type === 'declaration') {
                        const { value } = declaration as Declaration
                        if(typeof value === 'string') {
                            const val = value.replace(/"[^"]*"|'[^']*'|\s*,\s*/g, m => {
                                return m.replace(/^\s+|\s+$/g, '')
                            });
                            (declaration as Declaration).value = val
                        }
                    }
                })
            }
        })
    }
    const output = stringify(ast, { compress: true, indent: '' })
    return output
}

export default loader