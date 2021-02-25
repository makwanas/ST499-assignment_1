import React, { Component } from 'react'
import LeftInput from './LeftInput'
import RightOutput from './RightOutput'
import { v4 as uuidv4 } from 'uuid';
import '../styling/Workspace.css';

//Workspace
export class Workspace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageList: []
        }
    }

    //Adds new image to the imageList array
    addImage = (imageUrl, caption) => {
        const newImage = {
            id: uuidv4(),
            imageUrl,
            caption
        }
        this.setState({ imageList: [newImage, ...this.state.imageList] });
    }

    //Deletes specific image from the imageList array
    deleteImage = (id) => {
        this.setState({
            imageList: [...this.state.imageList.filter(image => image.id !== id)]
        })
    }

    render() {
        const imageList = this.state.imageList;
        return (
            <div className="WorkspaceBody">
                <LeftInput className="LeftInputBody" addImage={this.addImage} />
                <RightOutput className="RightOutputBody" imageList={imageList} deleteImage={this.deleteImage} />
            </div>
        )
    }
}

export default Workspace
