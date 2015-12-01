/**
 * @file 入口模块，基于 `fis3-command-init` 模块修改
 * @author sparklewhy@gmail.com
 */

var pkgManage = require('fisx-package');

exports.name = 'install <components>';
exports.desc = 'install components package';
exports.options = {
    '-h, --help': 'print this help message',
    '-r, --root <path>': 'set project root',
    '-f, --force': 'force install latest version on conflict',
    '-p, --production': 'do not install project devDependencies',
    // '-s, --save': 'save component(s) dependencies into `package.json` file', // 默认都是保存的，没有不保存的场景。。
    '-d, --save-dev': 'save component(s) dependencies into `package.json` devDependencies'
};

exports.run = function (argv, cli, env) {
    if (argv.h || argv.help) {
        return cli.help(exports.name, exports.options);
    }

    argv._.shift();
    var installComponents = argv._;
    var isProduction = argv.production || argv.p;
    var saveToDevDep = !isProduction && (argv['save-dev'] || argv.d);
    var options = {
        root: env.cwd,
        forceLatest: argv.force || argv.f,
        saveToDevDep: saveToDevDep,
        saveToDep: !saveToDevDep,
        installAllDep: true,
        installAllDevDep: !isProduction
    };

    return pkgManage.initProjectRoot(env.configNameSearch[0], options, fis)
        .then(pkgManage.loadUserConfig.bind(this, env.configNameSearch[0], options, fis))
        .then(function () {
            return pkgManage.install(installComponents, options);
        });
};
