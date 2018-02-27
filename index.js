var geojsonhint = require('geojsonhint');
var ucfirst = require('ucfirst');

var types = [
  'Point',
  'LineString',
  'Polygon',
  'MultiPoint',
  'MultiLineString',
  'MultiPolygon',
  'Feature',
  'FeatureCollection',
  'GeometryCollection'
]

function createValidator(type) {
  return function(props, propName, componentName) {
    if(props.hasOwnProperty(propName)) {
      return null;
    }
    
    var value = props[propName];

    if(!value.type || type !== value.type) {
      return new Error('Invalid GeoJSON type for ' + componentName + '. Expected ' + type + '.');
    }

    var errors = geojsonhint.hint(value, {
      precisionWarning: false
    });

    var messages = ['Invalid GeoJSON for ' + componentName];

    errors.forEach(function(error) {
      messages.push(ucfirst(error.message));
    });

    return new Error(messages.join('. ') + '.');
  }
}

var GeoPropTypes = {};

types.forEach(function(type){
  GeoPropTypes[type] = createValidator(type);
});

module.exports = GeoPropTypes;
