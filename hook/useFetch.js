import {useState, useEffect }from 'react'
import axios from 'axios';


const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error , setError] = useState(null);


const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      'X-RapidAPI-Key': 'cf0d0fe8damshf526caa6026298cp19271fjsn41e2be8ed0aa',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };

  const fetchData = async () => {
    setIsLoading(true);

    try{
        const response = await axios.request(options)
        // const response = '';
        console.log('response', response);
        setData(response.data.data);
        setIsLoading(false);

    }catch(error){
        setError(error);
        console.log('error: ' + error);
        alert('An Error occured')
    }finally{
      setIsLoading(false);

    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  }

    return {data, isLoading, error, refetch};

  }

  export default useFetch;