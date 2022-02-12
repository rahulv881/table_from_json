import React , {useEffect, useState} from 'react'
import { Paper, TableContainer,TableRow, TableHead,TableCell ,TableBody,Table } from '@material-ui/core';

export default function TableFromJson({jsonData}) {

    const [rows,setRows] = useState([]);
    const [cols,setCols] = useState([]);
    const [total,setTotal] = useState();
    const [data,setData] = useState();

  useEffect(() => {
    //   console.log("Inside UseEffect: "+jsonData);
      JSON.stringify(jsonData);
    //   console.log("jsonData: "+jsonData);
      const usersData = JSON.parse(jsonData);
    //   console.log("usersData: "+usersData);
      // * Calculate rows
      const rowsArr = usersData.map(user => user.job);
      setRows(rowsArr);
    //   console.log("rowsArr: "+rowsArr);

      // * Calculate columns
      const colsArr = usersData.map(user => user.name);

      const ids = usersData.map(user => user.id);
      setCols(["Jobs/Name",...rowsArr,"Total"]);
    //   console.log("colsArr: "+colsArr);

      // * Calculate table data for each cell and total column.
      var mappedData={};
      var rowsTotal={};
      for(var i=0;i<rowsArr.length;i++){
          mappedData[rowsArr[i]] = {};
          console.log("rowsArr[i].job: "+rowsArr[i]);
          for(var j=0;j<ids.length;j++){
              mappedData[rowsArr[i]][ids[j]] = 0;
              rowsTotal[rowsArr[i]] = 0;
          }
      }
    //   console.log("mappedData: "+JSON.stringify(mappedData));

      for(var i=0;i<usersData.length;i++){
          mappedData[usersData[i].job][usersData[i].id] = usersData[i].target;
          rowsTotal[usersData[i].job] += usersData[i].target;
      }
    // console.log("mappedData: "+mappedData);
    setTotal(rowsTotal);
    setData(mappedData);
  },[]);



  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{
        backgroundColor: "rgba(0,0,1,0.2)",
        borderBottom: "1px solid rgba(0,0,1,0.2)",
        boxShadow: "0px -1px 2px 2px black"
        }}
        >
          <TableRow style={{
        backgroundColor: "rgba(0,0,1,0.2)",
        borderRightColor: "2px solid rgba(0,0,1,0.2)",
        }}>
            {cols.map(col => <TableCell style={{fontWeight: 600}}>{col}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {
          rows.map((row,index) => (
            <TableRow
              key={row}
              sx={{
                   '&:last-child td, &:last-child th': { border: 0 }, 
                }}

            >
              <TableCell component="th" scope="row" 
              style={{backgroundColor: "rgba(0,0,1,0.2)",
              borderBottom: "1px solid rgba(0,0,1,0.2)", 
              borderRight: "2px solid rgba(0,0,1,0.2)",
            }}
              >
                {row}
              </TableCell>
            {Object.values(data[row]).map(val => <TableCell style={{border: "1px solid rgba(0,0,1,0.2)"}}>{val}</TableCell>)}
            <TableCell
            style={{border: "1px solid rgba(0,0,1,0.2)"}}
            >{total[row]}</TableCell>
            </TableRow>
          ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
