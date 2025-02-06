import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import "./Cards.css";

const AlbumCard = ({ image, albumName, follows }) => {
  return (
    <Card className="album-card">
      {/* Album Image */}
      <CardMedia
        
      />

      {/* Bottom Section */}
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {/* Album Name */}
        <Typography variant="h6" noWrap>
          {albumName}
        </Typography>

        {/* Follows Count as a Chip */}
        <Chip label={`${follows} Follows`} size="small" color="primary" />
      </CardContent>
    </Card>
  );
};

export default AlbumCard;