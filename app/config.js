System.config({
  defaultJSExtensions: true,
  transpiler: "traceur",
  paths: {
    "app/*": "src/*.js",
    "users/*": "src/users/*.js",
    "material-start/*": "src/*.js",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "andrea-vega/mdPickers": "github:andrea-vega/mdPickers@0.7.5",
    "angular": "github:angular/bower-angular@1.6.6",
    "angular-animate": "github:angular/bower-angular-animate@1.6.6",
    "angular-aria": "github:angular/bower-angular-aria@1.6.6",
    "angular-cookies": "github:angular/bower-angular-cookies@1.6.6",
    "angular-material": "github:angular/bower-material@master",
    "angular-messages": "github:angular/bower-angular-messages@1.6.6",
    "angular-mocks": "github:angular/bower-angular-mocks@1.5.8",
    "angular-sanitize": "npm:angular-sanitize@1.6.6",
    "angular-translate": "github:angular-translate/bower-angular-translate@2.15.2",
    "angular-translate-loader-static-files": "github:angular-translate/bower-angular-translate-loader-static-files@2.15.2",
    "angular-translate-storage-cookie": "github:angular-translate/bower-angular-translate-storage-cookie@2.15.2",
    "angular-translate-storage-local": "github:angular-translate/bower-angular-translate-storage-local@2.15.2",
    "css": "github:systemjs/plugin-css@0.1.21",
    "json": "github:systemjs/plugin-json@0.1.0",
    "mdPickers": "github:dpoetzsch/md-pickers@1.1.0",
    "moment": "npm:moment@2.18.1",
    "text": "github:systemjs/plugin-text@0.0.4",
    "traceur": "github:jmcriffey/bower-traceur@0.0.93",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.93",
    "github:angular-translate/bower-angular-translate-loader-static-files@2.15.2": {
      "angular-translate": "github:angular-translate/bower-angular-translate@2.15.2"
    },
    "github:angular-translate/bower-angular-translate-storage-cookie@2.15.2": {
      "angular-translate": "github:angular-translate/bower-angular-translate@2.15.2"
    },
    "github:angular-translate/bower-angular-translate-storage-local@2.15.2": {
      "angular-translate": "github:angular-translate/bower-angular-translate@2.15.2"
    },
    "github:angular-translate/bower-angular-translate@2.15.2": {
      "angular": "github:angular/bower-angular@1.6.6"
    },
    "github:angular/bower-angular-animate@1.6.6": {
      "angular": "github:angular/bower-angular@1.6.6"
    },
    "github:angular/bower-angular-aria@1.6.6": {
      "angular": "github:angular/bower-angular@1.6.6"
    },
    "github:angular/bower-angular-cookies@1.6.6": {
      "angular": "github:angular/bower-angular@1.6.6"
    },
    "github:angular/bower-angular-messages@1.6.6": {
      "angular": "github:angular/bower-angular@1.6.6"
    },
    "github:angular/bower-material@master": {
      "angular": "github:angular/bower-angular@1.6.6",
      "angular-animate": "github:angular/bower-angular-animate@1.6.6",
      "angular-aria": "github:angular/bower-angular-aria@1.6.6",
      "angular-messages": "github:angular/bower-angular-messages@1.6.6",
      "css": "github:systemjs/plugin-css@0.1.21"
    }
  }
});
