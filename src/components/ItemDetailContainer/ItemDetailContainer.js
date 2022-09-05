import {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import data from './mock-data'

const ItemDetailContainer = ({greetings}) =>{
  const [items,setItems] = useState ([]);

  const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(data)
    }, 2000);
});

useEffect(() => {
    getData.then((result) => {
        setItems (result) 
    })
}, []);    


  return (
    <ItemDetail data={data}/>
  )
}


export default ItemDetailContainer