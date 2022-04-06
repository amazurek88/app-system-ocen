import * as React from 'react'
import Content from "../globalComponent/Content";
import {Col, Row} from "react-bootstrap";

export default class InfoView extends React.Component {

    //Strona informacje

    render() {
        return(
            <Content>
                <Row>
                    <Col>
                        <h2>Informacje</h2>
                        <h5>Aplikacja "System ocen" przygotowana przez: <i>Aleksandrę Mazurek</i></h5>
                    </Col>
                </Row>
            </Content>
        )
    }
}
