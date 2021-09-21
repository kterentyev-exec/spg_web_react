import React from "react";
import { useHistory } from "react-router-dom";
import { useTable, useGlobalFilter } from "react-table";
// import Tr from "./../TableTdComponent/tableTdComponent";
import { GlobalFilter } from "./GlobalFilter";
import "./tableData.scss";
import data from "./tableData/data";
export const TableData = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Loan Name",
        accessor: "loan_name",
      },
      {
        Header: "Loan Amount",
        accessor: "loan_amount",
      },
      {
        Header: "Relationship",
        accessor: "relationship",
      },
      {
        Header: "Product Line",
        accessor: "product_line",
      },
      {
        Header: "Product Type",
        accessor: "product_type",
      },
      {
        Header: "Product",
        accessor: "product",
      },
      {
        Header: "Project close date",
        accessor: "date",
      },
    ],
    []
  );


  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, setGlobalFilter } =
    useTable({
      columns,
      data
    }, useGlobalFilter);

    const {globalFilter} = state;
    const history = useHistory();
    const handleRowClick = (row) => {
      // history.push(`/use-cases/${row.original.id}`);
      history.push(`/loan`);
    }
  return (
    <>
    <GlobalFilter filter ={globalFilter} setFilter={setGlobalFilter}/>
      <table {...getTableProps()} className="dashboardTable">
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
            console.log(`row`, row);
            return (
              <tr {...row.getRowProps()} onClick={()=> handleRowClick(row)}>
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
    </>
  );
};
export default TableData;
