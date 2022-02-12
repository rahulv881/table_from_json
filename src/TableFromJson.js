import React , {useEffect, useState} from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Paper, TableContainer,TableRow, TableHead,TableCell ,TableBody,Table } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    columnHeader: {
      borderBottom: "1px solid rgba(0,0,1,0.2)",
      boxShadow: "0px 0px 2px 2px black",
      backgroundColor: "rgba(0,0,1,0.2)",
    },
    rowHeaderCell: {
      fontWeight: 600,
      backgroundColor: "rgba(0,0,1,0.2)",
      borderBottom: "1px solid rgba(0,0,1,0.2)", 
      borderRight: "2px solid rgba(0,0,1,0.2)",
    },
    columnHeaderCell: {
      fontWeight: 600,
      borderRight: "1px solid rgba(0,0,1,0.3)"
    },
  }),
);

export default function TableFromJson({jsonData}) {

    const [rows,setRows] = useState([]);
    const [cols,setCols] = useState([]);
    const [total,setTotal] = useState();
    const [data,setData] = useState();
    const classes = useStyles();

  useEffect(() => {
    JSON.stringify(jsonData);
    const usersData = JSON.parse(jsonData);
    // * Calculate rows
    const jobs = new Set(usersData.map(user => user.job));
    const rowHeadings = [...jobs];
    setRows(rowHeadings);

    // * Calculate columns
    const colHeadings = usersData.map(user => user.name);
    const ids = usersData.map(user => user.id);
    setCols(["Jobs/Name",...colHeadings,"Total"]);

    // * Calculate table data for each cell and total column.
    var mappedData={};
    var rowsTotal={};
    for(var i=0;i<rowHeadings.length;i++){
        mappedData[rowHeadings[i]] = {};
        for(var j=0;j<ids.length;j++){
            mappedData[rowHeadings[i]][ids[j]] = 0;
            rowsTotal[rowHeadings[i]] = 0;
        }
    }

    for(var i=0;i<usersData.length;i++){
        mappedData[usersData[i].job][usersData[i].id] = usersData[i].target;
        rowsTotal[usersData[i].job] += usersData[i].target;
    }
    setTotal(rowsTotal);
    setData(mappedData);
  },[]);



  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: 650 }} aria-label="simple table">
        <TableHead className={classes.columnHeader}
        >
          <TableRow >
            {cols.map(col => <TableCell className={classes.columnHeaderCell}>{col}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {
          rows.map((row,index) => (
            <TableRow
              key={row}
              sx={{'&:last-child td, &:last-child th': { border: 0 } }}
            >
             <TableCell component="th" scope="row" 
              className={classes.rowHeaderCell}
              >
                {row}
              </TableCell>
            {
              Object.values(data[row]).map(val => 
                <TableCell align="right" style={{border: "1px solid rgba(0,0,1,0.2)"}}>
                  {val}
                </TableCell>
              )
            }
            <TableCell align="right" style={{border: "1px solid rgba(0,0,1,0.2)"}}>
              {total[row]}
            </TableCell>
            </TableRow>
          ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
