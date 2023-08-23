import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import axios from "axios";
import DropDown from "./components/DropDown";
function App() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [catagories, setCatagories] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then(({ data: { products } }) => {
        setProducts(products);
        setFiltered(products);
        const cata = new Set(
          products.map((x) => {
            return x.category;
          })
        );
        setCatagories(Array.from(cata));
      });
  }, []);

  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.value == 0) {
      setFiltered([...products]);
      return;
    }
    setFiltered(
      products.filter((x) => {
        return x.category === e.target.value;
      })
    );
  };
  return (
    <div className="App">
      <DropDown catagories={catagories} handleChange={handleChange} />
      <div className=" row ">
        {filtered.length > 0 &&
          filtered.map((x, i) => {
            return (
              <Cards
                key={i}
                img={x.thumbnail}
                rating={x.rating}
                title={x.title}
                price={x.price}
                category={x.category}
                className={"col-md-3 col-sm-6 col-12"}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
