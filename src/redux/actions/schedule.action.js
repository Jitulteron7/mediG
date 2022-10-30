import { scheduleConstant } from "../../redux/const";
import { Toastify } from "../../App";

export const submit_schedule = (schedule_input, schedules) => {

    return async (dispatch) => {
        try {
            console.log(schedule_input, schedules)
            dispatch({ type: scheduleConstant.SCHEDULE_REQUEST });
            // let res = await axios().post("/users", { ...user });
            let res;
            res = {
                data: {
                    token: "test",
                    schedule_inputs: {
                        ...schedule_input,
                    },
                },
                status: 201
            };

            if (res.status === 201) {
                Toastify("success", "Sign up successfully");
                dispatch({ type: scheduleConstant.SCHEDULE_REQUEST });
                const { token, schedule_inputs } = res.data;

                localStorage.setItem("token", token);
                schedules.push(schedule_inputs)
                localStorage.setItem("schedules", JSON.stringify(schedules));
                dispatch({
                    type: scheduleConstant.SCHEDULE_SUCCESS,
                    payload: {
                        token,
                        schedules: schedules,
                    },
                });
            } else {
                const { error } = res.data;
                // Toastify("error", "Unable to signup");
                dispatch({ type: scheduleConstant.SCHEDULE_FAIL, payload: { error } });
            }
        } catch (error) {
            // Toastify("error", error.response.data.message);
            dispatch({
                type: scheduleConstant.SCHEDULE_FAIL,
                payload: { error: error.message },
            });
        }
    };
};