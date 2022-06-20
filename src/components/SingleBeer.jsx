import { useEffect, useState } from "react";
import { Image, Text, Card } from "@mantine/core";
import ButtonHome from "./ButtonHome";
import { API_BASE_URL } from "../utils/constants";
import { useParams } from 'react-router-dom';
import BeerDetails from "./BeerDetails";


function SingleBeer() {
    const {id}= useParams()
    console.log(id)
    const [beer, setBeer] = useState([]);

    async function fetchBeer(setter) {
        const data = await fetch(API_BASE_URL + "/beers");
        const fetchedData = await data.json();
        const filteredData = fetchedData.filter((beer) => beer._id === id);
        console.log(filteredData);
        setter(filteredData[0]);
    }
  useEffect(() => {
      fetchBeer(setBeer);
    }, []);

    return ( 
        <>
            <ButtonHome />
            <BeerDetails beer={beer} />
        </>
     )
}

export default SingleBeer;