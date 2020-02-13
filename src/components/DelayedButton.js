// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component {

    handleClick = (e) => {
        e.persist()
        window.setTimeout(() => { this.props.onDelayedClick(e) }, this.props.delay)
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick} ></button>
            </div>
        )
    }
}