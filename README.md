# GeoJSON Prop Types

A PropTypes library to validate GeoJSON objects for React.

Links:
- [GeoJSON.org](http://geojson.org)
- [IETF RFC 7946 - Spec](https://tools.ietf.org/html/rfc7946)

# Installation

`npm install --save geojson-prop-types`

# Usage

```
import GeoPropTypes from 'geojson-prop-types';

class MyComponent extends React.Component {
  static propTypes = {
    location: GeoPropTypes.Point,
    requiredLineString: GeoPropTypes.LineString.isRequired,
    //...
  };
}
```

# Supported Types

```
GeoPropTypes.Point
GeoPropTypes.LineString
GeoPropTypes.Polygon
GeoPropTypes.MultiPoint
GeoPropTypes.MultiLineString
GeoPropTypes.MultiPolygon
GeoPropTypes.Feature
GeoPropTypes.FeatureCollection
GeoPropTypes.GeometryCollection
```

All types support the chainable `.isRequired` validator.

# TODO

- [ ] Require specific Geometry types in Features and Collections
- [ ] Validator for shape of GeoJSON `properties` field
- [ ] Support additional methods: `.instanceOf`, `.oneOf`