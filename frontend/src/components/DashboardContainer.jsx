import React from "react";
// import PromptInput from "./PromptInput";
import GeneratedCode from "./GeneratedCode";
import SQLQueryDisplay from "./SQLQueryDisplay";
import ChartDisplay from "./ChartDisplay";

const DashboardContainer = () => {
  return (
    <div className="dashboard">
      {/* <PromptInput /> */}
      <GeneratedCode />
      <SQLQueryDisplay />
      <ChartDisplay />
    </div>
  );
};

export default DashboardContainer;
