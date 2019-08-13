/*后处理css，在css-loader后优化css
包括给 CSS 自动加前缀、使用下一代 CSS 语法等
PostCSS 和 CSS 的关系就像 Babel 和 JavaScript 的关系，
它们解除了语法上的禁锢，通过插件机制来扩展语言本身，用工程化手段给语言带来了更多的可能性。
PostCSS 和 SCSS 的关系就像 Babel 和 TypeScript 的关系，PostCSS 更加灵活、可扩张性强，
而 SCSS 内置了大量功能而不能扩展。
*/


const autoprefixer = require('autoprefixer')
module.exports = {
    plugins: [
        autoprefixer(/*浏览器前缀*/
          {
            browsers: ['last 100 versions']//一定要配置浏览器  不然不会预编译
          }
        )
    ]
}
