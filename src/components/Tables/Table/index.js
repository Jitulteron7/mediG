import Table from 'react-bootstrap/Table';
import { useLocation, useNavigate } from 'react-router-dom';
function TableDiv() {

    const navigation = useNavigate();
    const state = useLocation();
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Desiase</th>
                    <th>Healt Status</th>
                    <th>Phone no.</th>
                    <th>Address</th>
                    <th>Admitted</th>
                    <th>Released</th>
                    <th>Docter assigned</th>
                    <th>Check condition</th>
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
                    <td>1/2/22</td>
                    <td>2/2/22</td>
                    <td>Dr Test</td>
                    <td><button onClick={() => { navigation(`/dash/${state.pathname.split("/")[2]}/123`) }}> Check </button></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Fever</td>
                    <td>color green</td>
                    <td>99999999</td>
                    <td>@mdo</td>
                    <td>1/2/22</td>
                    <td>2/2/22</td>
                    <td>Dr Test</td>
                    <td><button onClick={() => { navigation(`/dash/${state.pathname.split("/")[2]}/123`) }}> Check </button></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Fever</td>
                    <td>color green</td>
                    <td>99999999</td>
                    <td>@mdo</td>
                    <td>1/2/22</td>
                    <td>2/2/22</td>
                    <td>Dr Test</td>
                    <td><button onClick={() => { navigation(`/dash/${state.pathname.split("/")[2]}/123`) }}> Check </button></td>
                </tr>
            </tbody>
        </Table>
    );
}

export default TableDiv;