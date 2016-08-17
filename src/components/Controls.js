import React from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap'

export default React.createClass({
    getInitialState() {
        return {

        };
    },

    onGeneratePoint() {
        this.props.control._generatePoint();
    },


    onGenerateCylinder() {
        this.props.control._generateCylinder();
    },


    onCalculateDistance() {
        this.props.control._calculateDistance();
    },

    onReset() {
        this.props.control._reset();
    },

    render() {
        return <ButtonToolbar>
            <Button bsStyle="primary" onClick={this.onGeneratePoint}>Generate Point</Button>
            <Button bsStyle="warning" onClick={this.onGenerateCylinder}>Generate Cylinder</Button>
            <Button bsStyle="success" onClick={this.onCalculateDistance}>Calculate Distance</Button>
            <Button bsStyle="danger" onClick={this.onReset}>Reset</Button>
        </ButtonToolbar>
    }
});
