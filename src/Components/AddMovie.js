
import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

function AddMovie({addmovie}) {

const [show, setShow] = useState(false);
const [title, settitle] = useState("");
const [description, setdescription] = useState("");
const [posterUrl, setposterUrl] = useState("");
const [rate, setrate] = useState(1);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const handleadd=()=>{
    if(title && description && posterUrl && rate){
        addmovie({title,description,posterUrl,rate,id:Math.random()}); handleClose()
    }
}
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        AddMovie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form>
  <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Title</Form.Label>
    <Form.Control type="Text" placeholder="Enter title" onChange={(e)=>settitle(e.target.value)}/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Description</Form.Label>
    <Form.Control type="Text" placeholder="Enter Description" onChange={(e)=>setdescription(e.target.value)}/>
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>PosterUrl</Form.Label>
    <Form.Control type="Text" placeholder="Enter PosterUrl" onChange={(e)=>setposterUrl(e.target.value)}/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicNumber">
    <Form.Label>Rate</Form.Label>
    <Form.Control type="Number" placeholder="Enter rate" onChange={(e)=>setrate(e.target.value)} />
  </Form.Group>

  </Form>

</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleadd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default AddMovie