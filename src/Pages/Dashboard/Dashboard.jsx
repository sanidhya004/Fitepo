import Sidenav from "../../Components/Sidenav/Sidenav";
import "./Dashboard.css";
import { SearchOutlined,AlignLeftOutlined  } from '@ant-design/icons';

import { Input } from 'antd';

import React, { useEffect, useState } from "react";
import UpperStat from "../../Components/UpperStat/UpperStat";
import MonthlyStat from "../../Components/MonthlyStat/MonthlyStat";
import Customer from "../../Components/CustomerStat/Customer";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";

import TableCont from "../../Components/Table/TableCont";
const { innerWidth: width, innerHeight: height } = window;

const Dashboard = () => {
    
  const [state, setState] = React.useState({
    left: false
  });
 

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div className="sidenav hidden">
      <div className="toggle">
        <div className="title">
          <p>Dashboard</p>
        </div>
        <div className="toggle_options bg">Dashboard</div>
        <div className="toggle_options">Product</div>
        <div className="toggle_options">Customer</div>
        <div className="toggle_options">Incomes</div>
        <div className="toggle_options">Promote</div>
        <div className="toggle_options">Help</div>
      </div>
      <div className="user_info">
        <div className="img_wrapper">
          <img src="https://media.istockphoto.com/id/1351147752/photo/studio-portrait-of-attractive-20-year-old-bearded-man.jpg?s=612x612&w=0&k=20&c=-twL1NKKad6S_EPrGSniewjh6776A0Ju27ExMh7v_kI=" />
        </div>
        <div className="name_wrapper">
          <p>Evano</p> <p className="helper_text">Product Manager</p>
        </div>
        <div className="button_wrapper"></div>
      </div>
    </div>
  );

  const[val,setVal]=useState(true)
  const handletoggle=()=>{
  
     var temp=!val
    
     setVal(temp)
  }
  useEffect(()=>{

  },[innerWidth])
  return (
    <div className="dashboard_container">
      
         <div>
         {["left"].map((anchor) => (
           <React.Fragment key={anchor} style={{ background: "transparent" }}>
            
             <SwipeableDrawer
               anchor={anchor}
               open={state[anchor]}
               onClose={toggleDrawer(anchor, false)}
               onOpen={toggleDrawer(anchor, true)}
               style={{ background: "transparent" }}
             >
               {list(anchor)}
             </SwipeableDrawer>
           </React.Fragment>
         ))}
       </div>
       
        <div className="sidenav visible">
          <div className="toggle">
            <div className="title">
              <p>Dashboard</p>
            </div>
            <div className="toggle_options bg">Dashboard</div>
            <div className="toggle_options">Product</div>
            <div className="toggle_options">Customer</div>
            <div className="toggle_options">Incomes</div>
            <div className="toggle_options">Promote</div>
            <div className="toggle_options">Help</div>
          </div>
          <div className="user_info">
            <div className="img_wrapper">
              <img src="https://media.istockphoto.com/id/1351147752/photo/studio-portrait-of-attractive-20-year-old-bearded-man.jpg?s=612x612&w=0&k=20&c=-twL1NKKad6S_EPrGSniewjh6776A0Ju27ExMh7v_kI=" />
            </div>
            <div className="name_wrapper">
              <p>Evano</p> <p className="helper_text">Product Manager</p>
            </div>
            <div className="button_wrapper"></div>
          </div>
        </div>
      
      <div className="main_content">
        <div className="main_content_wrapper">
          <div className="top_header">
            <h1 > <AlignLeftOutlined className="hidden" onClick={toggleDrawer("left", true)}/> Hello Sharukh</h1>
            {/* <button onClick={handletoggle}>wdw</button> */}
            <div className="search">
            <Input size="large" placeholder="Search" prefix={<SearchOutlined />} />
            </div>
         </div>
       
            <div className="upper_stat">
              <UpperStat/>
            </div>
            <div className="lower_stat">
            <MonthlyStat/> <Customer/>
            </div>
            <TableCont/>
            
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
