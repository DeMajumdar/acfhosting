import React, { useState } from "react";
import Header from "../components/Header";
import TablePagination from "../components/UI/TablePagination";
import { AiOutlineImport, AiOutlineExport } from "react-icons/ai";
import FileUpload from "../components/UI/FileUpload";
import LoadingSpinner from "../components/LoadingSpinner";
import Navbar from "../components/Navbar";
import { useStateContext } from "../contexts/ContextProvider";
import FileExport from "../components/UI/FileExport";
import Button from "../components/UI/Button/Button";


const URL = "http://20.193.146.8:8080/api/getallbatches";

const TransactionMaster = () => {
  const { setTitle , setCategory } = useStateContext();
  const [data, setData] = React.useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [displayedData, setDisplayedData] = useState([]);
  const [showExport, setShowExport] = useState(false);

  setTitle('/Transaction Master')
  setCategory('Data')

  // React.useEffect(() => {
  // },[displayedData])

  // var pageSize = 5;

  // this.deleteProducts = this.deleteProducts.bind(this);

  const handleClick = () => {
    setShowPopup(true);
  };

  const exportClick = () =>{
    setShowExport(true);
  };

  function handleTableDataFromMyComponent(data) {
    console.log("Received tabledata from MyComponent: "+ data); 
    setDisplayedData(data);
    console.log("Displayed data:"+displayedData);
    // Do something with the data here
  }

  function handleRawDataFromMyComponent(data) {
    console.log("Received data from MyComponent:", JSON.stringify(data));
    setData(data);
    // Do something with the data here
  }

  // const handleDelete = (index) =>{
  //     const d = [...data];
  //     d.splice(index,1);
  //     setData(d);
  // };

  function closePopup() {
    setShowPopup(false);
    setShowExport(false);
  }

  console.log("TYPE OF DATA: " + typeof data);
  console.log("STATE DATA: " + JSON.stringify(data));

  React.useEffect(() => {
    fetch(URL, {
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
    console.log("DATA PRINT : " + JSON.stringify(data));
  }, []);
  // const exportData= JSON.stringify(data);
  // console.log("DISPLAYED DATA:", exportData);
  console.log("RECORD DATA:",data);
  
  return (
    <>
      {showPopup && (
        <FileUpload
          onDataReceived={handleRawDataFromMyComponent}
          onCloseRecieved={closePopup}
        />
      )}
      {showExport && (
        <FileExport
          data={data}
          onCloseRecieved={closePopup}
        />
      )}
      <div className="m-2 rounded-lg">
        <div className="bg-white mt-3 flex justify-between ">
          <div>
            <input placeholder="Search" className="w-52 h-8" />
          </div>
          <div className=" flex align-baseline m-4">
          <Button className="" onClick={handleClick}>
              {/* <p className="text-2xl">
                <AiOutlineImport />
              </p> */}
              Import
            </Button>
            <Button className="" onClick={exportClick}>
              {/* <ExportIcon /> */}
              Export
            </Button>
            {/* <button className="m-2">
              <p className="text-2xl">
                <BsFilterRight />
              </p>
            </button> */}
          </div>
        </div>
        <div class="overflow-hidden bg-white shadow-md">
          <table class=" min-h-[70vh] w-full border-collapse text-left text-sm text-gray-500">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Batch ID
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Current Location
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Route
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Actual Path
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Sold Status
                </th>
                <th
                  scope="col"
                  class="px-6 py-4 font-medium text-gray-900"
                ></th>
              </tr>
            </thead>
            {data != "" ? (
              <tbody class="divide-y divide-gray-100 border-t border-gray-100">
                {data.map((transaction,index) => (
                  <tr class="hover:bg-gray-50" key={index}>
                    <td class="px-6 py-2">{transaction.Record.batchId}</td>
                    <td class="px-6 py-2">{transaction.Record.currentLocation}</td>
                    <td class="px-6 py-2">{transaction.Record.route}</td>
                    <td class="px-6 py-2">{transaction.Record.actualPath}</td>
                    <td class="px-6 py-2">{transaction.Record.soldStatus.toString()}</td>
                    <td class="px-6 py-2">
                      {/* <div class="flex justify-end gap-4">
                        <button x-data="{ tooltip: 'Delete' }">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="red"
                            class="h-6 w-6"
                            x-tooltip="tooltip"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                        <button x-data="{ tooltip: 'Edite' }">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="green"
                            class="h-6 w-6"
                            x-tooltip="tooltip"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                            />
                          </svg>
                        </button>
                      </div> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <div className="text-lg"><LoadingSpinner /></div>
            )}
          </table>
          <TablePagination
            data={data}
            // pageSize={pageSize}
            onDataReceived={handleTableDataFromMyComponent}
          />
        </div>
      </div>
    </>
  );
};

export default TransactionMaster;






