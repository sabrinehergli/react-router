import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FormControl, Modal, Button, Form } from "react-bootstrap";
import "./AddMovie.css";

function AddMovie({ newMovie, setNewMovie, newMovieData, setNewMovieData }) {
    const [show, setShow] = useState(false);

    const handleSave = () => {
        if (
            newMovieData.Title !== "" &&
            newMovieData.Description !== "" &&
            newMovieData.PosterUrl !== "" &&
            newMovieData.Rating !== 0 &&
            newMovie.TrailerUrl !==""
        ) {
            setNewMovie([...newMovie, newMovieData]);
            setNewMovieData({
                id:uuidv4(),
                Title: "",
                Description: "",
                PosterUrl: "",
                Rating: 0,
                TrailerUrl:"",
            });

            setShow(false);
        } else {
            alert("All fields are mandatory");
        }
        
    };
    const handleClose = () => {
        setShow(false);
        setNewMovieData({
            Title: "",
            Description: "",
            PosterUrl: "",
            Rating: 0,
            
        });
    };
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className="Add"  variant="secondary" onClick={handleShow}>
                <img
                    style={{ cursor: "pointer" , marginBottom:'20px'}}
                    src="https://icons.iconarchive.com/icons/custom-icon-design/mono-general-1/512/add-icon.png"
                    width="260px"
                    height="190px"
                    alt="Add movie"
                />{" "}
               <div > <p>Add a new movie</p></div>
            </Button>

            <Modal show={show} onHide={handleClose} animation={false} >
                <Modal.Header closeButton>
                    <Modal.Title>Add a new movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                   
                        <FormControl
                            type="text"
                            placeholder="Add movie title..."
                            className="Input"
                            name="Title"
                            onChange={(e) => {
                                setNewMovieData({
                                    ...newMovieData,
                                    [e.target.name]: e.target.value,
                                });
                            }}
                        />
                         <FormControl
                            type="text"
                            placeholder="Add movie info..."
                            className="Input"
                            name="Info"
                            onChange={(e) => {
                                setNewMovieData({
                                    ...newMovieData,
                                    [e.target.name]: e.target.value,
                                });
                            }}
                        />
                        <FormControl
                            as="textArea"
                            type="text"
                            placeholder="Add movie description..."
                            className="Input"
                            name="Description"
                            onChange={(e) => {
                                setNewMovieData({
                                    ...newMovieData,
                                    [e.target.name]: e.target.value,
                                });
                            }}
                        />
                        <FormControl
                            type="text"
                            placeholder="Add movie poster url..."
                            className="Input"
                            name="PosterUrl"
                            onChange={(e) => {
                                setNewMovieData({
                                    ...newMovieData,
                                    [e.target.name]: e.target.value,
                                });
                            }}
                        />
                        <FormControl
                            type="text"
                            placeholder="Add movie trailer url..."
                            className="Input"
                            name="TrailerUrl"
                            onChange={(e) => {
                                setNewMovieData({
                                    ...newMovieData,
                                    [e.target.name]: e.target.value,
                                });
                            }}
                        />
                        <FormControl
                            type="number"
                            max="5"
                            min="1"
                            placeholder="Addnpm movie rating..."
                            className="Input"
                            name="Rating"
                            onChange={(e) => {
                                setNewMovieData({
                                    ...newMovieData,
                                    [e.target.name]: parseInt(e.target.value),
                                });
                            }}
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" style={{backgroundColor:"#021E39"}} onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddMovie;
