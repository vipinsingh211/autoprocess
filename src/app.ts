import * as helper from './lib/helper';

/**
 * main function.
 * @return { void }
 */
function main() {
    const configPath = helper.parseArgs();
    helper.parseConfigFile(configPath);
}

main();
