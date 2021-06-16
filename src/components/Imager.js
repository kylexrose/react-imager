import React, { Component } from 'react'
import Display from "./Display"
import Thumbnail from "./Thumbnail"
import "./Imager.css"
import { v4 as uuidv4 } from 'uuid';

export class Imager extends Component {
    state = {
        picArray:["images/image-0.jpg", "images/image-1.jpg", "images/image-2.jpg", "images/image-3.jpg", 
            "images/image-4.jpg", "images/image-5.jpg", "images/image-6.jpg", "images/image-7.jpg", 
            "images/image-8.jpg", "images/image-9.jpg", "images/image-10.jpg", "images/image-11.jpg", ],
        currentPath : "images/image-0.jpg",
        currentIndex: 0,
    }

    getRandPicture = () =>{
        let rand = Math.floor(Math.random() * 12);
        this.setState({
            currentPath : this.state.picArray[rand],
            currentIndex: rand,
        })
        console.log(this.state.currentPath)
        return true;
    }

    imageLeft = () =>{
        if(this.state.currentIndex > 0){
            this.setState((prevState) =>{
                return{
                    currentIndex : prevState.currentIndex - 1,
                    currentPath: this.state.picArray[prevState.currentIndex - 1]
                }
                
            })
        }
    }

    imageRight = () =>{
        if(this.state.currentIndex < 11){
            this.setState((prevState) =>{
                return{
                    currentIndex : prevState.currentIndex + 1,
                    currentPath: this.state.picArray[prevState.currentIndex + 1]
                }
                
            })
        }
    }

    handlePicClick = (index) =>{
        this.setState({
            currentIndex : index,
            currentPath : this.state.picArray[index]
        })
        
    }

    render() {
        return (
            <div className="body">
                <div id="main">
                    <div id="header">imager.</div>
                    <Display src={this.state.currentPath}/>
                    <div id="controlBar">
                        <button id= "rand" onClick={() => this.getRandPicture()}>random.</button>
                        <div id="buttons">
                            <button onClick={() => this.imageLeft()}>back.</button>
                            <button onClick={() => this.imageRight()}>next.</button>
                        </div>
                    </div>
                    <div className="thumbnails">
                        {
                            this.state.picArray.map((path, i) =>{
                                return(
                                    <Thumbnail key={uuidv4()} index={i} src={path} handlePicClick={this.handlePicClick}/>
                                )
                            })
                        }
                    </div>
                </div> 
            </div>
        )
    }
}

export default Imager
