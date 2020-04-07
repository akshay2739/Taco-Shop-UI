import React, { Component } from 'react'
import './style.css'

export default class Type extends Component {
    render() {
        return (
            <div>
                <div className="card">
        <           p>{this.props.title}</p>
                </div>
            </div>
            
        )
    }
}
