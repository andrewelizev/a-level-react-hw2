import React, { Component } from 'react';

class Range extends Component {
    state = { position: 0 }

    onChange = (event) => {
        let position = event.target.value
        this.setState({ position: position })
    }

    render() {
        return (
            <div>
                <input type='range' step='1' onChange={this.onChange}/>
                <input value={this.state.position}/>
            </div>
        )
    }
}

export default Range;