import React, { Component } from 'react';

class Scrollbar extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div className="scrollBar">
                <img src={this.props.ImageOne} />
            </div>
          );

    }
  
}

export default Scrollbar;
