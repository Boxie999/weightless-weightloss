import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col } from "react-bootstrap";

const QuickWorkout = () => {
  return (
    <Container fluid>
        <div className="jumbotron jumbotron-fluid" style={{textAlign: "center"}}>
            <h1 className="display-4">Quick Workout</h1>
            <br />
            <p className="lead">Don't know where to start? We've got you covered! <br /> <br />
            Just choose a body region below and get started on a 
            </p>
            <hr className="my-4" />
            <p>Let's get your body moving and your blood pumping!
            <br /> <br />
            Click below to get started with a quick workout, or build your custom workout session. 
            </p>
            <br /> <br />
            
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Row>                        
                        <Col>
                            <Button className="btn btn-primary btn-lg" type="button" onClick= {(() => {
                            window.location.href = "/buildworkout"
                            })}>
                            Start Workout
                            </Button>
                        </Col>
                    </Row>                  

                </Col>                            
                
            </Row>
            
        </div>
    </Container>
  )
}

export default QuickWorkout