import React from "react";
import { CSVLink } from "react-csv";
import { DownloadTableExcel } from "react-export-table-to-excel";
import {AiOutlineClose} from "react-icons/ai";
import Button from "./Button/Button";




const FileExport = (props) =>{
    // const [selectedOption, setSelectedOption] = useState(null);

    const data = props.data;
    const onClick = props.onCloseRecieved;
   
   
    const csvData = data.map(row => Object.values(row).join(',')).join('\n');
    // Convert the data to a file
    console.log("csvData"+csvData);
    


   
    return(
        <div className="bg-white shadow-lg rounded-lg w-1/2 h-2/3 fixed top-[20%] left-[25%] z-[5]">
            <button
            className="absolute top-0 right-0 p-4 text-xl hover:text-red-600 "
            onClick={onClick}
            >
                <AiOutlineClose />
            </button>
            <div className="flex flex-col justify-center m-12">
                <div className="flex justify-between m-2">
                   <CSVLink data={data}><Button>CSV</Button></CSVLink>
                   <DownloadTableExcel
                        filename="data table"
                        sheet="data"
                        currentTableRef={data.current}
                        ><Button>Excel</Button>
                   </DownloadTableExcel>
                </div>
                {/* <div className="flex justify-center m-₹">
                    <Button>Upload</Button>
                </div> */}
            </div>
        </div>

    )

};

export default FileExport ;