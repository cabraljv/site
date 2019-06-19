import React, { Component } from 'react';
import './styleModal.css'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ImageGallery from 'react-image-gallery';
export default class JogosModal extends Component {
  StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
   StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);
  
  createData = (jogo, data, hora, result)=> {
    return { jogo, data, hora, result };
  }
  
 rows = [
    this.createData('Vermelho x Branco', '20/07/2019', '7:00', '-'),
    this.createData('Preto x Branco', '20/07/2019', '14:00', '-'),
    this.createData('Azul x Vermelho', '20/07/2019', '14:00', '-'),
    this.createData('Azul x Branco', '20/07/2019', '14:00', '-'),
    this.createData('Preto x Vermelho', '20/07/2019', '14:00', '-'),
  ];
  

  render() {
    if(this.props.jogo==='volei'){
      return(<div id='container'>
        <h1>Jogos de vôlei</h1>
        <section>
        <Paper className='root'>
          <Table className='table'>
            <TableHead>
              <TableRow>
                <this.StyledTableCell>Jogo</this.StyledTableCell>
                <this.StyledTableCell align="right">Data</this.StyledTableCell>
                <this.StyledTableCell align="right">Hora</this.StyledTableCell>
                <this.StyledTableCell align="right">Resultado</this.StyledTableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {this.rows.map(row => (
                <this.StyledTableRow key={row.jogo}>
                  <this.StyledTableCell component="th" scope="row">
                    {row.jogo}
                  </this.StyledTableCell>
                  <this.StyledTableCell align="right">{row.data}</this.StyledTableCell>
                  <this.StyledTableCell align="right">{row.hora}</this.StyledTableCell>
                  <this.StyledTableCell align="right">{row.result}</this.StyledTableCell>
                </this.StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        </section>
      </div>)
    }
    if(this.props.jogo==='fut'){
      return(<div id='container'>
        <h1>Jogos de Futsal</h1>
        <section>
        <Paper className='root'>
          <Table className='table'>
            <TableHead>
              <TableRow>
                <this.StyledTableCell>Jogo</this.StyledTableCell>
                <this.StyledTableCell align="right">Data</this.StyledTableCell>
                <this.StyledTableCell align="right">Hora</this.StyledTableCell>
                <this.StyledTableCell align="right">Resultado</this.StyledTableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {this.rows.map(row => (
                <this.StyledTableRow key={row.jogo}>
                  <this.StyledTableCell component="th" scope="row">
                    {row.jogo}
                  </this.StyledTableCell>
                  <this.StyledTableCell align="right">{row.data}</this.StyledTableCell>
                  <this.StyledTableCell align="right">{row.hora}</this.StyledTableCell>
                  <this.StyledTableCell align="right">{row.result}</this.StyledTableCell>
                </this.StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        </section>
      </div>)
    }
    if(this.props.jogo==='handball'){
      return(<div id='container'>
        <h1>Jogos de Handball</h1>
        <section>
        <Paper className='root'>
          <Table className='table'>
            <TableHead>
              <TableRow>
                <this.StyledTableCell>Jogo</this.StyledTableCell>
                <this.StyledTableCell align="right">Data</this.StyledTableCell>
                <this.StyledTableCell align="right">Hora</this.StyledTableCell>
                <this.StyledTableCell align="right">Resultado</this.StyledTableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {this.rows.map(row => (
                <this.StyledTableRow key={row.jogo}>
                  <this.StyledTableCell component="th" scope="row">
                    {row.jogo}
                  </this.StyledTableCell>
                  <this.StyledTableCell align="right">{row.data}</this.StyledTableCell>
                  <this.StyledTableCell align="right">{row.hora}</this.StyledTableCell>
                  <this.StyledTableCell align="right">{row.result}</this.StyledTableCell>
                </this.StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        </section>
      </div>)
    }
    if(this.props.jogo==='queimada'){
      return(<div id='container'>
        <h1>Jogos de Queimada</h1>
        <section>
        <Paper className='root'>
          <Table className='table'>
            <TableHead>
              <TableRow>
                <this.StyledTableCell>Jogo</this.StyledTableCell>
                <this.StyledTableCell align="right">Data</this.StyledTableCell>
                <this.StyledTableCell align="right">Hora</this.StyledTableCell>
                <this.StyledTableCell align="right">Resultado</this.StyledTableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {this.rows.map(row => (
                <this.StyledTableRow key={row.jogo}>
                  <this.StyledTableCell component="th" scope="row">
                    {row.jogo}
                  </this.StyledTableCell>
                  <this.StyledTableCell align="right">{row.data}</this.StyledTableCell>
                  <this.StyledTableCell align="right">{row.hora}</this.StyledTableCell>
                  <this.StyledTableCell align="right">{row.result}</this.StyledTableCell>
                </this.StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        </section>
      </div>)
    }
    if(this.props.jogo==='bandeira'){
      return(<div id='container'>
        <h1>Jogos de Pique Bandeira</h1>
        <section>
        <Paper className='root'>
          <Table className='table'>
            <TableHead>
              <TableRow>
                <this.StyledTableCell>Jogo</this.StyledTableCell>
                <this.StyledTableCell align="right">Data</this.StyledTableCell>
                <this.StyledTableCell align="right">Hora</this.StyledTableCell>
                <this.StyledTableCell align="right">Resultado</this.StyledTableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {this.rows.map(row => (
                <this.StyledTableRow key={row.jogo}>
                  <this.StyledTableCell component="th" scope="row">
                    {row.jogo}
                  </this.StyledTableCell>
                  <this.StyledTableCell align="right">{row.data}</this.StyledTableCell>
                  <this.StyledTableCell align="right">{row.hora}</this.StyledTableCell>
                  <this.StyledTableCell align="right">{row.result}</this.StyledTableCell>
                </this.StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        </section>
      </div>)
    }
    if(this.props.jogo==='peteca'){
      return(<div id='container'>
        <h1>Jogos de Peteca</h1>
        <section>
        <Paper className='root'>
          <Table className='table'>
            <TableHead>
              <TableRow>
                <this.StyledTableCell>Jogo</this.StyledTableCell>
                <this.StyledTableCell align="right">Data</this.StyledTableCell>
                <this.StyledTableCell align="right">Hora</this.StyledTableCell>
                <this.StyledTableCell align="right">Resultado</this.StyledTableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {this.rows.map(row => (
                <this.StyledTableRow key={row.jogo}>
                  <this.StyledTableCell component="th" scope="row">
                    {row.jogo}
                  </this.StyledTableCell>
                  <this.StyledTableCell align="right">{row.data}</this.StyledTableCell>
                  <this.StyledTableCell align="right">{row.hora}</this.StyledTableCell>
                  <this.StyledTableCell align="right">{row.result}</this.StyledTableCell>
                </this.StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        </section>
      </div>)
    }
    if(this.props.jogo==='xadrez'){
      return(<div id='container'>
        <h1>Jogos de Xadrez</h1>
        <section>
        <Paper className='root'>
          <Table className='table'>
            <TableHead>
              <TableRow>
                <this.StyledTableCell>Jogo</this.StyledTableCell>
                <this.StyledTableCell align="right">Data</this.StyledTableCell>
                <this.StyledTableCell align="right">Hora</this.StyledTableCell>
                <this.StyledTableCell align="right">Resultado</this.StyledTableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {this.rows.map(row => (
                <this.StyledTableRow key={row.jogo}>
                  <this.StyledTableCell component="th" scope="row">
                    {row.jogo}
                  </this.StyledTableCell>
                  <this.StyledTableCell align="right">{row.data}</this.StyledTableCell>
                  <this.StyledTableCell align="right">{row.hora}</this.StyledTableCell>
                  <this.StyledTableCell align="right">{row.result}</this.StyledTableCell>
                </this.StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        </section>
      </div>)
    }
    if(this.props.jogo==='gincana'){
      return(<div id='container'>
        <h1>Gincana</h1>
        <section>
          <p>Os horarios dos jogos não estão disponiveis para essa modalidade</p>
        </section>
      </div>)
    }
  }
}
