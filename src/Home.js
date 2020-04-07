import React, { Component } from 'react'
import MainMenu from './components/MainMenu'
import TacoBody from './components/TacoBody'
import './Home.css'


export default class Home extends Component {
    render() {
        return (
            <div className="main-body">
                <div className="wrapper">
                    <MainMenu />
                    <TacoBody />
                    
                </div>
            </div>
        )
    }
}
