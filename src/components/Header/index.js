import React from 'react';
import logobg from '../../assets/logofundo.svg'
import image1 from '../../assets/1.jpg'
import image2 from '../../assets/2.jpg'
import image3 from '../../assets/3.jpg'
import BackgroundSlideshow from 'react-background-slideshow'
import './styles.css'
const Header = () => (
    <header>
        <div className='logo'>
            <img src={logobg} alt='IFMG Ponte Nova' />
            <h1>IV Jogos Internos</h1>
        </div>

        <div className='slideshow' >
            <BackgroundSlideshow images={[image1, image2, image3]} />
        </div >

    </header>
);

export default Header;
