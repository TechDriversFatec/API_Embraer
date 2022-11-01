import React, { useState, useEffect } from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            backgroundColor: theme.palette.common.white,
            fontSize: 14,
        },
    }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }),
)(TableRow);

// function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
//     return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function CustomizedTables() {
    const classes = useStyles();


    type Log = {
        id: number,
        usuario: string,
        aeronave: string,
        dataCalculo: string,
        flap: string,
    }

    const [logs, setLogs] = useState<Log[]>([]);

    useEffect(() => {

        async function loadLogs() {
            const response = await axios.get('http://localhost:3002/getLogs')
            setLogs(response.data)
        }
        loadLogs();
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>User</StyledTableCell>
                        <StyledTableCell align="center">Airplane</StyledTableCell>
                        <StyledTableCell align="center">Calculation Date</StyledTableCell>
                        <StyledTableCell align="center">Used Flap</StyledTableCell>
                        <StyledTableCell align="center">Options</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {logs.map((row) => (
                        <StyledTableRow key={row.id}>
                            <StyledTableCell component="th" scope="row">
                                {row.usuario}
                            </StyledTableCell>
                            <StyledTableCell>{row.aeronave}</StyledTableCell>
                            <StyledTableCell>{row.dataCalculo}</StyledTableCell>
                            <StyledTableCell>{row.flap}</StyledTableCell>
                            <StyledTableCell align='center'>Buttons</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}