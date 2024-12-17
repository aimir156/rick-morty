/* eslint-disable no-unused-vars */
import s from './episod.module.css';

import Header from '../../components/header/header';
import Png from '../../rick -and-morty-img/Png/Png';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../userContext/userContext';


const Episod = () => {
  const pdata = useContext(UserContext)
  console.log(pdata);
  
  const [data, setData] = useState ([]);
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState (false);

  
  useEffect(()=>{
    const getData = async() =>{
      try{
        const result = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}&name=${name}`)
        if(!result.ok){
          throw new Error('Загрузка...');
        }
        const resultJson = await result.json();
        setData(resultJson.results);
        setLoading(false);
      }catch(error){
        console.log(error);
        setError(true);
      }
    };
    getData();
  },[page, name]);
    if(isLoading){
      return <h1>Ошибка!</h1>
    };



  return (
    <>
    <Header></Header>
    <div className={s.div}>
     <Png className = {s.img}></Png>
    </div>
    <div className= {s.cont}>

      <input type="text" 
      className={s.input} 
      onChange={(e)=> setName(e.target.value)}
      value={name}
      id=""
      placeholder='Filter by name or episode (ex. S01 or S01E02)'
       />
    </div>
    <div className={s.div__contant}>
      {!isError &&
      data.map((item,index) =>(
        <div key={index} className={s.characters}>
          <h2>{item.name}</h2>
          <h3 className={s.h}>{item.air_date}</h3>
          <h5 className={s.h}>{item.episode}</h5>
        </div>
      ))
      }
    </div>
    {isError && <h1>Ошибка!</h1>}
    <div className={s.div__botton}>
      <button className={s.button} onClick={()=> setPage(page+1)}>Load More</button>
    </div>
    </>
  );
};

export default Episod