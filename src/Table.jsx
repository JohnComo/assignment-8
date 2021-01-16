import React from 'react'
import TableRow from './TableRow';

function renderRows (numOfRows, numOfCols, newColor) {
    let totalRows = []
    for(let i = 0; i < numOfRows; i++) {
        totalRows.push(<TableRow cols={numOfCols} color={newColor}/>)
    }
    return totalRows;
}

function Table(props) {
    console.log(props);
    let numOfRows = props.numOfRows;
    let numOfCols = props.numOfCols;
    let newColor = props.color;
    return (
        <table className="table">
            {renderRows(numOfRows, numOfCols, newColor)}
        </table>
    )
}

export default Table;