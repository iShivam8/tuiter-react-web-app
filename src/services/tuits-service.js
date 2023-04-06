import axios from 'axios';
//const TUITS_API = 'http://localhost:4000/api/tuits';

// Node API for A8
//const TUITS_API = 'https://tuiter-node-server-app-zimt.onrender.com/api/tuits';

// Node API for A9
//const TUITS_API = 'https://tuiter-node-server-app-a9-35a7.onrender.com';

const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;

// const CONNECTION_STRING = process.env.DB_CONNECTION_STRING;

// console.log("DB CONNECTION STRING: " + CONNECTION_STRING);
// console.log("API BASE: " + API_BASE);
// console.log("TUITS API: " + TUITS_API);

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}
export const findTuits = async () => {
    const response = await axios.get(TUITS_API);
    const tuits = response.data;
    return tuits;
}
export const deleteTuit = async (tid) => {
    const response = await axios
        .delete(`${TUITS_API}/${tid}`)
    return response.data
}

export const updateTuit = async (tuit) => {
    const response = await axios
        .put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;

}