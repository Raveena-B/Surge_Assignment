import React, { useState } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { IconButton, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const NoteCard = ({
  note,
  handleDelete,
  updateHandler,
  setDeleteNote,
  modalOpen = false,
  user,
  id,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Card elevation={3} sx={{ m: 1 }}>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>}
          action={
            <IconButton>
              <DeleteOutlinedIcon
                onClick={() => {
                  handleDelete(note._id);
                  setDeleteNote(true);
                }}
              />
              {/* <EditIcon onClick={() => (updateHandler = note.id)} /> */}
            </IconButton>
          }
          title={note?.title ? note?.title : user?.firstName}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note?.description}
            {user?.lastName}
          </Typography>
          <Button
            onClick={() => {
              setOpen(true);
            }}
          >
            View More
          </Button>
        </CardContent>
      </Card>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Details of the User"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p> {user?.firstName}</p>
            <p>{user?.lastName}</p>
            <p>{user?.email}</p>
            <p>{user?.mobile}</p>
            <p>{user?.dateOfBirth}</p>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NoteCard;
