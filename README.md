# mgt-sp-fx-extensions-issue

## Summary
To see the issue in action:
- Build the solution as is with "npm run build:prod"
- Publish the SPPKG in the App Catalog
- Test it on any Document Library in any site
- It works
- Remove the package from the App Catalog

Now:
- Open file [](./src/extensions/useMgt/UseMgtCommandSet.ts) and uncomment line 11 and lines from 34 to 36.
- Build the solution as is with "npm run build:prod"
- Publish the SPPKG in the App Catalog
- Test it on any Document Library in any site with F12
- The extension will not work and you will see an exception in the console, looking like:

Could not load use-mgt-command-set in require. Trying in system.js. {alias: 'UseMgtCommandSet', isDebug: undefined, isInternal: undefined, manifestId: '9452afe4-903f-4fde-9e20-5b6611fd9ec8', version: '0.0.1', …}



