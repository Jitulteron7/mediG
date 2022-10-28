import React from "react";

import DetailsSec from "./CommonPage/secondPage";

import CumDetails from "./CumDetails";
import Tools from "./Tools";
import Calender from "./calender";
import { Route, Routes } from "react-router-dom";

const CustomerRouter = () => {
  return (
    <div>
      <DetailsSec />
      {/* <CumDetails /> */}

      <Routes>
        <Route eaxct path="customer/prescriptionDetails/details" element={<CumDetails />} />

        <Route
          path="customer/prescriptionDetails/tools"
          element={<Tools/>}
        />

        <Route
          path="customer/prescriptionDetails/calender"
          element={<Calender />}
        />
      </Routes>
    </div>
  );
};

export default CustomerRouter;
