import { useState, useEffect } from "react";

const useSimpson = () => {
  const [quote, setQuote] = useState(null); 
  const [loading, setLoading] = useState(true); 


  const fetchSimpsonsQuote = async () => {
    try {
      setLoading(true); 
      const response = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      const data = await response.json();
      setQuote(data[0]);
      //En un futuro agregaria un issue para que no se repitan los personajes 
    } catch (error) {
      console.error("Error fetching quote:", error);
    } finally {
      setLoading(false); 
    }
  };


  useEffect(() => {
    fetchSimpsonsQuote();
  }, []);

  return { quote, loading, fetchSimpsonsQuote };
};

export default useSimpson;
