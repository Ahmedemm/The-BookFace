// FeedPage.js

import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Avatar,
  Divider,
} from "@mui/material";
import Likes from "../components/Likes";
import FollowButton from "../components/Follow";
import NotificationBell from "../components/NotificationsBell";
import { Link } from "react-router-dom";

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

const FeedPage = () => {
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
        <Button variant="contained" color="primary" style={{ marginTop: 10 }}>
          Poster
        </Button>
        <Link to="/login">Login</Link>

        <Divider style={{ margin: "20px 0" }} />
        {posts.map((post) => (
          <div key={post.id} style={{ marginBottom: 20 }}>
            <Avatar style={{ marginRight: 10 }}>{post.username[0]}</Avatar>
            <div>
              <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                {post.username}
              </Typography>
              <Typography variant="body1">{post.content}</Typography>
              <Likes likes={post.likes} />
              <FollowButton
                onFollow={() => {}}
                isFollowing={post.isFollowing}
              />
              <NotificationBell notifications={[]} />
            </div>
          </div>
        ))}
      </Paper>
    </Container>
  );
};

export default FeedPage;
