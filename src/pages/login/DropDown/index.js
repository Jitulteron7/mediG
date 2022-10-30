import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function BasicButtonExample() {
    return (
        <DropdownButton id="dropdown-basic-button" title="Login As">
            <Dropdown.Item href="#/action-1">Hospital</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Doctor</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Patient</Dropdown.Item>
        </DropdownButton>
    );
}

export default BasicButtonExample;