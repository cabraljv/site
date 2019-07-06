import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Header from '../../components/Header'
import Button from '@material-ui/core/Button';
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
import Slide from '@material-ui/core/Slide';
import vermelho from '../../assets/vermelho.png'
import azul from '../../assets/azul.png'
import branco from '../../assets/branco.png'
import preto from '../../assets/preto.png'
import Tabela from '../../components/Tabela'
import './style.css'
import NavBar from '../../components/NavBar';
import ModalGaleria from '../../components/ModalGaleria'

export default class Mobile extends Component {
    state = {
        className: 'hide',
        classNamenav: 'hideNav',
        navbarItens: {
            jogos: 'ativo',
            times: '',
            tabela: '',
            galeria: '',
        },
        showImages: false,
        ano: 2016,
        open: false,
        timesAnimation: 'hide',
    }

    handleScroll() {

        if (document.documentElement.scrollTop > 460) {

            this.setState({
                classNamenav: 'showNav',
                navbarItens: {
                    ...this.state.navbarItens,
                    jogos: 'ativo',
                    times: '',
                }

            })
        } else {
            this.setState({
                classNamenav: 'hideNav'
            })
        }

        if (document.documentElement.scrollTop >= 3050) {

            this.setState({
                navbarItens: {
                    ...this.state.navbarItens,
                    jogos: '',
                    times: 'ativo',
                    tabela: '',
                }

            })
        }
        if (document.documentElement.scrollTop >= 4400) {

            this.setState({
                navbarItens: {
                    ...this.state.navbarItens,
                    jogos: '',
                    times: '',
                    tabela: 'ativo',
                }
            })
            //console.log(this.state.navbarItens)
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
            showImages: false,
        });
    }

    componentDidMount() {
        window.onscroll = () => this.handleScroll();

    }
    Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="right" ref={ref} {...props} timeout={{ enter: 800, exit: 800 }} />;
    });
    render() {
        const { navbarItens } = this.state

        return (
            <div>

                <NavBar navbarItens={navbarItens} animation={this.state.classNamenav} />
                <Header />
                <section id='container' >
                    <section id='partidas' className='partidas' >
                        <h2 > Partidas por modalidade </h2>
                        <section>
                            <div id='volei' onClick={() => {
                                this.setState({ jogo: 'volei' })
                                this.handleClickOpen()
                            }} >
                                <img src={volei} alt='Vôlei' />
                                <h3 >Vôlei</h3>
                            </div >
                            < div id='futebol' onClick={() => {
                                this.setState({ jogo: 'fut' })
                                this.handleClickOpen()
                            }} >
                                <img src={futebol} alt='Futebol' />
                                <h3 >Futebol</h3>
                            </div >
                            < div id='handball' onClick={() => {
                                this.setState({ jogo: 'handball' })
                                this.handleClickOpen()
                            }} >
                                <img src={handball} alt='Handball' />
                                <h3 >Handball</h3>
                            </div >
                            < div id='queimada' onClick={() => {
                                this.setState({ jogo: 'queimada' })
                                this.handleClickOpen()
                            }} >
                                <img src={queimada} alt='Queimada' />
                                <h3 >Queimada</h3>
                            </div >
                            < div id='bandeira' onClick={() => {
                                this.setState({ jogo: 'bandeira' })
                                this.handleClickOpen()
                            }} >
                                <img src={bandeira} alt='Pique Bandeira' />
                                <h3 >Pique Bandeira</h3>
                            </div >
                            < div id='peteca' onClick={() => {
                                this.setState({ jogo: 'peteca' })
                                this.handleClickOpen()
                            }} >
                                <img src={peteca} alt='Peteca' />
                                <h3 >Peteca</h3>
                            </div >
                            < div id='xadrez' onClick={() => {
                                this.setState({ jogo: 'xadrez' })
                                this.handleClickOpen()
                            }} >
                                <img src={xadrez} alt='Xadrez' />
                                <h3 >Xadrez</h3>
                            </div >
                            < div id='gincana' onClick={() => {
                                this.setState({ jogo: 'gincana' })
                                this.handleClickOpen()
                            }} >
                                <img src={gincana} alt='Gincana' />
                                <h3 >Gincana</h3>
                            </div >

                        </section>
                    </section>

                    <Dialog fullScreen open={this.state.open} onClose={this.handleClose} TransitionComponent={this.Transition} className='tabelasJogos'>
                        <div className='jogosModal'>
                            <div className='iconeFechar'>
                                <Button onClick={this.handleClose}><img src={CloseIcon} alt='X' /></Button>

                            </div>
                            <ModalJogos jogo={this.state.jogo}></ModalJogos>
                        </div>
                    </Dialog>

                    <section id='equipes'>
                        <h2 > Equipes participantes </h2>
                        <section>
                            <div>
                                <img src={vermelho} alt='Time Vermelho' />
                            </div>
                            <div>
                                <img src={preto} alt='Time Preto' />

                            </div>
                            <div>
                                <img src={azul} alt='Time Azul' />
                            </div>
                            <div>
                                <img src={branco} alt='Time Branco' />
                            </div>

                        </section>

                    </section>
                    <section id='tabela'>
                        <h2 >Tabela</h2>
                        <Tabela />
                    </section>
                    <section id='galeria'>
                        <h2 >Galeria de fotos</h2>
                        <div>
                            <section onClick={() => { this.setState({ showImages: true, ano: 2016 }) }}>
                                <img src={require("../../assets/2016/6.jpg")} />
                                <h3>2016</h3>
                            </section >
                            <section onClick={() => { this.setState({ showImages: true, ano: 2017 }) }}>
                                <img src={require("../../assets/2017/13.JPG")} />
                                <h3>2017</h3>
                            </section>
                            <section onClick={() => { this.setState({ showImages: true, ano: 2018 }) }}>
                                <img src={require("../../assets/2016/3.jpg")} />
                                <h3>2018</h3>
                            </section>

                        </div>
                        <Dialog fullScreen open={this.state.showImages} onClose={this.handleClose} TransitionComponent={this.Transition}>
                            <div className='imagensModal'>
                                <div className='iconeFechar'>
                                    <Button onClick={this.handleClose}><img src={CloseIcon} alt='X' /></Button>

                                </div>
                                <ModalGaleria ano={this.state.ano}></ModalGaleria>
                            </div>
                        </Dialog>

                    </section>
                </ section >
                <footer>
                    <h3>Desenvolvido por <a href='https://github.com/unkn0wnNTC'>João Victor Cabral</a></h3>
                </footer>
            </div>
        );
    }
}