

import Header from "../../components/header/header";
import Img from '../../logo/img-logo/img'; 
import { useEffect } from "react";
import { useState } from "react";
// import { Router, Route } from "react-router-dom";
import s from './Characters.module.css'
import { Link } from "react-router-dom";



const Characters = () => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);
    const [page,setPage] = useState(1);
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [status, setStatus] = useState('');
    const [species,  setSpecies] = useState('');
   
    useEffect(()=> {
        const getData = async () =>{
            try{
                setLoading(true)
                const result = await fetch(`https://rickandmortyapi.com/api/character/?page=${page+1}&gender=${gender}&name=${name}&status=${status}&species=${species}`)
                if(!result.ok){
                    throw new Error('Загрузка...');
                }
                const resultJson = await result.json();
                setData(resultJson.results);
                setLoading(false)
            }catch(error){
                console.log(error);
                setError(true);
                
            }
        };
        getData();
    }, [page, gender, name,status,species]);
    if(isLoading){
        return <h1>Загрузка...</h1>
    }
  return (
    <>
    
            <Header></Header>
            <Img></Img>
       

    <div className={s.div}>
        <input onChange={(e)=> setName(e.target.value)} 
        className={s.inputs}
        type="text"
        placeholder="Фильтрация по имени" 
        value={name}>
        </input>

        <select placeholder="Расса"
        onChange = {(e)=> setSpecies(e.target.value)}
        className={s.input}
        type="text"
        value={gender}>
            <option value="">Species</option>
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
        </select>


        <select placeholder="Гендер"
        onChange = {(e)=> setGender(e.target.value)}
        className={s.input}
        type="text"
        value={gender}>
            <option value="">Man</option>
            <option value="Female">Female</option>
            <option value="Unknown">Unknown</option>
        </select>

        <select placeholder="Статус"
        onChange={(e)=> setStatus(e.target.value)}
        className={s.input}
        type="text"
        value={status} >
            <option value="">Dead</option>
            <option value="Alive">Alive</option>
            <option value="Unknown">Unknown</option>
        </select>




    </div>
    <div className={s.characters}>
    {!isError &&
    data.map((item, index) =>(
        <Link to={`/character/${item.id}`} key={index} className={s.contant}>
            <img src={item.image} alt="" />
            <h2>{item.name}</h2>
            <h3 className={s.h3}>{item.species}</h3>
        </Link>
    ))}
    </div>
{isError && <h2>Ошибка</h2>}
    <div className={s.div__botton}>
    <button onClick={()=> setPage(page+1)} 
    className={s.button}>Load More</button>
    </div>
    </>
  )
}

export default Characters