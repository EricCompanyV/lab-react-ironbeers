import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { Home } from "tabler-icons-react";

function ButtonHome() {
  return (
    <Button
      sx={(theme) => ({
        backgroundColor: theme.colors.blue[4],
        "&:hover": {
          backgroundColor: theme.colors.blue[3],
        },
      })}
      component={Link}
      to="/"
      variant="light"
      fullWidth
      style={{ marginTop: 14 }}
    >
      <Home size={48} strokeWidth={2} color={"#ffffff"} />
    </Button>
  )
}

export default ButtonHome;
