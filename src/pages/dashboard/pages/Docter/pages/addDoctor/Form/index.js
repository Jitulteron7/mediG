import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Input from "../../../../../../../components/Input";
import classes from "./form.module.css";
import { useSelector, useDispatch } from "react-redux"
import { submit_schedule } from "../../../../../../../redux/actions"

const DoctorForm = (props) => {
    const { schedules } = props;
    const dispatch = useDispatch();

    const [schedule_input, setSchedule_input] = useState({
        repeat: false,
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
        console.log(schedule_input.repeat)
        
        if (event.target.name === "repeat") {
            let val;
            if(schedule_input.repeat===false){
                val=true;
            }else {
                val=false;
            }
            
            setSchedule_input({
                ...schedule_input,
                [event.target.name]: val
            });
        } else {
            setSchedule_input({
                ...schedule_input,
                [event.target.name]: event.target.value
            });
        }

    };

    let links =[
        'https://meet.google.com/osv-puie-wzc',
        'https://meet.google.com/uir-rpht-uxi',
        'https://meet.google.com/ihg-etdi-gsm',
        'https://meet.google.com/yda-pkje-sqh'
    ]
    const  genLink = ()=>{        
        setSchedule_input({
            ...schedule_input,
            google_link: links[Math.floor(Math.random()*links.length)]
        });
    }
    return (
        <div className={classes.container}>
            <div className={classes.input_container}>
            
                <div className={classes.input}>
                    <Input value={schedule_input.schedule_name} handleChange={handleChange} type={"text"} placeholder={"Dr Name"} name={"dr_name"} />
                </div>
                <div className={classes.input}>
                    <Input value={schedule_input.description} handleChange={handleChange} type={"text"} placeholder={""} name={"specialization"}/>
                </div>
                <div className={classes.input}>
                    <Input value={schedule_input.description} handleChange={handleChange} type={"text"} placeholder={""} name={"Degree"} />
                </div>
                <div className={classes.input}>
                    <Input value={schedule_input.instruction} handleChange={handleChange} type={"number"} placeholder={""} name={"Wordking hour"} />
                </div>
                <div className={classes.input}>
                    <Input value={schedule_input.link} handleChange={handleChange} type={"number"} placeholder={"Phone No"} name={"Phone_No"} />
                </div>
                <div className={classes.input}>
                    <Input value={schedule_input.time} handleChange={handleChange} type={"text"} placeholder={"Address"} name={"Address"} />
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

export default DoctorForm;