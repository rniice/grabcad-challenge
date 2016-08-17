import React, { Component } from 'react';
import THREE from 'three';
import { Mesh, Object3D, Line } from 'react-three';


export default React.createClass({

  render(){
      let geometry    = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(...this.props.startCoord));
        geometry.vertices.push(new THREE.Vector3(...this.props.endCoord));

        console.log("cylinder location: " + this.props.startCoord);
        console.log("point location: " + this.props.endCoord);

      var material = new THREE.LineBasicMaterial({
          color: 0x0000ff,
          linewidth: 5
      });

      return (
          <Line geometry={geometry} material={material} />
      );
  }


  /* CUSTOM METHODS HERE */



  /* CUSTOM METHODS HERE */

});
