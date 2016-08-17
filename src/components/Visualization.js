import React, { Component } from 'react';
import THREE from 'three';
import { Renderer, Scene, PerspectiveCamera } from 'react-three';
import Cylinder from './Cylinder';
import Point from './Point';
import Line from './Line';
import ResultDisplay from './ResultDisplay';


export default React.createClass({

  getInitialState() {
      console.log("initial state setting:"+ this.props.newCylinder);
      return {
          newCylinder: this.props.newCylinder,
          newPoint: this.props.newPoint,
          newDistance: this.props.newDistance,
          reset: this.props.reset,
          cylinderJSX: null,
          pointJSX: null,
          lineJSX: null,
          pointCenter: null,        //single coordinate in global space
          cylinderVertices: null,   //array of vertices with coordinates in global space
          closetCylinderVertex: null,
          closestDistance: null
      };
  },

  render(){
      let aspectratio = this.props.width / this.props.height;
      let cameraprops = {fov:75, aspect:aspectratio, near:1, far:5000, position:new THREE.Vector3(0,0,600), lookat:new THREE.Vector3(0,0,0)};

      if(this.props.reset){
          this.state.lineJSX = null;
          this.state.pointJSX = null;
          this.state.cylinderJSX = null;
          this.state.closestDistance = null;
          this.state.closetCylinderVertex = null;
          this.state.pointCenter = null;
      }

      if(this.props.newCylinder) {
          let that = this;
          let random_position = [1,1,1].map(function(){
              return that._getRandomInteger(-300,300);
          });
          let random_rotation = [1,1,1].map(function(){
              return that._getRandomInteger(-100,100)*Math.PI/100;
          });

          let geometry    = new THREE.CylinderGeometry( 75, 75, 300, 64, 64 );
            geometry.translate(...random_position);
            geometry.rotateX(random_rotation[0]);
            geometry.rotateY(random_rotation[1]);
            geometry.rotateZ(random_rotation[2]);

          this.state.cylinderVertices = geometry.vertices;
          this.state.cylinderJSX = <Cylinder radius={75} height={300} color={0xffff00} geometry={geometry} />;

          this.state.lineJSX = null;  //clear the previous line
          this.state.closestDistance = null; //clear previous calculated distance
          this.state.closetCylinderVertex = null; //clear previous calcualted cylinder vertex
      }

      if(this.props.newPoint) {
          let that = this;
          let random_position = [1,1,1].map(function(){
              return that._getRandomInteger(-300,300);
          });
          this.state.pointCenter = random_position;
          this.state.pointJSX = <Point position={random_position} />;

          this.state.lineJSX = null;  //clear the previous line
          this.state.closestDistance = null; //clear previous calculated distance
          this.state.closetCylinderVertex = null; //clear previous calcualted cylinder vertex
      }

      if(this.props.newDistance) {
          let result = this._getMinimumDistance();
          console.log(result.distance);

          this.state.closetCylinderVertex = result.vertex;
          this.state.closestDistance = result.distance;

          this.state.lineJSX = <Line startCoord={ this.state.closetCylinderVertex } endCoord={this.state.pointCenter } />;

      }

      return (
        <div>
          <ResultDisplay
            distance={this.state.closestDistance}
            cylinder_position={this.state.closetCylinderVertex}
            point_position={this.state.pointCenter} />

          <hr></hr>

          <Renderer width={this.props.width} height={this.props.height}>
            <Scene width={this.props.width} height={this.props.height} camera="maincamera">
                <PerspectiveCamera name="maincamera" {...cameraprops} />
                  {this.state.cylinderJSX}
                  {this.state.pointJSX}
                  {this.state.lineJSX}
            </Scene>
          </Renderer>

        </div>
      );
  },


  /* CUSTOM METHODS HERE */
  _getRandomInteger(min, max) { //from min to max, not including max
      return Math.floor(Math.random() * (max - min)) + min;
  },

  //looks at pointCenter and cylinderVertices to find closest vertex
  _getMinimumDistance() {
      let cylinder_vertices = this.state.cylinderVertices;
      let point_center      = this.state.pointCenter;
      let total_vertices    = cylinder_vertices.length;

      let minimum_distance  = null;
      let minimum_vertex    = null;

      for (let i=0; i<total_vertices; i++) {
          let cylinder_coordinate = [cylinder_vertices[i].x, cylinder_vertices[i].y, cylinder_vertices[i].z];

          let distance = this._getDistanceTwoPoints(cylinder_coordinate, point_center);

          if(i==0 || distance < minimum_distance ) {
              minimum_distance = distance;
              minimum_vertex = cylinder_coordinate;
          }
      }

      //construct output format
      return {vertex: minimum_vertex, distance: minimum_distance };
  },

  _getDistanceTwoPoints(one, two) {
      return Math.sqrt( (one[0]-two[0])*(one[0]-two[0]) + (one[1]-two[1])*(one[1]-two[1]) + (one[2]-two[2])*(one[2]-two[2]) );
  }

  /* CUSTOM METHODS HERE */


});
