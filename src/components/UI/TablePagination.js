/* eslint-disable quotes */
import React, { useState, useEffect } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const TablePagigation = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [displayedData, setDisplayedData] = useState([]);
  const [pageSize, setPageSize] = useState(2);

  const data = props.data;
  // const pageSize = props.pageSize
  const handleData = props.onDataReceived;

  // console.log("INSIDE PAGINATION");
  // console.log("Incoming pageination data: " + JSON.stringify(props.data));

  useEffect(() => {
    setTotalPages(Math.ceil(data.length / pageSize));
    setDisplayedData(
      data.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    );
    console.log("DISPLAYED DATA INSIDE USE EFFECT: " + displayedData);
  }, [data, currentPage, pageSize]);
  console.log("Pagination Displayed Data: " +JSON.stringify(displayedData))

  console.log("DISPLAYED DATA: " + displayedData);

  const handlePageChange_next = () => {
    console.log("Inside handlePageChange_next");
    setCurrentPage(currentPage + pageSize);
    const newData = displayedData; // your new data here
    console.log("new DATA: " + JSON.stringify(newData));
    handleData(newData); // call the callback function with the new data
  };

  const handlePageChange_prev = () => {
    console.log("Inside handlePageChange_prev");
    setCurrentPage(currentPage - pageSize);
    const newData = displayedData; // your new data here

    handleData(newData); // call the callback function with the new data
  };

  const handleChange = (event) => {
    setPageSize(event.target.value);
}
  console.log(pageSize)

  return (
    <div className="p-4 text-md flex content-center border-b-1 justify-between bg-white">
      <div>
        <label>Rows per page: </label>
        <select value={pageSize} onChange={handleChange}>
          <option>5</option>
          <option>10</option>
          <option>25</option>
        </select>
      </div>
      <div className="inline-flex ">
        <div>
          {currentPage} to {pageSize} of {totalPages}
        </div>
        <button onClick={handlePageChange_prev} className="px-4 text-red-400">
          <GrFormPrevious />
        </button>
        <button onClick={handlePageChange_next} className="px-4 text-red-400">
          <GrFormNext />
        </button>
      </div>
    </div>
  );
};

export default TablePagigation;