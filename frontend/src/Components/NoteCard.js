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
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const NoteCard = ({
  note,
  handleDelete,

  setDeleteNote,
  modalOpen = false,
  user,
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
            <p>First Name : {user?.firstName}</p>
            <p>Last Nme : {user?.lastName}</p>
            <p>Email : {user?.email}</p>
            <p>Mobile : {user?.mobile}</p>
            <p>Date Of Birth : {user?.dateOfBirth}</p>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NoteCard;
