import React, { Component } from 'react'

export class Display extends Component {
    render() {
        const { src } = this.props;
        return (
            <div style={{textAlign:"center", margin: "10px"}}>
                <img style={{width:'450px', height: '450px'}} src = {src} alt=""/>
            </div>
        )
    }
}

export default Display
