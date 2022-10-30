import { authConstant, scheduleConstant } from "../const";

const initialState = {
    token: null,
    schedules: [],
    user: {
        type: "",
        data: null
    },
    authenticated: false,
    authenticating: false,
    loading: false,
    forgotReq: false,
    resetPassword: false,
};


export default (state = initialState, action) => {
    //schedule request

    switch (action.type) {
        case scheduleConstant.SCHEDULE_REQUEST:
            state = {
                ...state,
                loading: true
            };
            break;

        case scheduleConstant.SCHEDULE_SUCCESS:
            console.log("SCHEDULE_SUCCESS")
            state = {
                ...state,
                loading: false,
                schedules: action.payload.schedules,
            };
            break;
        case scheduleConstant.SCHEDULE_FAIL:
            state = {
                ...state,
                loading: false,
                schedules: initialState.schedules,
            };
            break;

    }

    return state;
};
