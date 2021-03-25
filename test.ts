import loader from './src/index'

const codes = [
    [`
    /* comment */
    .a.aa        b,
    .x .xx > y +    z :: before,
    .c    d    .abc : hover
    {
        color:           #fff;
        font-size:  16px;
        -webkit-user-select: none;
        font-family: -apple-system, BlinkMacSystemFont,    'Segoe UI Symbol';
        background-color: rbga(0, 0,    0, 0.5)
    }
    `, `.a.aa b,.x .xx>y+z::before,.c d .abc:hover{color:#fff;font-size:16px;-webkit-user-select:none;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI Symbol';background-color:rbga(0,0,0,0.5);}`]
]

codes.forEach(([origin, expect]) => {
    const compress = loader(origin)
    console.log(compress === expect, compress, expect)
})