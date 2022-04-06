import * as React from 'react'
import Content from "../globalComponent/Content";
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";

export default class Page404 extends React.Component {

    //Strona wyswietlana gdy zły adres aplikacji

    render() {
        return(
            <Content>
                <Row style={{width: '100%', marginTop: '50px'}}>
                    <Col style={{textAlign: 'center'}}>
                        <h3><i className={"fa fa-exclamation-triangle"}/>
                            <span>Nie ma takiego adresu w aplikacji!</span></h3>
                        <p><Link to={"/"} style={{display: 'block'}}>Kliknij tutaj aby powrócić</Link></p>
                    </Col>
                </Row>
            </Content>
        )
    }
}
