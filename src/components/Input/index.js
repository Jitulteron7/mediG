import React from "react";
import classes from "./input.module.css";
import { Form, InputGroup } from "react-bootstrap";
const Input = (props) => {
    const { type, placeholder, name, width, height, handleChange ,value} = props;
    return (
        <>
            {
                type == "checkbox" ?
                    <>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label={name}
                            onChange={handleChange}
                            name={name}
                        />
                    </> :

                    type === "desc" ?
                        <div className={classes.container}>
                            <Form.Label>{name}</Form.Label>
                            <Form.Control
                             onChange={handleChange}
                             name={name}
                             as="textarea" rows={5} />
                        </div>
                        :
                        <div className={classes.container}>
                            <Form.Label htmlFor="inputPassword5">{name}</Form.Label>
                            <Form.Control
                                type={type}
                                style={{ width: width, height: height }}
                                id="inputPassword5"
                                onChange={handleChange}
                                name={name}
                                value={value}
                                aria-describedby={"passwordHelpBlock"}
                                placeholder={placeholder}
                            />
                        </div>


            }

        </>)
}

export default Input;