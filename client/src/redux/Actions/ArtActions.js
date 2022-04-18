import { GET_ALL_ARTS } from "../Types/index.js";
import axios from 'axios';
const url = process.env.REACT_APP_ALL_ART;

// Dispatch all the art
export const getAllArts  = () => {
    return async function dispatch(dispatch) {
        try {
            const res = await axios.get(`${url}`);
            dispatch({
                type: GET_ALL_ARTS,
                payload: res.data
            })
        }
        catch (err) {
            console.log(err.message);
        }
    }
}