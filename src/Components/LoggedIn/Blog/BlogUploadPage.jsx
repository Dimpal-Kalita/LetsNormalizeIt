import React, { useState } from "react";
import {
  Grid,
  Box,
  TextField,
  Button,
  styled,
  Container,
  Typography,
} from "@mui/material";
import axios from "axios";

import { useRhinoValue } from "react-rhino";
import { useNavigate } from "react-router-dom";

const StyledContainer = styled(Container)`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const StyledTextField = styled(TextField)`
  && {
    margin-bottom: 20px;
  }
`;

const StyledButton = styled(Button)`
  && {
    margin-top: 20px;
  }
`;

const Image = styled(Box)`
  width: 100%;
  background: url(https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80)
    center/55% repeat-x #000;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled(Typography)`
  font-size: 70px;
  color: #ffffff;
  line-height: 1;
`;

// const SubHeading = styled(Typography)`
//     font-size: 20px;
//     background: #FFFFFF;
// `;

const BlogUploadPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageLink, setImageLink] = useState("../../../src/assets/banners/img2 (1).jpg");
  const id = useRhinoValue("id");

  const [fill, setFill] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageLinkChange = (event) => {
    setImageLink(event.target.value);
  };

  const handleUpload = () => {
    if (title === "" || description === "" || imageLink === "") {
      setFill(true);
      return;
    }
    const blogData = {
      title,
      description,
      image: imageLink,
      user: id,
    };

    axios
      .post("http://localhost:8080/api/blog/add", blogData)
      .catch((e) => setError(e.message));
    navigate("/myblog");
  };

  return (
    <div>
      <Image>
        <Heading>Create a new BLOG</Heading>
      </Image>
      <StyledContainer>
        <StyledTextField
          label="Title"
          value={title}
          onChange={handleTitleChange}
          fullWidth
        />
        <StyledTextField
          label="Description"
          value={description}
          onChange={handleDescriptionChange}
          fullWidth
          multiline
          rows={4}
        />
        <StyledTextField
          label="Image Link"
          value={imageLink}
          onChange={handleImageLinkChange}
          fullWidth
        />
        {fill && <Typography color="red">* Please Fill all the fields</Typography>}
        {error && <Typography color="red">* {error}</Typography>}
        <StyledButton variant="contained" color="primary" onClick={handleUpload}>
          Upload
        </StyledButton>
      </StyledContainer>
      <Grid marginTop="2rem"></Grid>
    </div>
  );
};

export default BlogUploadPage;
