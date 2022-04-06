import * as React from 'react'
import Content from "../globalComponent/Content";
import {Accordion, Button, Col, Form, Modal, Row} from "react-bootstrap";
import OcenyService from "../services/OcenyService";

interface Props {

}

interface State {
    modal: boolean,
    oceny: any,
    editOcena: any,
    edit: boolean,
    loading: boolean
}

export default class OcenyView extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            modal: false,
            oceny: [],
            editOcena: {
                symbolicGrade: '',
                minPercentage: '',
                descriptiveGrade: ''
            },
            edit: false,
            loading: true
        };
    }

    componentDidMount() {
        this.pobierzOceny();
    }

    pobierzOceny = () => {
        OcenyService.getOceny().then((response) => {
            this.setState({oceny: response.data, loading: false});
        }).catch((e) => {
            alert(e)
        })
    }

    onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
        const {name, value}: any = e.target;
        let input: any = this.state.editOcena;

        input[name]=value;

        this.setState({editOcena: input});
    }

    czyscModele = () => {
        this.setState({editOcena: {
                symbolicGrade: '',
                minPercentage: '',
                descriptiveGrade: ''
            }, edit: false
        });
    }

    dodajZmienOcene = (e: any) => {
        e.preventDefault();
        let dane = this.state.editOcena;

        if(this.state.edit){
            OcenyService.editOcene(dane).then((response) => {
                this.setState({modal: false});
                this.pobierzOceny();
                this.czyscModele();
                alert('Edytowano ocene');
            }).catch((e) => {
                alert('Błąd dodania oceny');
            })
        } else {
            OcenyService.addOcene(dane).then((response) => {
                this.setState({modal: false});
                this.pobierzOceny();
                this.czyscModele();
                alert('Dodano ocene');
            }).catch((e) => {
                alert('Błąd dodania oceny');
            })
        }
    }

    onDeleteOcena = (id: number) => {
        if(window.confirm('Czy na pewno usunąć ocene o id='+id))
        {
            OcenyService.deleteOcena(id).then((response) => {
                this.pobierzOceny();
            }).catch((e) => {
                console.log('error');
            })
        }
    }

    onEditOcena = (obj: any) => {
        this.setState({editOcena: {
                symbolicGrade: obj.symbolicGrade,
                minPercentage: obj.minPercentage,
                descriptiveGrade: obj.descriptiveGrade,
                id: obj.id
            }, edit: true, modal: true});
    }

    render() {
        let {modal, editOcena, edit, oceny, loading} = this.state;
        return(
            <Content>
                <h2>Oceny</h2>

                <div className={'panelButton'}>
                    <Button onClick={() => this.setState({modal: true})}>Dodaj ocene</Button>
                </div>

                {(loading)?
                    <h5>Ładowanie danych...</h5>
                :
                    <Row style={{display: 'block'}}>
                        <Col>
                            <Accordion defaultActiveKey="0" alwaysOpen={true}>
                                {oceny.map((ocena: any) => {
                                    return <Accordion.Item eventKey={ocena.id}>
                                        <Accordion.Header>
                                            <div className={'headerOcena'}>
                                                <Row>
                                                    <Col><b>Nazwa oceny:</b> {ocena.symbolicGrade}</Col>
                                                    <Col><b>Próg procentowy:</b> {ocena.minPercentage} %</Col>
                                                    <Col>
                                                        <div className={'akcja'}>
                                                            <i className={'fa fa-pencil edit'} title={'Edytuj ogłoszenie'} onClick={() => this.onEditOcena(ocena)}/>
                                                            <i className={'fa fa-trash del'} title={'Usuń ogłoszenie'} onClick={() => this.onDeleteOcena(ocena.id)}/>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <b>Id: </b>
                                            {ocena.id}
                                            <hr/>
                                            <b>Opis: </b>
                                            {ocena.descriptiveGrade}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                })}
                            </Accordion>
                        </Col>
                    </Row>
                }

                {/*Modal do dodawania/edycji oceny*/}
                <Modal
                    show={modal}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {edit? 'Edutuj ocene' : 'Dodaj ocene'}
                        </Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={this.dodajZmienOcene}>
                    <Modal.Body>
                        <Form.Label>Nazwa</Form.Label>
                        <Form.Control type="text" required placeholder="Podaj nazwe..." name={'symbolicGrade'} value={editOcena.symbolicGrade} onChange={(e: any) => this.onChangeInput(e)}/>
                        <Form.Label>Próg procentowy</Form.Label>
                        <Form.Control type="number" required min={0} placeholder="Podaj wartosc min progu..." name={'minPercentage'} value={editOcena.minPercentage} onChange={(e: any) => this.onChangeInput(e)}/>
                        <Form.Label>Opis</Form.Label>
                        <Form.Control type="text" placeholder="Podaj opis..." name={'descriptiveGrade'} value={editOcena.descriptiveGrade} onChange={(e: any) => this.onChangeInput(e)}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => {this.setState({modal: false, edit: false}); this.czyscModele()}}>Anuluj</Button>
                        <Button type={'submit'}>{edit? 'Zapisz zmiany' : 'Dodaj ocene'}</Button>
                    </Modal.Footer>
                </Form>
                </Modal>
            </Content>
        )
    }
}
