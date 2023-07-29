const {config} = require('./wdio.shared.conf');
const defaultBrowserSauceOptions = {
    build: process.env.BUILD_TAG ? process.env.BUILD_TAG : `Best Practices: Sauce Labs Desktop Web build-${new Date().getTime()}` ,
    tags: ["demo", "web", "sauce" ]
};
//config.maxInstances=1;
// =====================
// Sauce specific config
// =====================
config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY;
// If you run your tests on Sauce Labs you can specify the region you want to run your tests
// in via the `region` property. Available short handles for regions are `us` (default) and `eu`.
// These regions are used for the Sauce Labs VM cloud and the Sauce Labs Real Device Cloud.
// If you don't provide the region, it defaults to `us`.
config.region = process.env.REGION || 'us';

// ============
// Capabilities
// ============
config.capabilities = [
    /**
     * Desktop browsers
     */

    {
        browserName: 'googlechrome',
        platformName: 'Windows 10',
        browserVersion: 'latest',
        maxInstances: 2,
        'sauce:options': {
            ...defaultBrowserSauceOptions,
        },
    },
    // {
    //     // The defaults you need to have in your config
    //     'appium:deviceName': 'Google Pixel 3 GoogleAPI Emulator',
    //     'appium:platformVersion': '10.0',
    //     platformName: 'Android',
    //     browserName: 'chrome',
    //     deviceOrientation: 'PORTRAIT',
    //     maxInstances: 2,
    //     'sauce:options': {
    //         tags: ["demo", "web", "sauce" ],
    //         build: process.env.BUILD_TAG ? process.env.BUILD_TAG : `Best Practices: Sauce Labs Desktop Web build-${new Date().getTime()}` ,
    //         // You can provide the Appium Version, please check the platform configurator for all possible versions
    //         appiumVersion: '1.18.1'
    //     },
    // },
        /**
    {
        browserName: 'firefox',
        platformName: 'Windows 10',
        browserVersion: 'latest',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
        },
    },
    {
        browserName: 'internet explorer',
        platformName: 'Windows 8.1',
        browserVersion: 'latest',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
        },
    },
    {
        browserName: 'MicrosoftEdge',
        platformName: 'Windows 10',
        browserVersion: 'latest',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
        },
    },
    {
        browserName: 'safari',
        platformName: 'macOS 10.15',
        browserVersion: 'latest',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
        },
    },
             */
    // {
    //     browserName: 'safari',
    //     platformName: 'iOS',
    //     //deviceName: 'iPhone.*',
    //     platformVersion: '14',
    // },

];

// ========
// Services
// ========

// ============================================
// Add the Sauce Service, see
// https://webdriver.io/docs/sauce-service.html
// for more details
// ============================================
config.services = config.services.concat([
    // Add the service as an array so you can provide options
    [
        'sauce',
        // Enable Sauce Connect
        {
            sauceConnect: false,
            // Provide specific Sauce Connect options
            // Go to
            // https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy+Command-Line+Quick+Reference+Guide
            // for more options
            // Options need to be camelCase, so `--addtional-arg foo` will become `additionalArg: "foo"`
            sauceConnectOpts: {
                // This will write the sc logs to a file
                logfile: './sc.log',
                sharedTunnel: 'true',
                tunnelIdentifier: 'webTunnel'

                // ...
            }
        },
    ],
]);

exports.config = config;
