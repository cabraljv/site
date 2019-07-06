import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './styles.css'
import logoji from '../../assets/logoJogos.svg'

const NavBar = (props) => (
    <nav className={props.animation}>
        <img src={logoji} alt='Jogos Internos'/>
        <ul>
            <li id={props.navbarItens.jogos}><AnchorLink offset='100' href='#partidas' className='linkstyle' >Partidas</AnchorLink></li>
            <li id={props.navbarItens.times}><AnchorLink offset='100' href='#equipes' className='linkstyle' >Equipes</AnchorLink></li>
            <li id={props.navbarItens.tabela}><AnchorLink offset='100' href='#tabela' className='linkstyle' >Tabela</AnchorLink></li>
            <li id={props.navbarItens.galeria}><AnchorLink offset='100' href='#galeria' className='linkstyle' >Galeria</AnchorLink></li>
        </ul>
    </nav>
);
export default NavBar;
