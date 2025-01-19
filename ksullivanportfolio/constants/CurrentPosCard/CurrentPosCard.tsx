import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LowesProImage from "../images/lowesPro.png";
import Image from "next/image";
import profilePicture from "../images/profile.png";

export default function MediaCard() {
  return (
    <div>
      <Card sx={{ maxWidth: 345, boxShadow: 10 }}>
        <Image
          src={LowesProImage}
          alt="Picture of me"
          className="rounded-full"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Pro Sales Specialist
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            Lowes
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            North Smithfield RI
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Assisting Pro customers with their business needs by sourcing
            materials and providing quotes with the best possible pricing.
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button size="large">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
