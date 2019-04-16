'use strict';const chalk=require("chalk");const Color=require("color");const _require=require("browser-or-node"),isBrowser=_require.isBrowser;const is=require("electron-is");exports.success=text=>{if(isBrowser){console.log(" %cSUCCESS "+text,"background: green; border-radius: 2px")}if(is.main()){console.log(" ".concat(chalk.bgGreen.black(" MAIN ")," ").concat(text))}if(is.renderer()){console.log(" ".concat(chalk.bgGreen.black(" RENDERER ")," ").concat(text))}console.log(" ".concat(chalk.bgGreen.black(" SUCCESS ")," ").concat(text))};exports.info=text=>{if(isBrowser){console.log(" %cINFO "+text,"background: blue; border-radius: 2px")}if(is.main()){console.log(" ".concat(chalk.bgBlue(" MAIN ")," ").concat(text))}if(is.renderer()){console.log(" ".concat(chalk.bgBlue(" RENDERER ")," ").concat(text))}console.log(" ".concat(chalk.bgBlue(" INFO ")," ").concat(text))};exports.warning=text=>{if(isBrowser){console.log(" %cWARNING "+text,"background: yellow; border-radius: 2px")}if(is.main()){console.log(" ".concat(chalk.bgYellow.black(" MAIN ")," ").concat(text))}if(is.renderer()){console.log(" ".concat(chalk.bgYellow.black(" RENDERER ")," ").concat(text))}console.log(" ".concat(chalk.bgYellow.black(" WARNING ")," ").concat(text))};exports.error=text=>{if(isBrowser){console.log(" %cERROR "+text,"background: red; border-radius: 2px")}if(is.main()){console.log(" ".concat(chalk.bgRed(" MAIN ")," ").concat(text))}if(is.renderer()){console.log(" ".concat(chalk.bgRed(" RENDERER ")," ").concat(text))}console.log(" ".concat(chalk.bgRed(" ERROR ")," ").concat(text))};exports.custom=(title,text,_ref)=>{let titleColor=_ref.titleColor,backgroundColor=_ref.backgroundColor;const color=Color(titleColor).hex();const bgColor=Color(backgroundColor).hex();if(isBrowser){console.log(" %c".concat(title," ")+text,"color: ".concat(color||"white","; background: ").concat(bgColor||"black","; border-radius: 2px"))}if(is.main()){console.log(" ".concat(chalk.bgGreen.black(" MAIN ")," ").concat(text))}if(is.renderer()){console.log(" ".concat(chalk.bgGreen.black(" RENDERER ")," ").concat(text))}console.log(" ".concat(chalk.bgHex(bgColor).hex(color)(" ".concat(title," "))," ").concat(text))};