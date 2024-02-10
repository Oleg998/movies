import { getTrendig } from 'components/Api/api';
import { useEffect, useState } from 'react';
import ImageGallery from 'components/ImageGallery/ImageGallery';

const TrendingMovies = () => {
  const [state, setState] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const { data } = await getTrendig();

        setState(prevState => data.results);

        setIsLoading(true);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
      if(!state){
      fetchTrendingMovies();}
    
  }, []);
  

  
  return (<div>{state && <ImageGallery items={state} />}; </div>)
    
    
};

export default TrendingMovies;
