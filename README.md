# Cordova Installed Apps Plugin

Simple plugin that returns all of the installed apps, their names and their packages on android devices.

# Using

    var success = function( object ) {
        console.log( object );
    }
  
    var failure = function() {
        alert("Error calling Installed Apps Plugin");
    }

    installedApps.getPackages( success, failure);
  
  Or
  
    installedApps.getNames( success, failure);
  
  Or
  
    installedApps.getNamesAndPackages( success, failure);
    
Result will be array of objects, each containing name, package or both.

It works great with this plugin for starting apps from cordova http://plugins.cordova.io/#/package/com.hutchind.cordova.plugins.launcher

  
