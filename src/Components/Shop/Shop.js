import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../State/Components/Index";
import { bindActionCreators } from "@reduxjs/toolkit";
import "./Shop.css"; // Import the CSS file

const Shop = () => {
  const dispatch = useDispatch();
  const { withdrawMoney, depositMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const balance = useSelector((state) => state.amount);

  return (
    <>
      <div className="container">
      <div className="row align-items-center">

        <h2>Deposit/Withdraw Money</h2>
        <div className="col-4 text-end">
          <button
            className="btn btn-primary me-3"
            onClick={() => {
              withdrawMoney(100);
            }}
          >
            -
          </button>
        </div>
        <div className="col-4">
          <div className="balance-box">Update Balance ({balance})</div>
        </div>
        <div className="col-4 text-start">
          <button
            className="btn btn-primary m-3"
            onClick={() => {
              depositMoney(100);
            }}
          >
            +
          </button>
        </div>
      </div>

      </div>
    </>
  );
};

export default Shop;
