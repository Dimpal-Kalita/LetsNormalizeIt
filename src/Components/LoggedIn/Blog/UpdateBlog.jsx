import React, { useState, useEffect } from "react";
import { Box, TextField, Button, styled, Container, Typography } from "@mui/material";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

const Image = styled(Box)`
  width: 100%;
  background: url("../../../src/assets/banners/img2 (4).jpg") center/120% repeat-x #000;
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

const UpdateBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageLink, setImageLink] = useState("");
  const { id } = useParams();

  const [fill, setFill] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  useEffect(() => {
    Loaduserdetails();
  }, []);

  const Loaduserdetails = async () => {
    const res = await axios.get(`http://localhost:8080/api/blog/${id}`);
    const data = await res.data;
    setTitle(data.blog.title);
    setDescription(data.blog.description);
    setImageLink(data.blog.image);
  };

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
    if (title === "" || description === "") {
      setFill(true);
      return;
    }
    const blogData = {
      title,
      description,
      image: imageLink,
    };

    axios
      .post(`http://localhost:8080/api/blog/update/${id}`, blogData)
      .catch((e) => setError(e.message));
    navigate("/myblog");
  };

  return (
    <div>
      <Image>
        <Heading>Update your BLOG</Heading>
      </Image>
      <StyledContainer injectFirst>
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
          Update
        </StyledButton>
      </StyledContainer>
      <Box marginTop="2rem"></Box>
    </div>
  );
};

export default UpdateBlog;
