import React, { useEffect, useState } from "react";

import axios from "axios";
import { Box, styled, Typography } from "@mui/material";
import Blog from "./BlogsCard";

const Image = styled(Box)`
  width: 100%;
  background: url("../../../src/assets/banners/img 2(2).jpg") center/55% repeat-x #000;
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

const SubHeading = styled(Typography)`
  font-size: 20px;
  background: #ffffff;
`;

const OutBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:8080/api/blog")
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setBlogs(data.blogs));
  }, []);
  // console.log(blogs);
  return (
    <div>
      <Image>
        <Heading>BLOG</Heading>
        <SubHeading>Lets Normalize It</SubHeading>
      </Image>
      <Box>{blogs && blogs.map((blog) => <Blog key={blog._id} param={blog} />)}</Box>
      <Box marginTop="2rem"></Box>
    </div>
  );
};

export default OutBlogs;
