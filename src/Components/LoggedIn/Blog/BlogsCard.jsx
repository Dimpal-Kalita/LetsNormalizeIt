import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRhinoValue } from "react-rhino";
import ReadMoreReact from "read-more-react";

const Blog = (prop) => {
  const { title, description, image } = prop.param;
  const userName = prop.param.user.name;
  const id = prop.param._id;
  const isUser = prop.param.user._id === useRhinoValue("id");

  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/blog/update/${id}`);
  };
  const deleteRequest = async () => {
    const res = await axios
      .delete(`http://localhost:8080/api/blog/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = () => {
    deleteRequest()
      .then(() => navigate("/"))
      .then(() => navigate("/blog"));
  };
  return (
    <Box>
      {" "}
      <Card
        sx={{
          width: "80%",
          margin: "auto",
          mt: 2,
          padding: 2,
          boxShadow: "5px 5px 10px #ccc",
          ":hover": {
            boxShadow: "10px 10px 20px #ccc",
          },
        }}
      >
        {isUser && (
          <Box display="flex">
            <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
              <ModeEditOutlineIcon color="warning" />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteForeverIcon color="error" />
            </IconButton>
          </Box>
        )}
        <CardHeader
          avatar={
            <Avatar
              //     className={classes.font}
              sx={{ bgcolor: "red" }}
              aria-label="recipe"
            >
              {userName ? userName.charAt(0) : ""}
            </Avatar>
          }
          title={title}
        />
        <CardMedia component="img" height="150" image={image} alt="blog image" />

        <CardContent>
          <hr />
          <br />
          <Typography
            //   className={classes.font}
            variant="body2"
            color="text.secondary"
          >
            <b>{userName}</b> {": "}
            <ReadMoreReact
              text={description}
              min={80}
              ideal={150}
              max={200}
              readMoreText={
                <Typography color="primary">
                  <b>Read More</b>
                </Typography>
              }
            />
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Blog;
