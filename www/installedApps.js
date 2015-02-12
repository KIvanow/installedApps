/*global cordova, module*/

module.exports = {
    getPackages: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "InstalledApps", "getPackages", []);
    },
    getNames: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "InstalledApps", "getNames", []);
    },
    getNamesAndPackages: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "InstalledApps", "getNamesAndPackages", []);
    }

};
