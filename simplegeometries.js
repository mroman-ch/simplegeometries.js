import * as THREE from "https://threejs.org/build/three.module.js";

/**
 * Returns a TreeGeometry. 
 *
 * Material Index 0-2 are for the faces of the trunk.
 * Material Index 3 is for the crown.
 *
 * @param {number} sz Unit size 
 * @returns {Geometry}
 */
export function TreeGeometry(sz) {
  var geometry_tree = new THREE.CylinderGeometry(sz/2,sz/1.5,3*sz,8,8);
  
  var geometry_crown_1 = new THREE.BoxGeometry(sz,sz,sz);
  geometry_crown_1.translate(0,2*sz,0);
  
  var geometry_crown_2 = new THREE.IcosahedronGeometry(sz);
  geometry_crown_2.translate(0,3*sz,0);
  
  var geometry_crown_3 = new THREE.IcosahedronGeometry(sz);
  geometry_crown_3.translate(sz,2*sz,0);
  
  var geometry_crown_4 = new THREE.IcosahedronGeometry(sz);
  geometry_crown_4.translate(-sz,2*sz,0);
  
  var geometry_crown_5 = new THREE.IcosahedronGeometry(sz);
  geometry_crown_5.translate(0,2*sz,sz);
  
  var geometry_crown_6 = new THREE.IcosahedronGeometry(sz);
  geometry_crown_6.translate(0,2*sz,-sz);
  
  geometry_tree.merge(geometry_crown_1, geometry_crown_1.matrix, 3);
  geometry_tree.merge(geometry_crown_2, geometry_crown_2.matrix, 3);
  geometry_tree.merge(geometry_crown_3, geometry_crown_3.matrix, 3);
  geometry_tree.merge(geometry_crown_4, geometry_crown_4.matrix, 3);
  geometry_tree.merge(geometry_crown_5, geometry_crown_5.matrix, 3);
  geometry_tree.merge(geometry_crown_6, geometry_crown_6.matrix, 3);
  
  return geometry_tree;
}