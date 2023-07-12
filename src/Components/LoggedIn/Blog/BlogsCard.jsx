import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
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

  const [isExpanded, setisExpanded] = useState(false);
  const handleExpand = () => {
    setisExpanded(!isExpanded);
  };

  const truncatedContent = (
    <Typography>
      <ReadMoreReact
        text={description}
        min={126}
        ideal={126}
        max={130}
        readMoreText={
          <Typography
            color="primary"
            sx={{ "&:hover": { cursor: "pointer" } }}
            onClick={handleExpand}
          >
            <b>Read More</b>
          </Typography>
        }
      />
    </Typography>
  );

  const expandedContent = (
    <Typography>
      {description}
      <Typography
        color="primary"
        sx={{ "&:hover": { cursor: "pointer" } }}
        onClick={handleExpand}
      >
        <b>Show Less</b>
      </Typography>
    </Typography>
  );

  return (
    <Box>
      {" "}
      <Card
        sx={{
          width: "70%",
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
        <CardMedia component="img" height="180" image={image} alt="blog image" />

        <CardContent>
          <hr />
          <br />
          <Grid style={{ width: "100%", wordWrap: "break-word" }}>
            <Typography
              //   className={classes.font}
              variant="body2"
              color="text.secondary"
            >
              {isExpanded ? expandedContent : truncatedContent}
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Blog;
