class AndroidInfo {
    static deviceName() {
        return 'Android Emulator'; // pass the udid or devicename
    }

    static platFormVersion() {
        return '11'; // pass the platform version
    }

    static appName() {
        return 'AwesomeApp.apk'; // pass the apk name
    }
}

module.exports = AndroidInfo;
