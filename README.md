# GeoJSON Prop Types

A PropTypes library to validate GeoJSON objects.

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

# API

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