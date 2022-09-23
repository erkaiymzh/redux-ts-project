import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useActions } from "../hooks/useAction";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { IUser } from "../types/Users";

type ParamsEditedItem = {
  id: string;
};

const EditProd = () => {
  const { id } = useParams<ParamsEditedItem>();
  const { editedUser, saveEdited } = useActions();
  const navigate = useNavigate();
  const { edit, loading, error } = useTypeSelector(state => state.userReducers);
  const [value, setValue] = useState<IUser>({
    name: "",
    picture: "",
    price: 0,
    description: "",
  });

  useEffect(() => {
    if (edit) setValue(edit);
  }, [edit]);

  useEffect(() => {
    editedUser(id);
  }, [id]);

  const handleSubmit = () => {
    if (!value.description && !value.name && !value.price) {
      return;
    }
    saveEdited(id, value);
    setValue({ name: "", description: "", price: 0, picture: "" });
    navigate("/");
  };

  if (loading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>erooorrr</h1>;
  }

  return (
    <div className="add-edit-page" style={{ marginTop: "100px" }}>
      <Container>
        <form onSubmit={handleSubmit}>
          <Typography variant="h4">Change Product's Details</Typography>
          <TextField
            onChange={e => setValue({ ...value, name: e.target.value })}
            value={value.name}
            style={{ padding: "5px" }}
            variant="outlined"
            label="Name"
          />
          <TextField
            onChange={e => setValue({ ...value, description: e.target.value })}
            value={value.description}
            style={{ padding: "5px" }}
            variant="outlined"
            label="Description"
          />
          <TextField
            onChange={e => setValue({ ...value, price: +e.target.value })}
            value={value.price}
            style={{ padding: "5px" }}
            variant="outlined"
            label="Price"
          />
          <Button variant="contained" onClick={handleSubmit}>
            Save changes{" "}
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default EditProd;
