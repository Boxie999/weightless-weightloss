import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col } from "react-bootstrap";

const Home2 = () => {

    // function handleClick(route) {
    //     window.location.href = `/${route}`;
    
    // }
    
  return (
    <Container fluid>
        <div className="jumbotron jumbotron-fluid" style={{textAlign: "center"}}>
            <h1 className="display-4">Welcome to SimpleFit!</h1>
            <br />
            <p className="lead">No muss, no fuss... No weights, no skates... <br /> <br />

            Just simple exercises and workouts to keep you active. <br /> <br />
            You can do them anytime, anywhere and with no equipment required.
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
                            <Button className="btn btn-primary btn-lg" type="button" onClick={(() => {
                            window.location.href = "/quickworkout"
                            })}>
                            Quick Workout
                            </Button>
                        </Col>
                        <Col>
                            <Button className="btn btn-primary btn-lg" type="button" onClick= {(() => {
                            window.location.href = "/buildworkout"
                            })}>
                            Build Your Workout
                            </Button>
                        </Col>
                    </Row>                  

                </Col>                            
                
            </Row>
            
        </div>
    </Container>
    
  )
}

export default Home2