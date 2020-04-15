import React, { Component } from 'react';
{/*https://www.w3schools.com/howto/howto_css_menu_horizontal_scroll.asp*/}
{/*https://stackoverflow.com/questions/46233598/how-to-control-an-elements-scrollbar-in-javascript*/}
class Scrollbar extends Component {
    constructor(props) {
        super(props);
        
    }
    componentDidMount() {
        let scrollBar = document.getElementsByClassName('scrollBar')[0];
        let leftButton = document.getElementsByClassName("LeftButton")[0];
        let rightButton = document.getElementsByClassName("RightButton")[0];
        leftButton.onclick = function() {
            scrollBar.scrollLeft-=200;
          };
        rightButton.onclick = function() {
            scrollBar.scrollLeft+=200;
        };
        
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
