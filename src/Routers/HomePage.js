import React, { Component } from 'react';
import { animations, easings } from 'react-animation';

import './HomePage.css'

const style = {
    animation: `pop-in ${easings.easeOutExpo} 1200ms forwards`
}



class HomePage extends Component {

    render() {

        return (

            <>
                <div className="cover" >

                    <div className="inner" style={style}>
                        <h1>Welcome to page</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                    </div>


                </div>
            </>

        )
    }
}

export default HomePage;