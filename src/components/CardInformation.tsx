import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

const CardInformation = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="gye.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Camino Real
        </Typography>
        {/*Qualification*/}
        <p>8.2 - Muy Bueno (40561)</p>
        {/*Precio*/}
        <br />
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Compartir</Button>
        <Button size="small">Consultar Oferta</Button>
      </CardActions>
    </Card>
  );
};

export default CardInformation;
