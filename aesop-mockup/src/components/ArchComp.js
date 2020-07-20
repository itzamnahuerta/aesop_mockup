import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


// ARCHITECTURE AND DESIGN DIV
// https://www.npmjs.com/package/react-slideshow-image
const slideImages = [
    'aesop-mockup/src/Aesop-Bleecker-Street-Carousel-1-Desktop-2560x1440px.jpg',
    'aesop-mockup/src/Aesop-Free-Market-Carousel-1-Desktop-2560x1440px.png'
]
 const Slideshow = () => {
     return (
         <div className="slide-container">
             <Slide>
                 <div className="each-slide">
                     <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                         <span>Slide 1</span>
                     </div>
                 </div>
                 <div className="each-slide">
                     <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                         <span>Slide 2</span>
                     </div>
                 </div>
             </Slide>
         </div>
     )
 }
class ArchComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: "",
            theme: "",
            description: "",
            function: "",
            img: "",
        }
    }
    render() {
        return (
            <div className="child arch-comp">
                <h3>Architecture and Design</h3>
                <h2>Spaces of distinction</h2>
                <h3>Aesop stores are informed by the history, fabric, and context of their local environments, yet retain an aesthetic consistency</h3>
                <button> Find A Nearby Store </button>
                <Slideshow />
            </div>
        )
    }
}
export default ArchComp;
