import React, { Component } from 'react';

{/* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_bottom */}
class Modal extends Component {
    render() {
        return (
            <div className="modal">
              <div className="modalSideBar">
                
                <span className="thex">&times;</span>
                some text inside
              </div>
            </div>
          );

    }
  
}

export default Modal;
