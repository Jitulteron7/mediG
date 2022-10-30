import Table from "react-bootstrap/Table";
import { useLocation, useNavigate } from "react-router-dom";
function TableDiv() {
  const navigation = useNavigate();
  const state = useLocation();
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Dr Name</th>
          <th>Specialization</th>
          <th>Degree</th>
          <th>Working hour</th>
          <th>Phone No</th>
          <th>Address</th>
          <th>Patients under</th>
          <th>Schedules</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Dr Mark Dev</td>
          <td>Surgery</td>
          <td>Dr of GMCH</td>
          <td>6hr/day</td>
          <td>99999999</td>
          <td>
            <button
              onClick={() => {
                navigation(`/dash/${state.pathname.split("/")[2]}/123`);
              }}
            >
              {" "}
              Check{" "}
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                navigation(`/dash/${state.pathname.split("/")[2]}/123`);
              }}
            >
              {" "}
              Check{" "}
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                navigation(
                  `/dash/${state.pathname.split("/")[2]}/schedular/123`
                );
              }}
            >
              {" "}
              Check{" "}
            </button>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Dr Mark Dev</td>
          <td>Surgery</td>
          <td>Dr of GMCH</td>
          <td>6hr/day</td>
          <td>99999999</td>
          <td>
            <button
              onClick={() => {
                navigation(`/dash/${state.pathname.split("/")[2]}/123`);
              }}
            >
              {" "}
              Check{" "}
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                navigation(`/dash/${state.pathname.split("/")[2]}/123`);
              }}
            >
              {" "}
              Check{" "}
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                navigation(
                  `/dash/${state.pathname.split("/")[2]}/schedular/123`
                );
              }}
            >
              {" "}
              Check{" "}
            </button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableDiv;
