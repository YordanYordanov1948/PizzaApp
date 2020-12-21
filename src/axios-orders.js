import axios from 'axios';

const instance = axios.create({
    baseURL = "https://react-pizza-263ba-default-rtdb.firebaseio.com/"
});

export default instance;