import React, { Component } from 'react';

export default class NavBarComp extends Component {
    render() {

        return (
            <div>
                <ul className='navBar' style={styles.navBar}> {/* Note syntax for styling inside of component. */}
                    <a href='#'>
                        <li style={styles.li}>Shop</li>
                    </a>
                    <a href='#'>
                        <li style={styles.li}>Read</li>
                    </a>
                    <a href='#'>
                        <li style={styles.li}>Stores</li>
                    </a>
                    <a href='#'>
                        <li style={styles.li}>Search</li>
                    </a>
                    <a href='#'>
                        <li style={styles.li}>Log-in</li>
                    </a>
                </ul>


                
            </div>
        )
    }
}

// Styling inside the component to avoid merge issues on css file
const styles = {
    navBar: {
    listStyle: 'none',
    display: 'flex',
    // justifyContent: 'space-between'
    },
    li: {
        paddingLeft: '10px'
    },
    login: {
        position: 'aboslute',
    }
}