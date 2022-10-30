import { authConstant } from "../const";
import axios from "../../helper/AxiosInstance";
// import { Toastify } from "../../App";

export const uploadFile = async (file) => {

        console.log("file3", file);

        let res = await axios.post("/patient/dashboard/", file );

        console.log(res);

        if (res.status == 200) {
                // Toastify("success", "Login successfully");
        } else {
                // Toastify("error", "Unable to Login");
        }
};