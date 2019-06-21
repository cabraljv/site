import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Dialog from '@material-ui/core/Dialog';
import logobg from '../../assets/logofundo.svg'
import image1 from '../../assets/1.jpg'
import Button from '@material-ui/core/Button';
import image2 from '../../assets/2.jpg'
import image3 from '../../assets/3.jpg'
import volei from '../../assets/volei.svg'
import futebol from '../../assets/bolafut.svg'
import handball from '../../assets/handball.svg'
import queimada from '../../assets/queimada.svg'
import ModalJogos from '../../components/JogosModal'
import xadrez from '../../assets/xadrez.svg'
import bandeira from '../../assets/bandeira.svg'
import CloseIcon from '../../assets/closeicon.svg'
import gincana from '../../assets/gincana.svg'
import peteca from '../../assets/peteca.svg'
import logoji from '../../assets/logoJogos.svg'
import Slide from '@material-ui/core/Slide';
import vermelho from '../../assets/vermelho.svg'
import Tabela from '../../components/Tabela'
import './style.css'
import BackgroundSlideshow from 'react-background-slideshow'
import Navbar from 'react-bootstrap/Navbar'
import ResponsiveMenu from 'react-responsive-navbar';

export default class Main extends Component {
    state = {
        className: 'hide',
        classNamenav: 'hideNav',
        jogos: '',
        times: '',
        tabela: '',
        galeria: '',
        open: false,
        timesAnimation: 'hide',
    }

    handleScroll() {
        console.log(document.documentElement.scrollTop)
        if (document.documentElement.scrollTop > 310) {

            this.setState({
                className: 'show'
            })
        } else {
            this.setState({
                className: 'hide'
            })
        }
        if (document.documentElement.scrollTop > 460) {

            this.setState({
                classNamenav: 'showNav',
                jogos: 'ativo',
                times: '',
            })
        } else {
            this.setState({
                classNamenav: 'hideNav'
            })
        }
        if(document.documentElement.scrollTop > 1300){
            this.setState({
                timesAnimation: 'show',
            })
        }else{
            this.setState({
                timesAnimation: 'hide',
            })
        }
        if (document.documentElement.scrollTop >= 1500) {

            this.setState({
                times: 'ativo',
                jogos: '',
                tabela: '',
                
            })
        }
        if (document.documentElement.scrollTop >= 2000) {

            this.setState({
                times: '',
                jogos: '',
                tabela: 'ativo'
            })
        }

    }
    handleClickOpen = () => {
        this.setState({
            open: true,
        });
    }

    handleClose = () => {
        this.setState({
            open: false,
        });
    }

    componentDidMount() {
        window.onscroll = () => this.handleScroll();

    }
    Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="right" ref={ref} {...props} timeout={{ enter: 800, exit: 800 }} />;
    });
    render() {
        const images = [
            {
              original: image1,
              thumbnail: image1,
            },
            {
                original: image2,
                thumbnail: image2,
            },
            {
                original: image3,
                thumbnail: image3,
            }
          ]
        
        return (
            <div>
                <nav className={this.state.classNamenav}>
                    
                    <img src={logoji} />
                    <ul>
                        <li id={this.state.jogos}><AnchorLink offset='100' href='#partidas' className='linkstyle' >Partidas</AnchorLink></li>
                        <li id={this.state.times}><AnchorLink offset='100' href='#equipes' className='linkstyle' >Equipes</AnchorLink></li>
                        <li id={this.state.tabela}><AnchorLink offset='100' href='#tabela' className='linkstyle' >Tabela</AnchorLink></li>
                        <li id={this.state.galeria}><AnchorLink offset='100' href='#galeria' className='linkstyle' >Galeria</AnchorLink></li>
                    </ul>
                </nav>
                
                <header>
                    <img src={logobg} className='logo' />
                    <div className='slideshow' >
                        <BackgroundSlideshow images={[image1, image2, image3]} />
                    </div >
                    
                </header>
                <section id='container' >
                    <section id='partidas' className='partidas' >
                        <h2 > Partidas por modalidade </h2>
                        <section className={this.state.className} >
                            <div id='volei' onClick={()=>{
                                this.setState({jogo: 'volei'})
                                this.handleClickOpen()
                                }} >
                                <img src={volei} />
                                <h3 >Vôlei</h3>
                            </div >
                            < div id='futebol' onClick={()=>{
                                this.setState({jogo: 'fut'})
                                this.handleClickOpen()
                                }} >
                                <img src={futebol} />
                                <h3 >Futebol</h3>
                            </div >
                            < div id='handball' onClick={()=>{
                                this.setState({jogo: 'handball'})
                                this.handleClickOpen()
                                }} >
                                <img src={handball} />
                                <h3 >Handball</h3>
                            </div >
                            < div id='queimada' onClick={()=>{
                                this.setState({jogo: 'queimada'})
                                this.handleClickOpen()
                                }} >
                                <img src={queimada} />
                                <h3 >Queimada</h3>
                            </div >
                            < div id='bandeira' onClick={()=>{
                                this.setState({jogo: 'bandeira'})
                                this.handleClickOpen()
                                }} >
                                <img src={bandeira} />
                                <h3 >Pique Bandeira</h3>
                            </div >
                            < div id='peteca' onClick={()=>{
                                this.setState({jogo: 'peteca'})
                                this.handleClickOpen()
                                }} >
                                <img src={peteca} />
                                <h3 >Peteca</h3>
                            </div >
                            < div id='xadrez' onClick={()=>{
                                this.setState({jogo: 'xadrez'})
                                this.handleClickOpen()
                                }} >
                                <img src={xadrez} />
                                <h3 >Xadrez</h3>
                            </div >
                            < div id='gincana' onClick={()=>{
                                this.setState({jogo: 'gincana'})
                                this.handleClickOpen()
                                }} >
                                <img src={gincana} />
                                <h3 >Gincana</h3>
                            </div >

                        </section>
                    </section>
                    
                    <Dialog fullScreen open={this.state.open} onClose={this.handleClose} TransitionComponent={this.Transition} className='tabelasJogos'>
                            <div className='jogosModal'>
                            <div className='iconeFechar'>
                                <Button  onClick={this.handleClose}><img src={CloseIcon} alt='X'/></Button>
                                
                            </div>
                            <ModalJogos jogo={this.state.jogo}></ModalJogos>
                            </div>
                    </Dialog>
                    
                    <section id='equipes'>
                        <h2 > Equipes participantes </h2>
                        <section className={this.state.timesAnimation}>
                            <div>
                                <img src={vermelho}/>
                            </div>
                            <div>
                                <img src={logoji}/>

                            </div>
                            <div>
                                <img src={logoji}/>
                            </div>
                            <div>
                                <img src={logoji}/>
                            </div>
                        
                        </section>
                        
                    </section>
                    <section id='tabela'>
                        <h2 >Tabela</h2>
                        <Tabela />
                    </section>
                    <section id='galeria'>
                        <h2 >Galeria de fotos</h2>
                        
                        
                    </section>
                </ section >
                <footer>
                    <h3>Desenvolvido por <a href='https://github.com/unkn0wnNTC'>João Victor Cabral</a></h3>
                </footer>
            </div>
        );
    }
}