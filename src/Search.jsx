import styles from './Search.module.css';
import Input from './input';
import Data from "./cities.json";
import { useState , useEffect} from 'react';



const Search = () =>{
  
    const [search, setSearch] = useState("");
    const [data, setData] = useState("");



    const handleChange = (e) => { 
        const setData = e.target.value;
        setData(setData)
    }

 
    useEffect(() =>{
        if (data.trim()) {
            setData(search);
        }else{
            setData("search");
        }
    },[search])

    return(
        <>
        <div  className={styles.container}>
        <Input
        hint={data }
         handleChange={handleChange}
         />
        
      
        </div>
        </>
    )
} 

export default Search;
