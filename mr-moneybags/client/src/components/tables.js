import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';

import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component

import "ag-grid-community/dist/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/dist/styles/ag-theme-alpine.css"; // Optional theme CSS

function StockTable() {
  const q_d = fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo`
  ).then((result) => result.json());

  console.log(q_d);

  const gridRef = useRef(); // Optional - for accessing Grid's API
  const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row
  const rowD = [
    { Stock: "IBM", Date: "2022-05-27", High: 121, Low: 100 },
    { Stock: "IBM", Date: "2022-05-28", High: 125, Low: 121 },
  ];

  // Stock: q_d["Meta Data"]["2. Symbol"],
  // Date: q_d["Meta Data"]["3. Last Refreshed"],
  // High: q_d["Time Series (Daily)"]["2022-05-27"]["2. high"],
  // Low: q_d["Time Series (Daily)"]["2022-05-27"]["3. low"],

  // console.log(rowD);
  // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([
    { field: "Stock", filter: true },
    { field: "Date", filter: true },
    { field: "High", filter: true },
    { field: "Low" },
  ]);

  // DefaultColDef sets props common to all Columns
  const defaultColDef = useMemo(() => ({
    sortable: true,
  }));

  // Example of consuming Grid Event
  const cellClickedListener = useCallback((event) => {
    console.log("cellClicked", event);
  }, []);

  // Example load data from sever
  useEffect(() => {
    fetch(
      "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo")
      .then((result) => result.json())
      .then((r) => {
        console.log(r);
        const valuesObject = r["Time Series (Daily)"];
        const values = [];
        Object.keys(valuesObject).forEach((key) => {
          values.push(valuesObject[key]);
        });
        console.log(values);
        const yrHigh = values.filter((val,i) => i < 10 ).reduce((acc, curr) => {
          return acc > curr["2. high"] ? parseFloat(acc) : parseFloat(curr["2. high"]);
        })
        const yrLow = values.filter((val,i) => i < 10 ).reduce((acc, curr) => {
          return acc < curr["3. low"] ? parseFloat(acc) : parseFloat(curr["3. low"]);
        })
        console.log(yrHigh);
        console.log(yrLow);
        // const currVal = values[0]
        // console.log(r["Time Series (Daily)"]);
        // setRowData(r)});
      })
    // setRowData(rowD)
  }, []);

  // Example using Grid's API
  const buttonListener = useCallback((e) => {
    gridRef.current.api.deselectAll();
  }, []);

  return (
    <div>
      {/* Example using Grid's API */}
      <button onClick={buttonListener}>Push Me</button>

      {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
      <div className="ag-theme-alpine" style={{ width: 500, height: 500 }}>
        <AgGridReact
          ref={gridRef} // Ref for accessing Grid's API
          rowData={rowData} // Row Data for Rows
          columnDefs={columnDefs} // Column Defs for Columns
          defaultColDef={defaultColDef} // Default Column Properties
          animateRows={true} // Optional - set to 'true' to have rows animate when sorted
          rowSelection="multiple" // Options - allows click selection of rows
          onCellClicked={cellClickedListener} // Optional - registering for Grid Event
        />
      </div>
    </div>
  );
}

export default StockTable;
