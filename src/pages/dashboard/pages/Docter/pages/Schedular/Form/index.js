import React from "react";
import { Button } from "react-bootstrap";
import Input from "../../../../../../../components/Input";
import classes from "./form.module.css";
const ScheduleForm = () => {
    return (
        <div className={classes.container}>
            <div className={classes.input_container}>
                <div className={classes.input}>
                    <Input type={"checkbox"} placeholder={"Schedule"} name={"Repeat"} />
                </div>
                <div className={classes.input}>
                    <Input type={"text"} placeholder={"Schedule Name"} name={"Schedule Name"} />
                </div>
                <div className={classes.input}>
                    <Input type={"desc"} placeholder={""} name={"Descriptions"} height={"200px"} />
                </div>
                <div className={classes.input}>
                    <Input type={"desc"} placeholder={""} name={"Instruction"} height={"200px"} />
                </div>
                <div className={classes.input}>
                    <Input type={"text"} placeholder={"Link"} name={"Link"} />
                </div>
                <div className={classes.input}>
                    <Input type={"time"} placeholder={"Time"} name={"Time"} />
                </div>
                <div className={classes.input}>
                    <Input type={"date"} placeholder={"From"} name={"From"} />
                </div>
                <div className={classes.input}>
                    <Input type={"date"} placeholder={"To"} name={"To"} />
                </div>
                <div className={classes.input}>
                    <Input type={"text"} placeholder={"Google Link"} name={"Google Link"} />
                </div>
                <div className={classes.input}>
                    <Button>Submit</Button>
                </div>
            </div>

        </div>)
}

export default ScheduleForm;