import * as React from "react";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";

import "./Sidenav.css";
import { width } from "@mui/system";
export default function Sidenav() {
  const[width,setWidth]=React.useState(window.innerWidth)
  const [state, setState] = React.useState({
    left: true
  });
  console.log(state)

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
    <div className="sidenav">
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

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor} style={{ background: "transparent" }}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
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
  );
}
