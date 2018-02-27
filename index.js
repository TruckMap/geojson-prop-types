var GJV = require('geojson-validation');
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
  function validate(isRequired, props, propName, componentName) {
    var value = props[propName];

    if(!value || !(value instanceof Object)){
      if(isRequired) {
        return new Error('GeoJSON for `' + type + '` on ' + componentName + ' is Required.');
      }
      return null;
    }

    if(!value.type || type !== value.type) {
      return new Error('Invalid GeoJSON type for ' + componentName + '. Expected ' + type + '.');
    }

    var messages = [];

    GJV.valid(value, function(isValid, errors){
      if(isValid) return;

      messages = ['Invalid GeoJSON for ' + componentName];

      errors.forEach(function(error) {
        messages.push(ucfirst(error) + '.');
      });
    });

    if(messages.length === 0) {
      return null;
    }

    return new Error(messages.join(' '));
  }

  var chainedValidator = validate.bind(null, false);
  chainedValidator.isRequired = validate.bind(null, true);

  return chainedValidator;
}

var GeoPropTypes = {};

types.forEach(function(type){
  GeoPropTypes[type] = createValidator(type);
});

module.exports = GeoPropTypes;
