import React, { Component } from 'react'
import '../styling/Error.css';

//Error
export class Error extends Component {
    render() {
        return (
            <div className="ErrorBody">
                <p>Please enter a caption or URL</p>
            </div>
        )
    }
}

export default Error
