import React,{useState} from 'react'
import { Button, Modal , Form } from 'react-bootstrap';

const AddMovie = ({addMovie}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newMovie, setnewMovie] = useState([]);
    const handleChange =(e)=>{
        setnewMovie({...newMovie,[e.target.name]:e.target.value})
    }
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Add New Movie
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Movie Name</Form.Label>
                            <Form.Control onChange={handleChange} name="name" type="text" placeholder="Enter your movie name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Movie description</Form.Label>
                            <Form.Control onChange={handleChange} name="description" type="text" placeholder="Enter your description" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Movie poster</Form.Label>
                            <Form.Control onChange={handleChange} name="posterurl" type="text" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Movie rate</Form.Label>
                            <Form.Control onChange={handleChange} name="rating" type="number" placeholder="Enter email" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>{addMovie(newMovie);handleClose()}}>
                    Save
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
);
    }
