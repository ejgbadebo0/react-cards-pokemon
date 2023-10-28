import {useState} from 'react';
import { v4 as uuid } from "uuid";
import axios from "axios";

const useAxios = (url, endpoints = '') => {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const resp = await axios.get(`${url}${endpoints}`);
        setData(data => [...data, { ...resp.data, id: uuid() }] );
    } 
    return [data, fetchData]; 
}

export default useAxios;