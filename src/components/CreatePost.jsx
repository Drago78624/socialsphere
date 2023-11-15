import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ImageIcon from "@mui/icons-material/Image";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button, TextField } from "@mui/material";

const CreatePost = () => {
  return (
    <Card sx={{ marginBottom: "20px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            M
          </Avatar>
        }
        title="Muhammad Maaz Ahmed"
      />
      {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
      <CardContent>
        <TextField
          id="filled-basic"
          variant="standard"
          placeholder="Share your thoughts...."
          multiline
          fullWidth
        />
      </CardContent>
      <CardActions>
        <IconButton component="label" aria-label="add to favorites" sx={{ marginRight: "auto" }}>
          <input type="file" hidden />
          <ImageIcon />
        </IconButton>
        <Button>Post</Button>
      </CardActions>
    </Card>
  );
};

export default CreatePost;
