import React, { Component } from 'react';

class Scrollbar extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div className="scrollBar">
                <img src={this.props.ImageOne} />
                <img src={this.props.ImageTwo} />
                <img src={this.props.ImageThree} />
                <img src={this.props.ImageFour} />
                <img src={this.props.ImageFive} />
            </div>
          );

    }
  
}

export default Scrollbar;
