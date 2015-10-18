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

Drop the `<TAP />` component with a `label` parameter.

JSX:
```javascript
Meteor.startup(function() {
  React.render(<TAP label="fields.lastName" />, document.body);
});
```

en.i18n.json:
```json
{
  "fields": {
    "lastName": "Last name"
  }
}
```

fr.i18n.json:
```json
{
  "fields": {
    "lastName": "Nom de famille"
  }
}
```
