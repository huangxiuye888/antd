const path=require('path')
const resolve=dir=>path.join(__dirname,dir)
console.log(process.env.foo)
console.log(process.env.VUE_APP_DONG)
module.exports={
    publicPath:"/best-practice",
    devServer:{
        port:7070,
        open: true,
        hot: true,
        inline: true,
        overlay: {
          warnings: false,
          errors: false,
        },
        proxy: {
          '/api': {
            target: 'http://localhost:9028/',
            changeOrigin: true,
            ws: true,
            pathRewrite: {
              '^/api': ''
            }
          },
        }
    },
    configureWebpack:config=>{
        config.resolve.alias.com=path.join(__dirname,'src/components')
        if(process.env.NODE_ENV==='development'){
            config.name='vue最佳实践'
        }else{
            config.name='vue best'
        }
    },
    chainWebpack:config=>{
        config.module.rule('svg')
        .exclude.add(resolve('src/icon'))
        config.module.rule('icons')
        .test(/\.svg$/)
        .include.add(resolve('src/icon'))
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({symbolId:'icon-[name]'})
    }
}