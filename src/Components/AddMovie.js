import { FloatingLabel, Form, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { Button, Rating } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const AddMovie = ({ movies, setMovies }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [addTitle, setTitle] = useState("");
  const [addDescription, setDescription] = useState("");
  const [addPosterURL, setPosterURL] = useState("");
  const [addVideoURL, setVideoURL] = useState("");
  const [addRating, setRating] = useState(0);

  const AddMovieFunction = (e) => {
    e.preventDefault();
    setMovies([
      ...movies,
      {
        id: Math.random(),
        title: addTitle,
        description: addDescription,
        posterURL: addPosterURL,
        videoURL: addVideoURL,
        rating: addRating,
      },
    ]);
    handleClose();
  };

  return (
    <div>
      <Button className="add_button" variant="outlined" onClick={handleShow}>
        Add a new Movie
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title style={{ color: "#fff" }}>Add a new Movie</Modal.Title>
          <CloseIcon onClick={handleClose} style={{ cursor: "pointer" }} />
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Movie title"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Enter the movie title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Movie description"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Enter the movie description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Movie poster URL"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Enter the movie poster URL"
              onChange={(e) => setPosterURL(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Movie trailer embed"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Enter the movie trailer embed link"
              onChange={(e) => setVideoURL(e.target.value)}
            />
          </FloatingLabel>
          <Rating
            name="simple-controlled"
            value={addRating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="modal-button-cancel"
            variant="secondary"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            className="modal-button-add"
            variant="primary"
            onClick={AddMovieFunction}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
