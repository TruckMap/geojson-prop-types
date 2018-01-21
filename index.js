var geojsonhint = require('geojsonhint');

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
    if(!props.type || type !== props.type) {
      return new Error('Invalid GeoJSON type for ' + componentName + '. Expected ' + type + '.');
    }

    var errors = geojsonhint.hint(props, {
      precisionWarning: false
    });

    if(errors.length == 0) return null;

    var messages = ['Invalid GeoJSON for ' + componentName];

    errors.forEach(function(error) {
      messages.push(error.message);
    });

    return new Error(messages.join('. ') + '.');
  }
}

var GeoPropTypes = {};

types.forEach(function(type){
  GeoPropTypes[type] = createValidator(type);
})

module.exports = GeoPropTypes;
