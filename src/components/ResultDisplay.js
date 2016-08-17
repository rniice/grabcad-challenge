import React, { Component } from 'react';
import {Table} from 'react-bootstrap'

export default React.createClass({

    render(){
        let style = {
          width: 500
        }

        let result_distance = "TBD";
        let result_cylinder_position = "TBD";
        let result_point_position = "TBD";

        if(this.props.distance) {
           result_distance = parseFloat(this.props.distance).toFixed(2);
        }
        if(this.props.cylinder_position) {
           result_cylinder_position = this.props.cylinder_position.map(function(element){
             return parseFloat(element).toFixed(1) + " ";
          });
        }
        if(this.props.point_position) {
           result_point_position = this.props.point_position.map(function(element){
             return parseFloat(element).toFixed(1) + " ";
           });
        }

        return (
          <Table style={style} bordered={true} condensed={true} hover={true} >
              <thead>
                <tr>
                  <th>{"Minimum Distance"}</th>
                  <th>{"Cylinder Position"}</th>
                  <th>{"Point Position"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{result_distance}</td>
                  <td>{result_cylinder_position}</td>
                  <td>{result_point_position}</td>
                </tr>
              </tbody>
          </Table> );
      }

});
