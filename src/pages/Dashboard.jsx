// import React, { useState } from "react";

import { NavLink } from 'react-router-dom';
// import { AiOutlineCloseCircle } from "react-icons/ai";
// import Header from "../components/Header";
import { earningData } from '../data/dummy';
import { quickLinks } from '../data/link';

// import CreateBatchForm from "../components/forms/CreateBatchForm";
import { useStateContext } from '../contexts/ContextProvider';
import Map from '../components/Map';
import PieChart from '../components/charts/PieChart';

export const pieChartData = [
  { value: '45%', color: 'green' },
  { value: '25%', color: 'red' },
  { value: '15%', color: 'blue' },
  { value: '10%', color: 'gray' },
];

const quickViews = [
  {
    name: 'Total product dispatched by Manufacturer',
    count: '456',
  },
  {
    name: 'Total product dispatched by Warehouse',
    count: '645',
  },
  {
    name: 'Total product dispatched by Distributor',
    count: '457',
  },
  {
    name: 'Total product sold by retailer',
    count: '255',
  },
];

const Dashboard = () => {
  const { setTitle, setCategory } = useStateContext();
  setTitle('/Dashboard');
  setCategory('Page');

  return (
    <div className="flex flex-col lg:flex-row lg:flex-wrap">
   <div className="flex flex-col md:flex-row">
  <div className="w-full lg:w-2/5 p-2 flex-grow-0 flex-shrink-0">
    <div className="flex flex-col md:flex-row ">
      {earningData.map((item) => (
        <div
          key={item.title}
          className="bg-white h-36 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-1/2 lg:w-44 p-2 rounded-lg shadow-md mb-4 md:mr-2"
        >
          <button
            type="button"
            style={{ color: item.iconColor, backgroundColor: item.iconBg }}
            className="text-5xl opacity-0.9 rounded-full p-2 hover:drop-shadow-sm"
          >
            {item.icon}
          </button>
          <p className="mt-1">
            <span className="text-lg font-semibold">{item.amount}</span>
            <span className={`text-sm text-${item.pcColor} ml-2`}>
              {item.percentage}
            </span>
          </p>
          <p className="text-md text-blue mt-1">{item.title}</p>
        </div>
      ))}
    </div>

    <div className="bg-white rounded-lg mt-4">
      <div className="bg-sidebar-bg rounded-t-lg p-4 text-white font-semibold text-xl">
        Quick Action
      </div>
      {quickLinks.map((link, index) => (
        <NavLink
          to={link.path}
          key={index}
          className="flex items-center gap-1 pl-2 pt-1.5 pb-1.5 rounded-lg text-md font-semibold text-black dark:text-gray-200 hover:text-[#7b8cb8] m-2"
        >
          {link.icon}
          <span className="pl-6">{link.name}</span>
        </NavLink>
      ))}
    </div>
  </div>
</div>

      <div className="w-full lg:w-3/5 p-2">
        <div className="bg-white rounded-lg">
          <h1 className="p-3 text-2xl font-extrabold rounded-t-l text-[#0B2853]">
            Chain Locations
          </h1>
          <div
            style={{
              height: '400px',
              width: '100%',
              borderTop: 'solid',
            }}
          >
            <Map />
          </div>
        </div>
        <div className="bg-white rounded-lg row-span-3 flex-1 md:flex-auto lg:flex-initial">
          <h1 className="p-3 text-2xl font-extrabold rounded-t-l text-[#0B2853]">
            Quick View
          </h1>
          <div style={{ borderTop: 'solid 4px #20232A' }}>
            {quickViews.map((item, index) => (
              <div
                className="flex flex-col md:flex-row items-center gap-1 p-1 rounded-lg text-xs text-gray-500 dark:text-gray-200 m-2"
                key={index}
              >
                <p>{item.name}</p>
                <h1 className="text-lg font-bold text-[#0B2853] ml-4">
                  {item.count}
                </h1>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-lg row-span-2 flex-1 md:flex-auto lg:flex-initial">
          <div>
            <h1 className="p-3 text-2xl font-extrabold rounded-t-l text-[#0B2853]">
              Network Chart
            </h1>
          </div>
          <div>
            <PieChart />
          </div>
        </div>
        {/* <div className="bg-white rounded-lg col-span-4 row-span-3">9</div>
  <div className="bg-white rounded-lg col-span-1 row-span-3">10</div> */}
        {/* <div class="bg-white rounded-lg row-span-2">9</div> */}
      </div>
    </div>
  );
};
export default Dashboard;
