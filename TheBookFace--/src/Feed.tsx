// FeedPage.js
import React from 'react';

import { Container, Paper, Typography, TextField, Button, Avatar, Divider } from '@mui/material';

const posts = [
  {
    id: 1,
    username: 'JohnDoe',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. #React #WebDev',
  },
  {
    id: 2,
    username: 'JaneSmith',
    content: 'Just launched my new website! Check it out at example.com 🚀 #WebDevelopment',
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
        <Divider style={{ margin: '20px 0' }} />
        {posts.map((post) => (
          <div key={post.id} style={{ marginBottom: 20 }}>
            <Avatar style={{ marginRight: 10 }}>{post.username[0]}</Avatar>
            <div>
              <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                {post.username}
              </Typography>
              <Typography variant="body1">{post.content}</Typography>
            </div>
          </div>
        ))}
      </Paper>
    </Container>
  );
};

export default FeedPage;
