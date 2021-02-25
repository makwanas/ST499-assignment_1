import React, { Component } from 'react';
import Dialog from './Dialog';
import '../styling/LeftInput.css';

//Left Input
export class LeftInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dialogOpen: false
        }
    }

    //Toggles the dialog box component
    handleClick = () => {
        this.setState(state => ({
            dialogOpen: !state.dialogOpen
        }));
    }


    render() {
        const dialogOpen = this.state.dialogOpen;

        return (
            <div className="LeftInputBody">
                <button className="ButtonStyle" onClick={this.handleClick}>Open photo entry dialog</button>
                {dialogOpen ? <Dialog dialogOpen={dialogOpen} addImage={this.props.addImage} onCancelClick={this.handleClick} /> : null}
            </div>
        )
    }
}

export default LeftInput
