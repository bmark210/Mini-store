import React from "react";
import Drawer from "./Drawer";
import "../index.scss";

import { NavLink } from "react-router-dom";
import Header from "./Header";
function Navbar({
  onClickOpen,
  onClickOut,
  selectedCards,
  setSelectedCards,
  open,
}) {
  return (
    <>
      <Header onClickOpen={onClickOpen} />
      <div style={{ display: open ? "block" : "none" }} className="overlay">
        <Drawer
          onClickOut={onClickOut}
          selectedCards={selectedCards}
          setSelectedCards={setSelectedCards}
          open={open}
        />
      </div>
      <NavLink to="/markspage"></NavLink>
    </>
  );
}

export default Navbar;
