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
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Fever</td>
                    <td>color green</td>
                    <td>99999999</td>
                    <td>@mdo</td>
                    <td><button> Check </button></td>


                </tr>
                <tr>
                    <td>2</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Fever</td>
                    <td>color green</td>
                    <td>99999999</td>
                    <td>@mdo</td>
                    <td><button onClick={() => { navigation("/dash/hospital/123") }}> Check </button></td>

                </tr>
                <tr>
                    <td>3</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Fever</td>
                    <td>color green</td>
                    <td>99999999</td>
                    <td>@mdo</td>
                    <td><button> Check </button></td>
                </tr>
            </tbody>
        </Table>
    );
}

export default TableDiv;