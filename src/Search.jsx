import styles from './Search.module.css';
import Input from './input';
import Data from "./cities.json";
import { useState , useEffect } from 'react';



const Search = () =>{
  
    const [searchItem, setSearchItem] = useState('');
    const [data, setData] = useState([Data]);
    const [search, setSearch] = useState('');


   console.log(data)

    const handleChange = (e) => { 
        const searchTerm = e.target.value;
        setSearchItem(searchTerm)

        dataFromServer.filter((data)=>{
            //   ...
          });

        console.log(searchItem)
    }

 


    return(
        <>
        <div  className={styles.container}>
        <Input
         handleChange={handleChange}
         />
        
       
        {data.map((item ,index) => {
            return(
                <ul className={styles.drop}>
                <li key={index}>{item}</li>
                </ul>
            )
        })}
      
        </div>
        </>
    )
} 

export default Search;
