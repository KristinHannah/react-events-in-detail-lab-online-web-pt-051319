// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {
    constructor(props) {
        super()
        this.state = {

        }
    }

    coordinateArrayCreator = (event) => {
        let xyarray = []
        console.log(event.clientX)
        const eventX = event.clientX;
        const eventY = event.clientY;
        xyarray.push(eventX)
        xyarray.push(eventY)

        this.props.onReceiveCoordinates(xyarray)
    }

    render() {
        return (
            <button onClick={this.coordinateArrayCreator}> </button>

        )
    }

}