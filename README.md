# About

Some Javascript where I share "models" I've created by hand in Javascript for THREE.js as geometries.

## Code Examples

```javascript
// Two materials: brown and green
const mat_trunk = new THREE.MeshPhongMaterial({color: "brown"});
const mat_crown = new THREE.MeshPhongMaterial({color: "green"});

// Trunk
var geometry_tree = SimplGeo.TreeGeometry(sz);

var obj = new THREE.Mesh(geometry_tree, [mat_trunk, mat_trunk, mat_trunk, mat_crown]);
obj.castShadow = true;
obj.receiveShadow = true;
obj.position.set(0.0,0,0);
scene.add(obj);
```

## Examples

  * Tree: https://mroman.ch/sgexamples/tree.html
