import React, { Component } from 'react';

class FadeIn extends Component {
    constructor(props) {
        super(props);
        
    }
    componentDidMount(){
        {/*https://www.dev-tips-and-tricks.com/animate-elements-scrolled-view-vanilla-js*/}
        let allHiddenDivs = document.getElementsByClassName('FadeIn');
        window.addEventListener('scroll', function () {
            for (let hiddenDiv of allHiddenDivs) {
                console.log(hiddenDiv);
              let positionFromTop = hiddenDiv.getBoundingClientRect().top;
        
              if (positionFromTop - window.innerHeight <= 0) {
                hiddenDiv.style.opacity=1;
              }
            }
          });
        window.addEventListener('resize', function () {
            for (let hiddenDiv of allHiddenDivs) {
              let positionFromTop = hiddenDiv.getBoundingClientRect().top;
        
              if (positionFromTop - window.innerHeight <= 0) {
                hiddenDiv.style.opacity=1;
              }
            }
          });
    }
    render() {
        return (
            <div>
            </div>
          );

    }
  
}

export default FadeIn;
