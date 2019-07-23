import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export default class FormInputTiket extends React.Component {

    state = {
        todos: [],
        judulTiket='',
        testPost: {
            "idTiket": "692931f7-21f6-4fcc-8cdf-51ebccd4d8ee",
            "judulTiket": this.judulTiket,
            "idPic": { "idPic": "692931f7-21f6-4fcc-8cdf-51ebccd4d8ee" },
            "level": "standart",
            "status": "open",
            "detailTiket": [
                //     {
                //     "pengirim": "Agen",
                //     "penerima": "Pic",
                //     "pesan": "test",
                //     "idgambar": ""
                // }
            ]
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        const judulTiket = this.refs.judulTiket.value;
        this.setState({judulTiket});
        return fetch('http://localhost:8080/tiket', {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state.testPost)
        })
            .then(response => {
                console.log(response);
            })

    }

    render() {
        return (
            <div className="container">
                <h1>Tambah Tiket</h1><br></br>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Judul Tiket</Form.Label>
                        <Form.Control ref="judulTiket" type="text" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Level Bug</Form.Label>
                        <Form.Control as="select">
                            <option>standart</option>
                            <option>urgent</option>
                        </Form.Control>
                    </Form.Group>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col xs lg="2">
                                    <Button as="input" type="submit" value="Simpan" />
                            </Col>
                            <Col xs lg="2">
                                <Button as="input" type="reset" value="Reset" />
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </div>
        )
    }

}
