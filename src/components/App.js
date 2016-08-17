import '../assets/stylesheets/base.scss';
import React, { Component } from 'react';
import Controls from './Controls';
import Visualization from './Visualization';

export default React.createClass({

  getInitialState() {
      return {
          newCylinder: false,
          newPoint: false,
          newDistance: false,
          reset: false
      };
  },

  render() {

    return(
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <hr></hr>
        <Controls control={this}/>
        <hr></hr>
        <Visualization width={600} height={600} newCylinder={this.state.newCylinder} newPoint={this.state.newPoint} newDistance={this.state.newDistance} reset={this.state.reset}/>
      </div>
    );
  },

  /* CUSTOM METHODS */
  _generatePoint() {
      console.log("generating point 0_o");
      this.setState( {newCylinder: false, newPoint: true, newDistance: false, reset:false} );
  },

  _generateCylinder() {
      console.log("generating cylinder 0_o");
      this.setState( {newCylinder: true, newPoint: false, newDistance: false, reset:false} );
  },

  _calculateDistance() {
      console.log("calculating 0_o");
      this.setState( {newCylinder: false, newPoint: false, newDistance: true, reset:false} );
  },

  _reset() {
      console.log("resetting 0_o");
      this.setState( {newCylinder: false, newPoint: false, newDistance: false, reset:true} );
  }

  /* CUSTOM METHODS */


});
