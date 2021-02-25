import React, { Component } from 'react'
import Error from './Error';
import '../styling/Dialog.css';

//Dialog
export class Dialog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageUrl: "",
            caption: "",
            error: false
        }
    }

    //Submits only if there is no error and calls addImage function from props
    handleSubmit = () => {
        if (this.state.error === false) {
            this.props.addImage(this.state.imageUrl, this.state.caption)
        }
    }

    //Closes the dialog on Clicking cancel and resets error to false
    handleCancel = () => {
        this.props.onCancelClick(false);
        this.setState({
            error: false
        })
    }

    //Updates the changes in the controlled form component and updates the state accordingly
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    //Calls handleSubmit as callback function only if there is no error
    handleError = (event) => {
        event.preventDefault();
        if (this.state.imageUrl === "" || this.state.caption === "") {
            this.setState({
                error: true
            }, this.handleSubmit)
        }
        else {
            this.setState({
                error: false
            }, this.handleSubmit)
        }
    }

    render() {
        const imageUrl = this.state.imageUrl;
        const caption = this.state.caption;
        const error = this.state.error;

        return (
            <div className="DialogBody">
                <form onSubmit={this.handleError}>
                    <label className="LabelText">
                        Photo url:
                        <input className="InputBody" placeholder="Enter image URL here" type="url" name="imageUrl" value={imageUrl} onChange={this.handleChange} />
                    </label>
                    <br />
                    <label className="LabelText">
                        Caption:
                        <input className="InputBody" placeholder="Enter a caption here" type="text" name="caption" value={caption} onChange={this.handleChange} />
                    </label>
                    <br />
                    <div className="ButtonHandler">
                        <button className="AcceptButtonStyle" type="submit">Accept</button>
                        <button className="CancelButtonStyle" type="reset" onClick={this.handleCancel}>Cancel</button>
                    </div>
                    {error ? <Error error={error} /> : null}
                </form>
            </div>
        )
    }
}

export default Dialog
