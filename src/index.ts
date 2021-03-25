import { parse, stringify, Rule } from 'css'

function loader (source: string): string {
    const ast = parse(source, {  })
    const { type, stylesheet } = ast
    if(type === 'stylesheet' && stylesheet) {
        const { rules = [] } = stylesheet
        rules.forEach((rule) => {
            if(rule.type === 'rule') {
                const sels = (rule as Rule).selectors.map(sel => {
                    return sel.replace(/^\s+|\s+$/g, '').replace(/\s+/, ' ')
                });
                (rule as Rule).selectors = sels
            }
        })
    }
    const output = stringify(ast, { compress: true, indent: '' })
    return output
}

export default loader