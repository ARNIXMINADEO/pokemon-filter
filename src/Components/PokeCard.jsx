import { Button, Dropdown} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate,Navigate} from 'react-router-dom';

export const PokeCard = ({ pokemon,setPokeName }) => {
    const { id, name, sprites, stats } = pokemon;
    const navigate = useNavigate()
    return (
        <>

            <li style={{ listStyle: "none" }} key={id}>
                <Card style={{ width: '10rem' }}>
                    <Card.Img variant="top" src={sprites.front_default} />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}>{name}</Card.Title>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
                    <Dropdown>
                        <Dropdown.Toggle style={{ width: 100 + "%" }} variant="success" id="dropdown-basic">
                            Stats
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">{stats.map((stat) => {
                                return stat.stat.name === "hp" ? [stat.stat.name + " : ", stat.base_stat] : [];
                            })} </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">{
                                stats.map((stat) => {
                                    return stat.stat.name === "attack" ? [stat.stat.name + " : ", stat.base_stat, <br></br>] : [];
                                })
                            }</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">{
                                stats.map((stat) => {
                                    return stat.stat.name === "speed" ? [stat.stat.name + " : ", stat.base_stat, <br></br>] : [];
                                })
                            }</Dropdown.Item>
                            <Dropdown.Item>ID : {id}</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Card.Body style={{ textAlign: 'center' }}>
                        <Link to={`/${name}`} style={{textDecoration : "none"}}>More info</Link>
                    </Card.Body>
                </Card>
            </li>
        </>

    )
}
