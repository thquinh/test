import { Col, Row } from 'react-bootstrap';
import { IoLogoOctocat } from 'react-icons/io'

const AppHeader = () => {
    return (
        <Row style={{textAlign: 'center', backgroundColor: 'wheat'}}>
            <Col>
                <IoLogoOctocat 
                size={50}
                color='orange'
                />
            </Col>
            <Col>
                <h3 style={{color: 'orange', paddingTop: '10px'}}>A basic To-do List</h3>
            </Col>
        </Row>
    );
}

export default AppHeader;