import React from 'react'
import '../App.css'
import Table from 'react-bootstrap/Table';
import AddTiketButton from './AddTiketButton';
import { Container, Row, Col } from 'react-bootstrap';

class ListTiket extends React.Component {

    state = {
        todos: []
    }

    componentDidMount() {
        fetch('http://localhost:8080/tiket')
            .then(res => res.json())
            .then((data) => {
                this.setState({ todos: data })
                console.log(data);
            })
    }

    render() {
        return (
            <div className="container">
                <h1>Tiket</h1>
                <Container>
                    <Row>
                        <Col></Col>
                        <Col md="auto"></Col>
                        <Col xs lg="2">
                            <AddTiketButton></AddTiketButton>
                        </Col>
                    </Row>
                </Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id Tiket</th>
                            <th>Judul tiket</th>
                            <th>Nama PIC</th>
                            <th>Level</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos.map((data) => (
                            <tr>
                                <td>{data.idTiket}</td>
                                <td>{data.judulTiket}</td>
                                <td>{data.idPic.nama}</td>
                                <td>{data.level}</td>
                                <td>{data.status}</td>
                            </tr>
                        ))}
                    </tbody>

                </Table>
            </div>
        );
    }

}

export default ListTiket;