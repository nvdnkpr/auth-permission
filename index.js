module.exports = Permission;

function Permission(action, resource) {
  Object.defineProperty(this, 'action', {
    enumerable: true,
    value: action
  });
  Object.defineProperty(this, 'resource', {
    enumerable: true,
    value: resource
  });
};

Permission.prototype.name = function() {
  return this.action + ' ' + this.resource;
};
