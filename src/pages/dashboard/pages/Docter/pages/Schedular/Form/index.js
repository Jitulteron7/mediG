import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Input from "../../../../../../../components/Input";
import classes from "./form.module.css";
import { useSelector, useDispatch } from "react-redux"
import { submit_schedule } from "../../../../../../../redux/actions"

const ScheduleForm = (props) => {
    const { schedules } = props;
    const dispatch = useDispatch();

    const [schedule_input, setSchedule_input] = useState({
        schedule_name: "",
        description: "",
        instruction: "",
        link: "",
        time: "",
        date_from: "",
        date_to: "",
        google_link: ""
    });
    const handleChange = (event) => {
        console.log(event.target.value)
        setSchedule_input({
            ...schedule_input,
            [event.target.name]: event.target.value
        });
    };
    
    return (
        <div className={classes.container}>
            <div className={classes.input_container}>
                <div className={classes.input}>
                    {/* <Input onActive={} type={"checkbox"} placeholder={"Schedule"} name={"Repeat"} /> */}
                </div>
                <div className={classes.input}>
                    <Input value={schedule_input.schedule_name} handleChange={handleChange} type={"text"} placeholder={"Schedule Name"} name={"schedule_name"} />
                </div>
                <div className={classes.input}>
                    <Input value={schedule_input.description} handleChange={handleChange} type={"desc"} placeholder={""} name={"description"} height={"200px"} />
                </div>
                <div className={classes.input}>
                    <Input value={schedule_input.instruction} handleChange={handleChange} type={"desc"} placeholder={""} name={"instruction"} height={"200px"} />
                </div>
                <div className={classes.input}>
                    <Input value={schedule_input.link} handleChange={handleChange} type={"text"} placeholder={"Link"} name={"link"} />
                </div>
                <div className={classes.input}>
                    <Input value={schedule_input.time} handleChange={handleChange} type={"time"} placeholder={"Time"} name={"time"} />
                </div>
                <div className={classes.input}>
                    <Input value={schedule_input.date_from} handleChange={handleChange} type={"date"} placeholder={"From"} name={"date_from"} />
                </div>
                <div className={classes.input}>
                    <Input value={schedule_input.date_to} handleChange={handleChange} type={"date"} placeholder={"To"} name={"date_to"} />
                </div>
                <div className={classes.input}>
                    <Input value={schedule_input.google_link} handleChange={handleChange} type={"text"} placeholder={"Google Link"} name={"google_link"} />
                </div>
                <div className={classes.input}>
                    <Button onClick={(e) => {
                        e.preventDefault()
                        dispatch(submit_schedule(schedule_input, schedules))
                    }} >Submit</Button>
                </div>
            </div>

        </div>)
}

export default ScheduleForm;