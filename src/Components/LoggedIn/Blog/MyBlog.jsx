import React, { useEffect, useState } from "react";

import axios from "axios";
import { Box } from "@mui/material";
import { useRhinoValue } from "react-rhino";
import Blog from "./BlogsCard";

const MyBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const id = useRhinoValue("id");
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
    <Box>
      {blogs &&
        blogs
          .filter((blog) => blog.user._id === id)
          .map((blog) => <Blog key={blog._id} param={blog} />)}
    </Box>
  );
};

export default MyBlogs;
