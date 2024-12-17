/* eslint-disable no-undef */
import { useEffect, useState } from 'react'
import axios from 'axios';
import s from './Details.module.css'
import { useParams } from 'react-router-dom';
import Header from '../header';

const Details = () => {
    const [data, setData] = useState([]);
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const {id} = useParams();
    useEffect(()=>{
        const getData = async () =>{
            try{
                setError(false);
                const result = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
                console.log(result);
                setData(result.data);
                setLoading(false);
            }catch(error){
                console.log(error);
                setError(true);
            }
        }
        getData()
    },[id])
    // if(isError){
    //     return <h1>Ошибка!</h1>
    // }
  return (
    <>
    <Header></Header>

    <div className={s.mig__character}>
        <img src={data?.image} className={s.img} alt={data?.name} />
    <h1>{data?.name}</h1>
        <p>{data?.status}</p>
        <p>{data?.gender}</p>
        <p>{data?.species}</p>
        <p>{data?.location?.name}</p>
        <p>{data?.origin?.name}</p>
    </div>
    </>
  )
}

export default Details