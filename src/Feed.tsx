import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Avatar,
  Divider,
} from "@mui/material";
import Likes from "./likes";
import FollowButton from "./follow";

const posts = [
  {
    id: 1,
    username: "JohnDoe",
    likes: ["JohnDoe", "JaneSmith"],
    isFollowing: true,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. #React #WebDev",
  },
  {
    id: 2,
    username: "JaneSmith",
    likes: ["John Deer", "Jane Smack"],
    isFollowing: false,
    content:
      "Just launched my new website! Check it out at example.com 🚀 #WebDevelopment",
  },
];

const Post = ({ post }) => (
  <div style={{ marginBottom: 20 }}>
    <Avatar style={{ marginRight: 10 }}>{post.username[0]}</Avatar>
    <div>
      <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
        {post.username}
      </Typography>
      <Typography variant="body1">{post.content}</Typography>
      <Likes likes={post.likes} />
      <FollowButton onFollow={() => {}} isFollowing={post.isFollowing} />
    </div>
  </div>
);

const FeedPage = () => {
  const [postData, setPostData] = useState({ content: "" });

  const handlePost = async () => {
    try {
      const response = await fetch("/api/addpost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
        <Typography variant="h5" style={{ marginBottom: 10 }}>
          Feed
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="post-input"
          label="What's happening?"
          name="post"
          multiline
          rows={4}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: 10 }}
          onClick={handlePost}
        >
          Poster
        </Button>
        <Divider style={{ margin: "20px 0" }} />
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Paper>
    </Container>
  );
};

export default FeedPage;
