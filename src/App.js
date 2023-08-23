import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import axios from 'axios'
function App() {
  const [products, setProducts] = useState([])
  const [filtered, setFiltered] = useState([])
  const [catagories, setCatagories] = useState([])
  useEffect(()=>{
    axios.get('https://dummyjson.com/products').then(({data:{products}})=>{
      setProducts(products)
      setFiltered(products)
      const cata = new Set(products.map((x)=>{
        return x.category
      }))
      console.log(cata,8);
      setCatagories(Array.from(cata))
    })
  },[])

  const handleChange  = (e) => {
    console.log(e.target.value);
    if(e.target.value == 0){
      console.log('hai',products);
      setFiltered([...products])
      return
    } 
    setFiltered(products.filter((x)=>{
      return x.category === e.target.value
    }))
  }
  return (
    <div className="App">
    <div className="d-flex justify-content-end p-2" >
      <select onChange={handleChange} class="form-select w-25 " aria-label="Default select example">
        <option value={0} selected  >Categories</option>
        {
          catagories.length > 0 && catagories.map((x)=>{
          return(<option value={x}>{x}</option>)
          })
        }
        <option value={0} >clear</option>
      </select>
      </div>
    <div className=" row ">
      {
        filtered.length > 0 && filtered.map((x,i)=>{
         return( <Cards key={i} img={x.thumbnail} rating={x.rating} title={x.title} price={x.price}  className={"col-md-3 col-sm-6 col-12"} />)
        })
      }
    </div>
    </div>
  );
}

export default App;
