import React, { useEffect, useState } from "react";
import { useTable, useSortBy, useFilters, useGlobalFilter ,useAsyncDebounce} from "react-table";
import Axios from 'axios';
import DataModal from './Datamodal'

function GlobalFilter({ preGlobalFilteredRows, globalFilter ,setGlobalFilter}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
const onChange = useAsyncDebounce(value => {
setGlobalFilter(value || undefined)
}, 200)

  return (
    <span>
      Search:{" "}
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        style={{
          fontSize: "1.1rem",
          border: "0"
        }}
      />
    </span>
  );
}

function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter }
}) {
  const count = preFilteredRows.length;

  return (
    <input
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      placeholder={`Search ${count} records...`}
    />
  );
}

function Example({data,modalData,setModalData,handleSubmit}) {
 
  // const data = React.useMemo(
  //   () => [
  //     {
  //       col1: "jaipur",
  //       col2: "27",
  //       col3: "rain",
  //       col4: "739",
  //       col5: "90"
  //     },
  //     {
  //       col1: "Vizag",
  //       col2: "30",
  //       col3: "rain",
  //       col4: "740",
  //       col5: "87"
  //     },
  //     {
  //       col1: "Lucknow",
  //       col2: "23",
  //       col3: "rain",
  //       col4: "743",
  //       col5: "77"
  //     },
  //     {
  //       col1: "Manipur",
  //       col2: "34",
  //       col3: "sunny",
  //       col4: "738",
  //       col5: "40"
  //     },
  //     {
  //       col1: "Wayanad",
  //       col2: "25",
  //       col3: "heavy rain",
  //       col4: "739",
  //       col5: "88"
  //     }
  //   ],
  //   []
  // );

  const columns = React.useMemo(
    () => [
      {
        Header: "City",
        accessor: "col1"
      },
      {
        Header: "Temperature",
        accessor: "col2"
      },
      {
        Header: "Weather Forecast",
        accessor: "col3"
      },
      {
        Header: "Pressure",
        accessor: "col4"
      },
      {
        Header: "Humidity",
        accessor: "col5"
      }
    ],
    []
  );

  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter
  } =  useTable(
    {
      columns,
      data,
      defaultColumn
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  return (
    <div>
<DataModal modalData={modalData} setModalData={setModalData} handleSubmit={handleSubmit}/>
      <table {...getTableProps()} style={{ border: "solid 1px black" }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers?.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{
                    color: "black"
                  }}
                >
                  {column.render("Header")}
                  <span>
                     🔽  🔼
                  </span>
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
          <tr>
            <th
              colSpan={visibleColumns.length}
              style={{
                textAlign: "left"
              }}
            >
              <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
            </th>
          </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        border: "solid 1px gray"
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
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

export default Example;
