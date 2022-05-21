import {ListGroup} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Sidebar = () => {
    
    return (
        <section>
            <ListGroup>
                <ListGroup.Item> <Link to={'/user/blog/list'}></Link> </ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
        </section>
    )
}
export default Sidebar