import { Box, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useActions } from "../hooks/useAction";
import { useTypeSelector } from "../hooks/useTypeSelector";
import ProdCard from "./ProdCard";

const ProductsList = () => {
  const { getUsers } = useActions();
  const { error, loading, user } = useTypeSelector(state => state.userReducers);

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>erooorrr</h1>;
  }

  return (
    <>
      <Container sx={{ mt: 14 }}>
        <Box sx={{ margin: "20px", padding: "10px", display: "flex" }}>
          <img
            style={{
              borderRadius: "20px",
              paddingRight: "20px",
            }}
            width="30%"
            src="https://cdn.dribbble.com/userupload/2811826/file/original-835855934844c86c74b0042b69856887.jpg?compress=1&resize=1024x735"
          />
          <Typography sx={{ fontSize: "15px", width: "200px" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            mollitia odit ducimus ab. Officiis labore itaque voluptates, culpa
            animi id? Necessitatibus facilis, praesentium unde nostrum itaque
            aspernatur vero mollitia saepe.
          </Typography>
          <img
            style={{
              borderRadius: "20px",
              paddingRight: "20px",
            }}
            width="30%"
            src="https://cdn.dribbble.com/users/2973/screenshots/16945757/media/acf5d5a9edec6dcfd22e85b51fb929a1.png"
          />
          <Typography sx={{ fontSize: "15px", width: "200px" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            mollitia odit ducimus ab. Officiis labore itaque voluptates, culpa
            animi id? Necessitatibus facilis, praesentium unde nostrum itaque
            aspernatur vero mollitia saepe.
          </Typography>
        </Box>

        <h1 style={{ margin: "30px", textAlign: "center" }}>
          See the list of our products
        </h1>
        <div style={{ display: "flex" }}>
          {user?.map(item => (
            <ProdCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default ProductsList;
