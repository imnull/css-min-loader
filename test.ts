import loader from './src/index'

const codes = [
    [`
    /* comment */
    a        b,
    c    d {
        color:           #fff;
        font-size:  16px;
    }
    `, `a b,c d{color:#fff;font-size:16px;}`]
]

codes.forEach(([origin, expect]) => {
    const compress = loader(origin)
    console.log(compress === expect, compress, expect)
})