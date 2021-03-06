var snakeCase = require('lodash.snakecase');

function addGroup(resource, actionTypes, group) {
  var upperResource = snakeCase(resource).toUpperCase();
  var upperGroup    = group.toUpperCase();

  var start        = upperResource + '_' + upperGroup + '_START';
  var success      = upperResource + '_' + upperGroup + '_SUCCESS';
  var error        = upperResource + '_' + upperGroup + '_ERROR';
  var startAlias   = group + 'Start';
  var successAlias = group + 'Success';
  var errorAlias   = group + 'Error';

  actionTypes[start]   = start;
  actionTypes[success] = success;
  actionTypes[error]   = error;
  actionTypes[startAlias] = start;
  actionTypes[successAlias] = success;
  actionTypes[errorAlias] = error;
}

module.exports = function(resource) {
  const actionTypes = {};

  addGroup(resource, actionTypes, 'fetch');
  addGroup(resource, actionTypes, 'create');
  addGroup(resource, actionTypes, 'update');
  addGroup(resource, actionTypes, 'delete');

  return actionTypes;
}
