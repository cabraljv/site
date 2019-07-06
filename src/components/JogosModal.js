import React, { Component } from 'react';
import './styleModal.css'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
export default class JogosModal extends Component {
  state = {
    num: 0
  }
  StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      textAlign: 'center',
    },
    body: {
      fontSize: 14,
      textAlign: 'center',
    },
  }))(TableCell);

  StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);

  createData = (jogo, data, hora, result) => {
    this.setState({ num: this.state.num + 1 })
    return { jogo, data, hora, result, id: this.state.num };
  }
  jogosVolei = [

    this.createData("Vermelho x Branco", "08/07/2019", "10:30", "-"),
    this.createData("Preto x Azul", "08/07/2019", "10:30", "-"),
    this.createData("Preto x Azul", "08/07/2019", "13:00", "-"),
    this.createData("Vermelho x Branco", "08/07/2019", "13:30", "-"),
    this.createData("Azul x Vermelho", "08/07/2019", "14:30", "-"),
    this.createData("Preto x Branco", "08/07/2019", "15:00", "-"),
    this.createData("Azul x Vermelho", "10/07/2019", "10:30", "-"),
    this.createData("Preto x Branco", "10/07/2019", "13:00", "-"),
    this.createData("Preto x Vermelho", "10/07/2019", "13:30", "-"),
    this.createData("Branco x Azul", "10/07/2019", "14:00", "-"),
    this.createData("Branco x Azul", "10/07/2019", "14:30", "-"),
    this.createData("Preto x Vermelho", "10/07/2019", "15:00", "-"),



  ];

  jogosFut = [
    this.createData("Preto x Vermelho", "08/07/2019", "7:00", "-"),
    this.createData("Branco x Azul", "08/07/2019", "7:30", "-"),
    this.createData("Preto x Vermelho", "09/07/2019", "7:00", "-"),
    this.createData("Branco x Azul", "09/07/2019", "7:30", "-"),
    this.createData("Vermelho x Branco", "09/07/2019", "9:00", "-"),
    this.createData("Preto x Branco", "10/07/2019", "7:00", "-"),
    this.createData("Preto x Azul", "10/07/2019", "7:30", "-"),
    this.createData("Azul x Vermelho", "10/07/2019", "8:00", "-"),
    this.createData("Azul x Vermelho", "11/07/2019", "7:00", "-"),
    this.createData("Preto x Azul", "11/07/2019", "7:30", "-"),
    this.createData("Vermelho x Branco", "12/07/2019", "8:00", "-"),
    this.createData("Preto x Branco", "12/07/2019", "8:30", "-"),

  ];
  jogosHandball = [
    this.createData("Branco x Azul", "08/07/2019", "8:00", "-"),
    this.createData("Preto x Vermelho", "08/07/2019", "8:30", "-"),
    this.createData("Azul x Vermelho", "09/07/2019", "8:00", "-"),
    this.createData("Preto x Vermelho", "09/07/2019", "8:30", "-"),
    this.createData("Branco x Azul", "09/07/2019", "10:00", "-"),
    this.createData("Preta x Azul", "10/07/2019", "8:30", "-"),
    this.createData("Preto x Branco", "10/07/2019", "9:00", "-"),
    this.createData("Vermelho x Branco", "11/07/2019", "8:00", "-"),
    this.createData("Vermelho x Branco", "11/07/2019", "8:30", "-"),
    this.createData("Azul x Vermelho", "12/07/2019", "7:00", "-"),
    this.createData("Preto x Azul", "12/07/2019", "7:30", "-"),
    this.createData("Preto x Branco", "12/07/2019", "9:00", "-"),

  ];

  jogosQueimada = [

    this.createData("Azul x Vermelho", "08/07/2019", "11:00", "-"),
    this.createData("Preto x Branco", "08/07/2019", "11:00", "-"),
    this.createData("Preto x Branco", "09/07/2019", "9:30", "-"),
    this.createData("Azul x Vermelho", "09/07/2019", "9:30", "-"),
    this.createData("Vermelho x Branco", "10/07/2019", "11:00", "-"),
    this.createData("Preto x Vermelho", "10/07/2019", "11:00", "-"),
    this.createData("Preto x Vermelho", "11/07/2019", "9:00", "-"),
    this.createData("Preto x Azul", "11/07/2019", "9:00", "-"),
    this.createData("Preto x Azul", "11/07/2019", "9:30", "-"),
    this.createData("Branco x Azul", "12/07/2019", "9:30", "-"),
    this.createData("Branco x Azul", "12/07/2019", "9:30", "-"),
    this.createData("Branco x Vermelho", "12/07/2019", "10:00", "-"),
  ];

  jogosBandeira = [

    this.createData("Azul x Vermelho", "08/07/2019", "9:00", "-"),
    this.createData("Preto x Branco", "08/07/2019", "9:30", "-"),
    this.createData("Preto x Branco", "09/07/2019", "10:30", "-"),
    this.createData("Vermelho x Branco", "09/07/2019", "11:00", "-"),
    this.createData("Preto x Vermelho", "10/07/2019", "9:30", "-"),
    this.createData("Branco x Azul", "10/07/2019", "10:00", "-"),
    this.createData("Preto x Vermelho", "11/07/2019", "10:00", "-"),
    this.createData("Branco x Azul", "11/07/2019", "10:30", "-"),
    this.createData("Preto x Azul", "11/07/2019", "11:00", "-"),
    this.createData("Azul x Vermelho", "11/07/2019", "11:30", "-"),
    this.createData("Preto x Azul", "12/07/2019", "10:30", "-"),
    this.createData("Vermelho x Branco", "12/07/2019", "11:00", "-"),

  ];


  jogosXadrez = [

    this.createData("Anna Caroline Santos de Oliveira x João Vitor Messias Silva", "09/07/2019", "11:30", "-"),
    this.createData("Vencedor Equipe Azul x Vencedor Equipe Preta ", "09/07/2019", "11:30", "-"),
    this.createData("Perdedor Semifinal J1 x Perdedor Semifinal J2", "12/07/2019", "11:30", "-"),
    this.createData("Vencedor Semifinal J1 x Vencedor Semifinal J2", "12/07/2019", "11:30", "-"),


  ];






  render() {
    if (this.props.jogo === 'volei') {
      return (<div id='container2'>
        <h1>Jogos de Voleibol</h1>
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
                {this.jogosVolei.map(row => (
                  <this.StyledTableRow key={row.id}>
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
    if (this.props.jogo === 'fut') {
      return (<div id='container2'>
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
                {this.jogosFut.map(row => (
                  <this.StyledTableRow key={row.id}>
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
    if (this.props.jogo === 'handball') {
      return (<div id='container2'>
        <h1>Jogos de Handebol</h1>
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
                {this.jogosHandball.map(row => (
                  <this.StyledTableRow key={row.id}>
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
    if (this.props.jogo === 'queimada') {
      return (<div id='container2'>
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
                {this.jogosQueimada.map(row => (
                  <this.StyledTableRow key={row.id}>
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
    if (this.props.jogo === 'bandeira') {
      return (<div id='container2'>
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
                {this.jogosBandeira.map(row => (
                  <this.StyledTableRow key={row.id}>
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
    if (this.props.jogo === 'peteca') {
      return (<div id='container2'>
        <h1>Jogos de Peteca</h1>
        <section>
          <p>Tabela não disponivel para essa modalidade</p>
        </section>
      </div>)
    }
    if (this.props.jogo === 'xadrez') {
      return (<div id='container2'>
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
                {this.jogosXadrez.map(row => (
                  <this.StyledTableRow key={row.id}>
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
    if (this.props.jogo === 'gincana') {
      return (<div id='container2'>
        <h1>Gincana</h1>
        <section>
          <p>Os horarios dos jogos não estão disponiveis para essa modalidade</p>
        </section>
      </div>)
    }
  }
}
