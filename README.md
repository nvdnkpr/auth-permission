# auth-permission

Represent a permission having an action and resource.

## Installation

### Node

```sh
npm install auth-permission
```

### Browser

```sh
component install alexmingoia/auth-permission
```

## Example

```javascript
var Permission = require('auth-permission');

var permission = new Permission('read', 'forum');
```

## API

### Permission(action, resource)

Creates a new Permission with given `action` and `resource`.

### permission.name()

```javascript
var permission = new Permission('read', 'forum');

permission.name();
// => "read forum"
```

### permission.action()

### permission.resource()

## MIT Licensed
