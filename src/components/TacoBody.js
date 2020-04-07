import React, { Component } from 'react'
import TacoPrice from './TacoPrice'
import './style.css'

export default class TacoBody extends Component {
    render() {
        return (
            <div className="taco-body">
                <div className="taco">
                    <div className="taco-text">
                        <p className="taco-header" >Akshay's Taco point</p>
                        <p className="taco-footer">Pretty good Tacos</p>
                    </div>
                </div>
                <div className="taco-price">
                    <TacoPrice price="2.00" text="Taco 1"/>
                    <TacoPrice price="1.00" text="Taco 2"/>
                </div>
            </div>
        )
    }
}
