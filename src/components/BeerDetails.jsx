
import {  Image, Text, Card } from "@mantine/core";

function BeerDetails({beer}) {
    return ( 
    <>
    <Card shadow="sm" p="lg" radius={"sm"}>
    <Card.Section>
      <Image
        src={beer.image_url}
        height={150}
        alt="beer post"
        fit="contain"
      />
    </Card.Section>
   
      <Text size="lg" weight={700} align="justify" >{beer.name}</Text>
    

    <Text size="sm" weight={500}>
      {beer.tagline}
    </Text>

    <Text size="sm" style={{ lineHeight: 1.5 }}>
      Contributed by: {beer.contributed_by}
    </Text>
  </Card> 
  </>
)}

export default BeerDetails;