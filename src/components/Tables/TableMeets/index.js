import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
function TableDiv() {

    const navigation = useNavigate();
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>DR. Name</th>
                    <th>Patient Name</th>
                    <th>Request Type</th>
                    <th>Phone No. of Patients</th>
                    <th>Phone No. Doctor</th>
                    <th>Address</th>
                    <th>Patient Report</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Rocky</td>
                    <td>John</td>
                    <td>Fever</td>
                    <td>color green</td>
                    <td>9859928929</td>
                    <td>delhi, india</td>
                    <td><button> Check </button></td>


                </tr>
                <tr>
                    <td>2</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>heart attack</td>
                    <td>color yellow</td>
                    <td>985990339</td>
                    <td>mumbai , india</td>
                    <td><button onClick={() => { navigation("/dash/hospital/123") }}> Check </button></td>

                </tr>
                <tr>
                    <td>3</td>
                    <td>Elon</td>
                    <td>Bezus</td>
                    <td>Kidney stone</td>
                    <td>color red</td>
                    <td>102429303</td>
                    <td>Kolkatta, india</td>
                    <td><button> Check </button></td>
                </tr>
            </tbody>
        </Table>
    );
}

export default TableDiv;