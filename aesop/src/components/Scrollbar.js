import React, { Component } from 'react';
{/*https://www.w3schools.com/howto/howto_css_menu_horizontal_scroll.asp*/}
{/*https://stackoverflow.com/questions/46233598/how-to-control-an-elements-scrollbar-in-javascript*/}
class Scrollbar extends Component {
    constructor(props) {
        super(props);
        this.checkScrollBar = this.checkScrollBar.bind(this);
    }
    componentDidMount() {
        let scrollBar = document.getElementsByClassName('scrollBar')[this.props.num];
        let leftButton = document.getElementsByClassName("LeftButton")[this.props.num];
        let rightButton = document.getElementsByClassName("RightButton")[this.props.num];
        console.log(leftButton.style.animation);
        console.log(rightButton.style.animation);
        if(scrollBar.scrollLeft===0){
            console.log(leftButton.animate);
            leftButton.style.left="-200px"
            //setTimeout(leftButton.style.display = "none",1000);
        } else if (scrollBar.scrollLeft>=window.outerWidth){
            rightButton.style.right="-200px";
            //setTimeout(rightButton.style.display = "none",1000);
        } else {
            leftButton.style.left="0";
            rightButton.style.right="0";
        }
        leftButton.onclick = function() {
            scrollBar.scrollLeft-=200;
            if(scrollBar.scrollLeft===0){
                console.log(leftButton.animate);
                leftButton.style.left="-200px"
                //setTimeout(leftButton.style.display = "none",1000);
            } else if (scrollBar.scrollLeft>=window.outerWidth){
                rightButton.style.right="-200px";
                //setTimeout(rightButton.style.display = "none",1000);
            } else {
                leftButton.style.left="0"
                leftButton.animate="slideIn";
                rightButton.style.right="0";
                rightButton.animate="slideInRight";
            }
            //this.checkScrollBar(scrollBar,leftButton,rightButton);
          };
        rightButton.onclick = function() {
            scrollBar.scrollLeft+=200;
            console.log(scrollBar.scrollLeft);
            if(scrollBar.scrollLeft===0){
                console.log(leftButton.animate);
                leftButton.style.left="-200px"
                //setTimeout(leftButton.style.display = "none",1000);
            } else if (scrollBar.scrollLeft>=window.outerWidth){
                rightButton.style.right="-200px";
                //setTimeout(rightButton.style.display = "none",1000);
            } else {
                leftButton.style.left="0"
                leftButton.animate="slideIn";
                rightButton.style.right="0";
                rightButton.animate="slideInRight";
            }
            //this.checkScrollBar(scrollBar,leftButton,rightButton);
        };
        
    }
    
    checkScrollBar(element,left,right) {
        if(element.scrollLeft===0){
            left.style.display = "none";
        } else if (element.scrollLeft>=window.outerWidth){
            right.style.display = "none";
        } else {
            left.style.display = "block";
            right.style.display = "block";
        }
    }
    render() {
        return (
            <div>
                <div className="scrollBar">
                <button className="LeftButton">Left Arrow</button>
                    <img src={this.props.ImageOne} height="400px"/>
                    <img src={this.props.ImageTwo} height="400px" />
                    <img src={this.props.ImageThree} height="400px"/>
                    <img src={this.props.ImageFour} height="400px"/>
                    <img src={this.props.ImageFive} height="400px"/>
                    <button className="RightButton">Right Arrow</button>
                </div>
                
                
            </div>
          );

    }
  
}

export default Scrollbar;
