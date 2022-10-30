import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from "react";
function TableDiv(props) {
    const { schedules } = props;
    const navigation = useNavigate();
    const [rows, setRows] = useState([]);

    React.useEffect(() => {
        if (schedules.length !== 0) {
            setRows(schedules)
        }
        else if (localStorage.getItem("schedules")) {
            setRows(JSON.parse(localStorage.getItem("schedules")));
        }
    }, [])


    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Type</th>
                    <th>Schedule Name</th>
                    <th>Description</th>
                    <th>Instruction</th>
                    <th>Link If any</th>
                    <th>Time</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Meet Link</th>
                </tr>
            </thead>
            <tbody >
                {rows.length !== 0 ? rows.map((data, idx) => {
                    return (
                        <tr>
                            <td>{idx + 1}</td>
                            <td>{data?.repeat ? "Repeat" : "Non repeat"}</td>
                            <td>{data?.schedule_name}</td>
                            <td>{data?.description}</td>
                            <td>{data?.instruction}</td>
                            <td><a to={data?.link} target={"_blank"}>{data?.link}</a></td>
                            <td>{data?.time}</td>
                            <td>{data?.date_from}</td>
                            <td>{data?.date_to}</td>
                            <td><button> {data?.google_link} </button></td>
                        </tr>)
                }) : <h3 style={{ color: "red" }}>Empty</h3>}

            </tbody>
        </Table>
    );
}

/**
 * <tr>
                    <td>1</td>
                    <td>Repeat</td>
                    <td>Mark Otto Otto</td>
                    <td>color green color green</td>
                    <td>color green color green color green color green</td>
                    <td><a to="https://www.youtube.com/watch?v=A_BTlYvIWro" target={"_blank"}>https://www.youtube.com/watch?v=A_BTlYvIWro</a></td>
                    <td>1/2/22</td>
                    <td>2/2/22</td>
                    <td>Dr @mdo</td>
                    <td><button> Check </button></td>
                </tr>
                
 */
export default TableDiv;