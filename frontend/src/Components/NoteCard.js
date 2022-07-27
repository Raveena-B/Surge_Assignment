import React from "react";
import Card from "@mui/material/Card";
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
  setOpen,
  user,
}) => {
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
          title={note.title}
          firstName={user.firstName}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.description}
            {user.lastName}
          </Typography>
        </CardContent>
      </Card>
      <Dialog
        open={modalOpen}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Details of the User"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p> {user.firstName}First Name :</p>
            <p>{user.lastName}Last Name:</p>
            <p>{user.email} Email :</p>
            <p>{user.mobile} Mobile :</p>
            <p>{user.dateOfBirth} Date Of Birth :</p>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NoteCard;
