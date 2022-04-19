import { GET_ALL_ARTS,GET_ONE_ART } from "../Types/index.js";
import axios from 'axios';
const GetAllArt = process.env.REACT_APP_ALL_ART;
const GetOneArt = process.env.REACT_APP_GET_ONE_ART;

// Dispatch all the art
export const getAllArts  = () => {
    return async function dispatch(dispatch) {
        try {
            const res = await axios.get(`${GetAllArt}`);
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

// Get a specific Art by ID

export const GetoneArt = (id) => {
    return async function dispatch(dispatch) {
        try {
            const res = await axios.post(`${GetOneArt}` + id);
            dispatch({
                type: GET_ONE_ART,
                payload: res.data
            })
        }catch(err){
            console.log(err.message)
        }
    }
}