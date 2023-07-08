import React, { useState } from "react";
import { TextField, Button, styled, Container, Typography } from "@mui/material";
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

const BlogUploadPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageLink, setImageLink] = useState("");
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
  );
};

export default BlogUploadPage;
