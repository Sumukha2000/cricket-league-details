import React from "react";
import Header from "../components/Header";

function Stats() {
  return (
    <div>
      <Header />
      <div className="mostruns">
        <h1>Top 3 batsmen </h1>
        <table border={"2px"}>
          <tr>
            <th>Batsman</th>
            <th>Runs</th>
            <th>Matches</th>
            <th>Team</th>
          </tr>

          <tr>
            <td>Sumukha</td>
            <td>34</td>
            <td>2</td>
            <td>CARIn</td>
          </tr>
        </table>
      </div>
      <div className="mostwickets">
        <h1>Top 3 bowlers</h1>
      <table border={"2px"}>
          <tr>
            <th>Bowlers</th>
            <th>Wickets</th>
            <th>Matches</th>
            <th>Team</th>
          </tr>

          <tr>
            <td>Aryan</td>
            <td>34</td>
            <td>3</td>
            <td>CARIn</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Stats;
