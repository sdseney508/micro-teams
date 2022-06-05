import React from "react";
import "./LoadingScreen.css";

function Loading() {
  return (
    <div className="spinner">
      <span>Loading...</span>
      <div className="halfSpinner"></div>
    </div>
  );
}

export default Loading;

/**
 * Lifted from https://dev.to/codebucks/create-3-different-types-of-loading-screens-in-react-part-3-2o51
 */
