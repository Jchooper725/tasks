import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <h1>This is heading text</h1>
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
                <span style={{ color: "red" }}>Jackson Hooper</span>
            </p>
            <ul>
                <li>First</li>
                <li>Second</li>
                <li>Third</li>
            </ul>
            <img
                src="../Users/jacksonhooper/Downloads/grammer_flyer.png"
                alt="a flyer about apostrophies"
            />
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col style={{ backgroundColor: "red" }}>First Column</Col>
                    <Col>Second Column</Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
