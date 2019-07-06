const GetOpt = require('node-getopt');
const Fs = require('fs');

const DEFAULT_CONFIG = './config/default.json';

/**
 * Parse command-line args and return config path.
 * @return { string } configPath
*/
function parseArgs() {
    const opts = GetOpt.create(
        [
            ['c', 'config-path=', 'config path'],
        ])
        .bindHelp()
        .parseSystem();

    let configPath = '';
    if ('c' in opts.options && opts.options.c) {
        configPath = opts.options.c;
    } else {
        configPath = DEFAULT_CONFIG;
    }
    if (!Fs.existsSync(configPath)) {
        throw new Error('can not run without the config file. ');
    }

    return configPath;
}

/**
 * Parse config file.
 * @param {string} configPath
 */
function parseConfigFile(configPath) {
    const configJson = JSON.parse(Fs.readFileSync(configPath));
    console.log(configJson);
}

/**
 * main function.
 * @return { void }
 */
function main() {
    const configPath = parseArgs();
    parseConfigFile(configPath);
}

main();
