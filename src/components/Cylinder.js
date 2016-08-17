import React, { Component } from 'react';
import THREE from 'three';
import { Mesh, Object3D } from 'react-three';


export default React.createClass({

  render(){
      //let geometry    = new THREE.CylinderGeometry( this.props.radius, this.props.radius, this.props.height, 64, 64 );
      let geometry    = this.props.geometry;
      let material    = new THREE.MeshNormalMaterial( {wireframe: true} );

      return (
        <Object3D >
          <Mesh geometry={geometry} material={material} />
        </Object3D> );
  }


  /* CUSTOM METHODS HERE */



  /* CUSTOM METHODS HERE */

});
