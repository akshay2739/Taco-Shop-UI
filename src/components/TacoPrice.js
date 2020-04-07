import React, { Component } from 'react'

export default class TacoPrice extends Component {
    render() {
        return (
            <div className="taco-price-card">
                <p className="price">${this.props.price} </p>
                <p className="price-text">{this.props.text}</p>
            </div>
        )
    }
}
