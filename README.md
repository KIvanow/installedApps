# Cordova Installed Apps Plugin

Simple plugin that returns all of the installed apps, their names and their packages on android devices.

##Install

recomended
    $ sudo plugman install --platform android --project . --plugin https://github.com/KIvanow/installedApps.git
    
alternatively
    $ sudo plugman install --platform android --project . --plugin info.quatinus.cordova.plugins.installedapps

## Using

```js
    var success = function( object ) {
        console.log( object );
    }
  
    var failure = function() {
        alert("Error calling Installed Apps Plugin");
    }

    installedApps.getPackages( success, failure);
```

  Or
  
 ```js 
    installedApps.getNames( success, failure);
 ``` 
 
  Or
  
```js  
    installedApps.getNamesAndPackages( success, failure);
```    

Result will be array of objects, each containing name, package or both.

It works great with this plugin for starting apps from cordova http://plugins.cordova.io/#/package/com.hutchind.cordova.plugins.launcher

  
