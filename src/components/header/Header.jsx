import React from 'react';
import classes from './Header.module.css';
import Logo from '../../assets/images/logo.svg';
import reactlogo from '../../assets/images/react.svg';


const Header = () => {
    return(
        <header>
            <div className='container'>
                <div>
                    <img className={classes.logo} src={Logo} alt="Logo" />
                </div>
                <div className='textRight'>
                    <img className={classes.reactLogo} src={reactlogo} alt="reactlogo" />
                    <strong>React</strong>

                </div>

            </div>
        </header>

    );

};

export default Header;