import React, { Component } from 'react';
import { withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import vermelho from '../assets/vermelho.png'
import azul from '../assets/azul.png'
import preto from '../assets/preto.png'
import branco from '../assets/branco.png'
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
      
      createData = (classi, equipe, pontuacao,logo)=> {
        return { classi, equipe, pontuacao, logo };
      }
      
     rows = [
        this.createData('1º', 'Vermelho', '100',vermelho),
        this.createData('2º', 'Azul', '97',azul),
        this.createData('3º', 'Preto', '66',preto),
        this.createData('4º', 'Branco', '37',branco),
      ];
  render() {
    return(
<div id='container'>
        
        <section>
        <Paper className='root-2'>
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
                      <img src={row.logo} className='logoTime' alt=''/>
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
