module.exports = Permission;

/**
 * Define a new permission with given `action` and `resource`.
 */

function Permission(action, resource) {
  if (!(this instanceof Permission)) {
    return new Permission(action, resource);
  }

  this.action = function() {
    return action;
  };

  this.resource = function() {
    return resource;
  };
};

Permission.prototype.name = Permission.prototype.toJSON = function() {
  return this.action() + ' ' + this.resource();
};
