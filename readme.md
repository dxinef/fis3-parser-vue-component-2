fis3-parser-vue-component-2

fis3处理解析.vue文件的插件

使用举例：

````
fis.match("*.vue", {
    rExt: 'js',
    parser: [
        fis.plugin("vue-component-2", {
            runtimeOnly: true, // 使用vue runtime 模式，默认true
            cssScopedIdPrefix: "data-v-", // css scoped 前缀
            cssModulesMode: "global", // css modules 模式，默认为global模式
            cssModulesScopedName: "[local]-[hash:base64:8]" // css modules 注入名称命名规则
        })
    ]
});

// 模板style部分如果用less，则调相关的解析插件处理
// template/script 同理
fis.match("*.vue:less", {
    parser: [
        fis.plugin('less-2.x')
    ]
});
````