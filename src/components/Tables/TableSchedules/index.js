import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from 'react-router-dom';
function TableDiv() {

    const navigation = useNavigate();
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
            <tbody>
                <tr>
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
                <tr>
                    <td>2</td>
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
                <tr>
                    <td>3</td>
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
            </tbody>
        </Table>
    );
}

export default TableDiv;