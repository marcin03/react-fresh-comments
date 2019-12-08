import React from 'react';
import {useDispatch} from 'react-redux';
import {
  TextField,
  Button,
} from '@material-ui/core';
import {addComment} from './../../store/actions';
import SaveIcon from '@material-ui/icons/Save';

export const AddCommentForm = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [body, setBody] = React.useState("");
  const dispatch = useDispatch();
  const handleSaveComment = ()=>{
    if(!name||!email||!body){
      return;
    }
    dispatch(addComment({name, email, body}))
    setName("");
    setEmail("");
    setBody("")
  }
  return (
    <form noValidate autoComplete="off">
      <div className="form-field">
        <TextField
          id="standard-multiline-flexible"
          label="Name"
          multiline
          rowsMax="4"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
      </div>
      <div className="form-field">
        <TextField
          id="standard-textarea"
          label="Email"
          multiline
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
      <div className="form-field">
        <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows="4"
          value={body}
          onChange={(e)=>setBody(e.target.value)}
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<SaveIcon />}
        onClick = {handleSaveComment}
      >
        Save Comment
      </Button>
    </form>
  );
};
