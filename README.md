```diff
- NOTE: This package is not maintained anymore.
- If you want to help, please reach out to gwendall.esnault@gmail.com
```

Meteor TAPi18n React
=========================

React component for [TAPi18n](https://github.com/TAPevents/tap-i18n).

Installation
------------

``` sh
meteor add gwendall:tapi18n-react
```

How it works
-----------

Drop the `<TAP />` component with a `label` (+ optionally `options`) parameter.

JSX:
```javascript
Meteor.startup(function() {
  React.render(<TAP label="messages.welcome" options={{ liked: 'React' }}/>, document.body);
});
```

en.i18n.json:
```json
{
  "messages": {
    "welcome": "I like __liked__ !"
  }
}
```

fr.i18n.json:
```json
{
  "messages": {
    "welcome": "J'aime __liked__ !"
  }
}
```
