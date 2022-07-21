const { config } = require("./wdio.conf");
const AndroidInfo = require("./android.device.info");
const path = require("path");

// Appium capabilities
config.capabilities = [
  {
    // platformName: "Android",
    // maxInstances: 1,
    // "appium:automationName": "UIAutomator2",
    // "appium:deviceName": AndroidInfo.deviceName(),
    // "appium:platformVersion": AndroidInfo.platFormVersion(),
    // "appium:app": path.resolve(`./apps/${AndroidInfo.appName()}`),

    project: "First Webdriverio Android Project",
    build: "Webdriverio Android",
    name: "firs_test",
    device: "Google Pixel 3",
    os_version: "9.0",
    app: "bs://2aa2b3feda748739c57afc4a148034e12cf2a2e1",
    "browserstack.debug": true,
  },
];

config.cucumberOpts.tagExpression = "@android"; // pass tag to run tests specific to android

exports.config = config;
