import * as  Fs from 'fs';
import * as GetOpt from 'node-getopt';

const DEFAULT_CONFIG = './config/default.json';

/**
 * Parse command-line args and return config path.
 * @return { string } configPath
 */
export function parseArgs() {
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
export function parseConfigFile(configPath: string) {
    const configJson = JSON.parse(Fs.readFileSync(configPath).toString());
    console.log(configJson);
}
