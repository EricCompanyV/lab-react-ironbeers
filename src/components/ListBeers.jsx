import ButtonHome from "./ButtonHome";
import { Grid } from "@mantine/core";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import BeerDetails from "./BeerDetails";

function ListBeers() {
  const [beers, setBeers] = useState([]);
  const navigate = useNavigate()
  
  const fetchBeers = async (setter) => {
    const data = await fetch(API_BASE_URL + "/beers");
    const fetchedData = await data.json();
    setter(fetchedData);
  };

  const handleClick = (event, id) =>{
    navigate(`${id}`)
  }

  useEffect(() => {
    fetchBeers(setBeers);
  }, []);

  return (
    <>
      <ButtonHome />
      <Grid gutter={"sm"} style={{ marginTop: 25 }} align="center">
        {beers.map((beer) => (
          <Grid.Col md={6} lg={3} style={{ minHeight: 300 }} onClick={(event)=>{handleClick(event, beer._id)}} key={beer._id}>
           <BeerDetails beer={beer} />
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
}

export default ListBeers;
