import React, { Component } from 'react';
import { withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import logo from '../assets/logoJogos.svg'
import Paper from '@material-ui/core/Paper';
import './tabela.css'

export default class Tabela extends Component {
    StyledTableCell = withStyles(theme => ({
        head: {
          backgroundColor: 'rgb(33, 228, 82)',
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
      
      createData = (classi, equipe, pontuacao)=> {
        return { classi, equipe, pontuacao };
      }
      
     rows = [
        this.createData('1º', 'Vermelho', '100'),
        this.createData('2º', 'Azul', '97'),
        this.createData('3º', 'Preto', '66'),
        this.createData('4º', 'Branco', '37'),
      ];
  render() {
    return(
<div id='container'>
        
        <section>
        <Paper className='root'>
          <Table className='table'>
            <TableHead>
              <TableRow>
                <this.StyledTableCell>Colocação</this.StyledTableCell>
                <this.StyledTableCell align="center">Equipe</this.StyledTableCell>
                <this.StyledTableCell align="right">Pontuação</this.StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.rows.map(row => (
                <this.StyledTableRow key={row.pontuacao}>
                  <this.StyledTableCell component="th" scope="row">
                    {row.classi}
                  </this.StyledTableCell>
                  <this.StyledTableCell align="right">
                      <img src={logo} className='logoTime'/>
                    <p>{row.equipe}</p>
                  </this.StyledTableCell>
                  <this.StyledTableCell align="right">{row.pontuacao}</this.StyledTableCell>
                  
                </this.StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        </section>
      </div>
    );
  }
}
