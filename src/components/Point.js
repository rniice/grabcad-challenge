import React, { Component } from 'react';
import THREE from 'three';
import { Mesh, Object3D } from 'react-three';


export default React.createClass({


  render(){

      let geometry    = new THREE.SphereGeometry( 10, 32, 32 );
      let material    = new THREE.MeshNormalMaterial( {wireframe: false} );
      let position    = new THREE.Vector3(...this.props.position);

      return (
        <Object3D position={position} >
          <Mesh geometry={geometry} material={material} />
        </Object3D> );
  }


  /* CUSTOM METHODS HERE */


  /* CUSTOM METHODS HERE */

});
