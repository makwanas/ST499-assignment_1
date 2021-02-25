import React, { Component } from 'react';
import '../styling/CardItem.css';

//Individual CardItem component
export class CardItem extends Component {

    handleDelete = () => {
        this.props.deleteImage(this.props.id)
    }

    render() {
        const imageUrl = this.props.imageUrl;
        const caption = this.props.caption;
        return (
            <div className="CardItemBody">
                <img className="CardItemImage" src={imageUrl} />
                <div className="CardDetails">
                    <h3 className="CardItemCaption">{caption}</h3>
                    <button className="DeleteButton" onClick={this.handleDelete}>X</button>
                </div>
            </div>
        )
    }
}

export default CardItem
