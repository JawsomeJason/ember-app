# ember-app

Baseline setup for Ember application with the tools I use most.

## Assumptions

The following should already be installed:

```sh
# Install Homebrew or some other OS-specific package manager
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

brew install node         # install node and npm
npm install -g ember-cli  # Ember CLI 
npm install -g bower      # Bower Components
```

Once this repo is cloned locally, run the following:

```sh
npm install                 # Install npm dependencies
bower install               # install bower dependencies
ember serve                 # start the app
open http://localhost:4200  # view the app 
```

## Included Addons and Example Usages

Below is a list of addons included in this setup.

<details>
    <summary>ember-browserify: https://github.com/ef4/ember-browserify</summary>

### Example

1. Install an npm module: `npm i -D my-cool-module`
2. In app, import module: `import MyCoolModule from "npm:my-cool-module"`
</details>

<details>
<summary>ember-cli-fastboot: https://github.com/ember-fastboot/ember-cli-fastboot</summary>

from: 

run: `ember fastboot --serve-assets`
view: `localhost:3000`
</details>

<details>
<summary>ember-cli-post-css: https://github.com/jeffjewiss/ember-cli-postcss</summary>

### Example

**install autoprefixer**
`npm i --save-dev autoprefixer`

**configure in `ember-cli-build.js`**
```
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var autoprefixer = require('autoprefixer');

module.exports = function (defaults) {
  var app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        enabled: false
      },
      filter: {
        enabled: true,
        plugins: [
          {
            module: autoprefixer,
            options: {
              browsers: ['last 2 version']
            }
          }
        ]
      }
    }
  });
  return app.toTree();
};
```
</details>

<details>
    <summary>ember-cli-sass-pods: https://github.com/justtal/ember-cli-sass-pods</summary>


### Example

Generate styles for `foo` route and `foo-bar` components
```
ember g style foo
ember g style components/foo-bar
```
</details>

<details>
    <summary>ember-link-action: https://github.com/Kuzirashi/ember-link-action</summary>

### Example

Add action to `link-to`
```
{{#link-to 'other-route' invokeAction=(action 'testAction' param1 param2)}}
  Link to other route
{{/link-to}}
```
</details>

<details>
    <summary>ember-remarkable: https://github.com/johnotander/ember-remarkable</summary>

### Example

Common options
```
{{md-text
  text        = "# Markdown text!"  /* required */
  typographer = true                /* include fancy typography */
  linkify     = false               /* auto-link urls */
  html        = true                /* don't escape html in markdown */
}}
```
</details>

<details>
    <summary>ember-router-scroll: https://github.com/dollarshaveclub/ember-router-scroll</summary>

### Example

**app/router.js**
```
import RouterScroll from 'ember-router-scroll'

//...

const Router = Ember.Router.extend(RouterScroll, { 
    //...
};
```

**config/environment.js**
```
/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    // ...
    locationType: 'router-scroll'
    historySupportMiddleware: true,
    // ...
  }
  
  // ...

  return ENV;
};
```
</details>

<details>
    <summary>eqcss: https://github.com/eqcss/eqcss</summary>

*This is already included in the `didTransition()` for every route.*

### Example

**app/pods/foo/route.js**
```
import Ember from 'ember';

const { EQCSS } = window;

export default Ember.Route.extend({
  didTransition() {
    EQCSS.apply(); // forces update of DOM and EQCSS
  }
});
```
</details>
