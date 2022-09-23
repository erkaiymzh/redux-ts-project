import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useActions } from "../hooks/useAction";
import { CardActionArea, Container } from "@mui/material";

interface PropsItem {
  item: any;
}

const ProdCard: React.FC<PropsItem> = ({ item }) => {
  const navigate = useNavigate();
  const { deleteUser, getUsers } = useActions();

  const handleDelete = async () => {
    deleteUser(item.id);
    getUsers();
  };
  return (
    <>
      <Card
        sx={{
          maxWidth: 600,
          display: "flex",
          justifyContent: "space-between",
          margin: "15px",
        }}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={item.picture}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography>{item.description}</Typography>
            <Typography variant="body2" color="text.secondary">
              {item.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={handleDelete}>delete</Button>
            <Button onClick={() => navigate(`/edit/${item.id}`)}>edit</Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </>
  );
};

export default ProdCard;
