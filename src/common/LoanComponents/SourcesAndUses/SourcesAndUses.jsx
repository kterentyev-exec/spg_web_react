import React from 'react'
import { useTable } from "react-table";
import './SourcesAndUses.scss'
import data from './mockData.js'


export const SourcesAndUses = () => {
    const columns = React.useMemo(
        () => [
          {
            Header: "Use",
            accessor: "use",
          },
          {
            Header: "Age",
            accessor: "equity",
          },
          {
            Header: "Mezz",
            accessor: "mezz",
          },
          {
            Header: "1st Lien",
            accessor: "firstLien",
          },
          {
            Header: "Total",
            accessor: "total",
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
        {console.log(`111`, 111)}
        <div className="widget_label">*Sources and Uses*</div>
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
