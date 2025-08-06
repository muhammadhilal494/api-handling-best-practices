import { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    ;(async () => {
      try {
        setError(false);
        setLoading(true); 
        const response = await axios.get(`/api/products?search=
          ${search}`,{
            signal: controller.signal,
          });
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        if(axios.isCancel(error)) {
          console.log('request cancelled', error.message);
          return;
        }
        setError(true);
        setLoading(false);
      }
    })();

    return () => {
      controller.abort();
    } // cleanup function

  }, [search])

  // const [products, error, loading] = customReactQuery("/api/products");

  // if (error) {
  //   return <h1>Error: {error}</h1>
  // }

  // if (loading) {
  //   return <h1>Loading...</h1>
  // }



  return (
    <>
      <h1>api handling with Hilal</h1>
      <input type="text" placeholder="Search"
      onChange={(e) => setSearch(e.target.value)}

      />

      {loading && <h1>Loading...</h1>}
      {error && <h1>Error: {error}</h1>}

      <h2>Number of products: {products.length}</h2>
    </>
  )
}

export default App

const customReactQuery = (urlPath) => {
  // const [products, setProducts] = useState([])
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);


  // useEffect(() => {
  //   (async () => {
  //    try {
  //     setError(false);
  //     setLoading(true);
  //      const response = await axios.get(urlPath);
  //      console.log(response.data);
  //      setProducts(response.data);
  //      setLoading(false);
  //    } catch (error) {
  //     setError(true);
  //     setLoading(false);
  //    }
  //   })();

  // }, [])

  return [products, error, loading]

}
