import React, { Component } from 'react';
import CardItem from './CardItem';
import '../styling/RightOutput.css'

//RightOutput
export class RightOutput extends Component {

    render() {
        const imageList = this.props.imageList;

        // Displays imageList using map function with each individual item being CardItem
        return (
            <div className="RightOutputBody">
                {imageList.map((imageList) => (
                    <CardItem key={imageList.id} id={imageList.id} imageUrl={imageList.imageUrl} deleteImage={this.props.deleteImage} caption={imageList.caption} />
                ))}</div>)
    }
}


export default RightOutput
