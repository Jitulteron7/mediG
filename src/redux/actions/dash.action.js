import { authConstant } from "../const";
import axios from "../../helper/AxiosInstance";
// import { Toastify } from "../../App";

export const uploadFile = (file) => {

    console.log("file1", file);

    return async (dispatch) => {

        console.log("file2", file);
        
        try {
 
           console.log("file3", file);

            let res = await axios.post("/patient/dash/", file );

            console.log(res);

            if (res.status == 200) {
                // Toastify("success", "Login successfully");
            } else {
                // Toastify("error", "Unable to Login");
            }
        } catch (error) {
            // Toastify("error", error.response.data.message);
            console.log(error)
        }
    };
};