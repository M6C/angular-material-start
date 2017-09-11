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
    "angular": "github:angular/bower-angular@1.6.6",
    "angular-animate": "github:angular/bower-angular-animate@1.6.6",
    "angular-aria": "github:angular/bower-angular-aria@1.6.6",
    "angular-cookies": "github:angular/bower-angular-cookies@1.6.6",
    "angular-material": "github:angular/bower-material@master",
    "angular-messages": "github:angular/bower-angular-messages@1.6.6",
    "angular-mocks": "github:angular/bower-angular-mocks@1.5.8",
    "angular-translate": "github:angular-translate/bower-angular-translate@2.15.2",
    "angular-translate-loader-static-files": "github:angular-translate/bower-angular-translate-loader-static-files@2.15.2",
    "angular-translate-storage-cookie": "github:angular-translate/bower-angular-translate-storage-cookie@2.15.2",
    "angular-translate-storage-local": "github:angular-translate/bower-angular-translate-storage-local@2.15.2",
    "css": "github:systemjs/plugin-css@0.1.21",
    "json": "github:systemjs/plugin-json@0.1.0",
    "mdPickers": "npm:mdPickers@0.7.5",
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
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.0.7"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:buffer@5.0.7": {
      "base64-js": "npm:base64-js@1.2.1",
      "ieee754": "npm:ieee754@1.1.8"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:mdPickers@0.7.5": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
