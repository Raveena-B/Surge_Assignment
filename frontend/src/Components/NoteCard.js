import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { IconButton, Typography } from "@mui/material";
// import makeStyles from "@mui/material/styles";
import { deepOrange } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

// const useStyles = makeStyles({
//   avatar: {
//     backgroundColor: "yellow",
//   },
// });
const NoteCard = ({ note, handleDelete }) => {
  //   const classes = useStyles(note);
  return (
    <div>
      <Card elevation={2}>
        <CardHeader
          avatar={
            // <Avatar className={classes.avatar}>
            //   {note.title[0].toUppercase()}
            // </Avatar>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
          }
          action={
            <IconButton onClick={() => (handleDelete = note.id)}>
              <DeleteOutlinedIcon />
            </IconButton>
          }
          title={note.title}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
