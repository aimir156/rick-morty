/* eslint-disable react-hooks/exhaustive-deps */

import Header from '../../components/header/header'
import s from './Location.module.css'
import Rick from '../../assets/rick-and-morty 1.png'
import { useEffect, useState } from 'react'
import axios from 'axios'




const Location = () => {
  const [data, setData] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [dimension, setDimension] = useState('');
  useEffect(()=>{
    const getData = async() =>{
      try{
        const result = await axios.get('https://rickandmortyapi.com/api/location',{
          params:{
            page:page,
            name:name,
            type:type,
            dimension:dimension,
          }
        })
        if(isError){
          throw new Error('Загрузка...')
        }
        setData ([ ...result.data.results || []]);
        setLoading(false);
      }catch(error){
        console.log(error);
        setError(true);
      }
     
    }
    getData();
  },[name, page, type, dimension,]);
    if(isLoading){
      return <h1>Ошибка!</h1>
    }

  return (
    <>
    <Header></Header>
    <div className={s.div}>
      <img src={Rick} className={s.img} alt="" />
    </div>
   <div>
   <div className={s.container}>
        <input type="text" className={s.input}
        onChange={(e)=> setName(e.target.value)}
        value={name}
        placeholder='Filer by name...' />


        <select  className={s.select_type}
        onChange={(e)=> setType(e.target.value)}
        value={type}>
            <option value="">Type</option>
            <option value="">ih</option>
            <option value=""></option>
        </select>


        <select className={s.select_category} 
        onChange={(e)=> setDimension(e.target.value)}
        value={dimension}>
            <option value="">Dimension</option>
            <option value=""></option>
            <option value=""></option>
        </select>
    </div>
   </div>
    {!isError && 
    <div className={s.all_items_container}>
    {data.map((item, index) => (
      <div key={index} className={s.characters}>
        <h2>{item.name}</h2>
        <h3 className={s.h}>{item.type}</h3>
        <h5 className={s.h}>{item.dimension}</h5>
      </div>
    ))}
  </div>
    }
    {isError && <h1>Ошибка!</h1>}
    <div className={s.div__botton}>
      <button className={s.button} onClick={()=>setPage(page+1)}>Load More</button>
    </div>
    </>
  )
}

export default Location