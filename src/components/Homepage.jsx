import allBeers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";
import { Link } from 'react-router-dom';


import {
  Card,
  Image,
  Text,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";

function Homepage() {
  const theme = useMantineTheme();
  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  return (
    <>
      <div style={{ width: 340, margin: "auto" }}>
        <Card shadow="sm" p="lg">
          <Card.Section>
            <Image src={allBeers} height={160} alt="allBeers" />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <Text weight={500}>All Beers</Text>
          </Group>

          <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
            Here you will find the list of all the beers in the Ironhack beer
            collection. Don't hesitate to try one! 🍺
          </Text>

          <Button
          component={Link} to="/beers"
            variant="light"
            color="blue"
            fullWidth
            style={{ marginTop: 14 }}
          >
            All beer tour!
          </Button>
        </Card>

        <Card shadow="sm" p="lg">
          <Card.Section>
            <Image src={randomBeer} height={160} alt="random beer" />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <Text weight={500}>Random Beers</Text>
          </Group>

          <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
            For the indecisive beer-aholics in Ironhack, a random beer to taste.
            Share on with your favourite TA! 🍻
          </Text>

          <Button
          component={Link} to="/random-beer"
            variant="light"
            color="blue"
            fullWidth
            style={{ marginTop: 14 }}
          >
            Random beer discovery!
          </Button>
        </Card>
        <Card shadow="sm" p="lg">
          <Card.Section>
            <Image src={newBeer} height={160} alt="random beer" />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <Text weight={500}>New Beer</Text>
          </Group>

          <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
            If you want to share your beer-knowledge with Ironhack peers and introduce them to a new beer 🍷
          </Text>

          <Button
          component={Link} to="/new-beer"
            variant="light"
            color="blue"
            fullWidth
            style={{ marginTop: 14 }}
          >
            Expand Ironhack beer's horizons!
          </Button>
        </Card>
      </div>
    </>
  );
}

export default Homepage;
