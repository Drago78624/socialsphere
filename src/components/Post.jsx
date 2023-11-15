import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CatImg from "../assets/cat.png";
import CommentIcon from "@mui/icons-material/Comment";
import { Anchorme } from "react-anchorme";
import { Badge, Box, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import CommentSection from "./CommentSection";

const Post = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showCommentSection, setShowCommentSection] = useState(false)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Card sx={{ marginTop: "20px" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              M
            </Avatar>
          }
          action={
            <>
              <IconButton
                aria-controls="menu-post"
                aria-haspopup="true"
                onClick={handleMenu}
                aria-label="settings"
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="menu-post"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={handleClose}
                  component={Link}
                  to="/profile/xyz"
                >
                  Edit
                </MenuItem>
                <MenuItem onClick={handleClose}>Delete</MenuItem>
              </Menu>
            </>
          }
          title="Muhammad Maaz Ahmed"
          subheader="2 hours ago"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <Anchorme target="_blank">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like. youtube.com
            </Anchorme>
          </Typography>
        </CardContent>
        <CardMedia component="img" image={CatImg} alt="Paella dish" />
        <CardActions disableSpacing>
          <Box display="flex" alignItems="center">
            <IconButton aria-label="like">
              <FavoriteIcon color="secondary" />
            </IconButton>
            <Typography>24</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <IconButton aria-label="comment" onClick={() => setShowCommentSection(!showCommentSection)}>
              <CommentIcon />
            </IconButton>
            <Typography>24</Typography>
          </Box>
        </CardActions>
      </Card>
      {showCommentSection && <CommentSection />}
    </>
  );
};

export default Post;
