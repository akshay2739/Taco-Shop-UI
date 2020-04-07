import React, { Component } from 'react'
import Type from './Type'
import './style.css'

export default class MainMenu extends Component {
    render() {
        return (
            <div className="menu">
                <Type title="TACOS" />
                <Type title="BEER" />
                <Type title="WINES" />
                <Type title="DESSERTS" />
                <Type title="RESERVATIONS" />
            </div>
        )
    }
}
