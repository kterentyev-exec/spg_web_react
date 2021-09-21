import React from 'react'
import { useTable } from "react-table";
import './LoanInformation.scss'
import data from './mockData.js'


export const LoanInformation = () => {
    const columns = React.useMemo(
        () => [
          {
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "1st Lien",
            accessor: "firstLien",
          },
          {
            Header: "Mezz",
            accessor: "mezz",
          },
          {
            Header: "Equity",
            accessor: "equity",
          },
        ],
        []
      );
    
    
      const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({
          columns,
          data
        } );
    
      return (
        <div className="widget">
        <div className="widget_label">*Loan Information*</div>
          <table {...getTableProps()} className="sAndUtable">
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
}
