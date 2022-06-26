import React from "react";
import { useNavigate } from "react-router-dom";

const HostelAllotment = () => {
  const nav = useNavigate();
  const hostel = () => {
    nav("Hostel");
  };

  const nav1 = useNavigate();
  const srujana = () => {
    nav("Srujana");
  };

  return (
    <div>
      <div class="centered">
        <h1> Hostel Allotment</h1>
      </div>
      <br />
      <font size="+3">AC Hostels:</font>
      <button class="ui blue button" onClick={hostel}>
        Green Meadows
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button class="ui blue button" onClick={hostel}>
        Srujana
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button class="ui blue button" onClick={hostel}>
        Sadhana
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button class="ui blue button" onClick={hostel}>
        Medha
      </button>
      <br />
      <font size="+3">Non-AC Hostels:</font>
      <button class="ui blue button" onClick={hostel}>
        Rajeshwari{" "}
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button class="ui blue button" onClick={srujana}>
        Saraswathi
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button class="ui blue button" onClick={srujana}>
        Narmada
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button class="ui blue button" onClick={srujana}>
        Vaidehi
      </button>
      <br />
      <div className="form">
        <font size="+3">Instructions:</font>

        <ul>
          <li>Both AC and Non-AC hostels are present.</li>
          <li>AC hostels costs 120000 per year</li>
          <li>Non-AC hostels costs 79000 per year for attached washrooms</li>
          <li>Non-AC hostels costs 79000 per year for common washrooms</li>
        </ul>
      </div>
    </div>
  );
};

export default HostelAllotment;
