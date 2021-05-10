import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
    return(
    <footer>
        <div className={['container', classes.container].join(' ')}>
            <div>copyright &copy;2021</div>
            <div className='textRight'>
                Built with <span className='red'>&hearts;</span> HunterCafe
            </div>

        </div>
    </footer>
    );
}
export default Footer;