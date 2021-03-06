import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

const AddToPlaylistIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToPlaylists = (e) => {
    e.preventDefault();
    context.addToPlaylist(movie);   // add playlist
    console.log(movie.original_title);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToPlaylists}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToPlaylistIcon;