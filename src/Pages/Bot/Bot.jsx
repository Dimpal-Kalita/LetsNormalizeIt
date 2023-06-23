import { useState } from "react";

import { Box, Typography, TextField, Button } from "@mui/material";

import uniqueId from "lodash/uniqueId";

const API_KEY = import.meta.env.VITE_API_BOT;

const systemMessage = {
  role: "system",
  content: "Explain query such that it helps in maintaing users mental and sexual health",
};

const Bot = () => {
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      message: "Hello, Ask me anything!",
      sentTime: "just now",
      sender: "Assistant",
    },
  ]);

  const askGPT = async (prompt) => {
    setLoading(true);
    const apiMessage = prompt.map((messageObject) => {
      const role = messageObject.sender === "Assistant" ? "assistant" : "user";
      return { role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        systemMessage, // The system message DEFINES the logic of our chatGPT
        ...apiMessage, // The messages from our chat with ChatGPT
      ],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setMessages([
          ...prompt,
          {
            message: data.choices[0].message.content,
            sender: "Assistant",
          },
        ]);
        setLoading(false);
      });
  };

  const handleSendData = async (e) => {
    e.preventDefault();
    const newMessages = [
      ...messages,
      { message: userInput, sentTime: "just now", sender: "You" },
    ];
    setMessages(newMessages);
    await askGPT(newMessages);
    // console.log(messages);
  };
  return (
    <>
      <Box sx={{ display: "flex", m: 10, justifyContent: "center" }}>
        <Typography variant="h5">Bot</Typography>
        <TextField
          id="userInput"
          label="userInput"
          onChange={(e) => setUserInput(e.target.value)}
          variant="outlined"
        />
        <Button variant="contained" onClick={(e) => handleSendData(e)}>
          Submit
        </Button>
      </Box>
      <Box>
        {messages.map((messageObject) => {
          return (
            <Box
              key={uniqueId()}
              sx={{ display: "flex", m: 10, justifyContent: "center" }}
            >
              <Typography variant="h5">{messageObject.sender}: </Typography>
              <Typography variant="h5">{messageObject.message}</Typography>
            </Box>
          );
        })}
        {loading && <Typography variant="h5">Loading...</Typography>}
      </Box>
    </>
  );
};

export default Bot;
