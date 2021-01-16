import React from 'react'
import TableCell from './TableCell'

function renderCols (numOfCols, newColor) {
    console.log(numOfCols)
    let totalCols = []
    for(let i=0; i < numOfCols; i++) {
        console.log("column added")
        totalCols.push(<TableCell color={newColor}/>)
    }
    return totalCols;
}

function TableRow(props) {
    let newColor = props.color;
    return (
        <tr className="row">
            {renderCols(props.cols, newColor)}
        </tr>
    ) 
}

export default TableRow;
