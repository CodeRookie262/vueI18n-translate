#!/usr/bin/env node
require('colors');
const program = require('commander');
const createFile = require('../lib/create');

program.command('create [src]')
    .description('对src目录下的vue/js文件进行国际化替换生成, 默认src为执行目录下的src目录')
    .option('-k, --key <key>', '自定义key前缀，默认为相对执行目录的文件路径')
    .option('-s, --single', '是否为单文件index序列，默认为全局序列，当自定义key之后，此设置无效')
    .option('-p, --path <path>', '设置生成文件的路径，默认为运行目录（请设置已经存在的目录！！！）')
    .option('-f, --filename <filename>', '设置生成文件名，默认为vue_translate')
    .option('-r, --readonly', '是否仅提取 $t 翻译参数')
    .action((src = 'src', {key, single, path, readonly, filename = 'vue_translate'}) => {
        createFile.create(src, {key, single, path, filename, readonly});
    });
program.on('command:*', function () {
    console.error('Invalid command: %s\nSee --help for a list of available commands.', program.args.join(' '));
    process.exit(1);
});
if (process.argv.length === 2) {
    program.help();
}

program.parse(process.argv);

// #!/usr/bin/env node
// require('colors')
// const program = require('commander')
// const vueI18nParse = require('../lib/create')

// program.command('parse [src]')
//   .description('解析运行目录下的 src 目录中 vue/js 进行 $t 变量提取')
//   .option('-p, --path <path>', '设置生成文件的路径，默认为运行目录（目录需存在，不提供创建功能）')
//   .option('-f, --filename <filename>', '设置生成文件的名称（如已存在则会追加内容），默认为 vueI18n-translate')
//   .option('-t, --type <output>', '设置文本内容格式，支持 json/js/txt 后缀文件，默认 .txt')
//   .option('-n, --name <name>', '设置翻译函数名称，默认 $t')
//   .action((src = 'src', { path, type, name = '$t', filename = 'vueI18n-translate' }) => {
//     vueI18nParse.create(src, { path, filename, type, name })
//   })

// program.on('command:*', () => {
//   console.error('Invalid command: %s\nSee --help for a list of available commands.', program.args.join(' '))
//   process.exit(1)
// })

// if (process.argv.length === 2) {
//   program.help()
// }

// program.parse(process.argv)