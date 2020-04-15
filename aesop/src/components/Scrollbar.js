import React, { Component } from 'react';

class Scrollbar extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div className="scrollBar">
                <img src={this.props.ImageOne} height="400px"/>
                <img src={this.props.ImageTwo} height="400px" />
                <img src={this.props.ImageThree} height="400px"/>
                <img src={this.props.ImageFour} height="400px"/>
                <img src={this.props.ImageFive} height="400px"/>
            </div>
          );

    }
  
}

export default Scrollbar;
