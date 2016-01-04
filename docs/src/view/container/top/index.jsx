import React from "react";
import {GridView} from "react-gridview";

import "./index.css";

const Top = React.createClass({
  render: function() {
    return (
      <div>
        <div className="subhead">
          What is this?
        </div>
        <div className="report">
          This component provides a spreadsheet interface to your web application. About this.
        </div>

        <GridView className="gridview-sample" />

        <div className="subhead">
          Apology
        </div>
        <div className="report">
          I'm afraid my expressions may be rude or hard to read, because I'm not so good at English. But please be patient. I plan on improving this document.
        </div>
      </div>
    );
  }
});

export{
  Top as default
};