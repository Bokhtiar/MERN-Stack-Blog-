import React from 'react'
import { Navbar, Container, Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'


export default function Header() {
  return (
    <section>
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Blogs</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px', marginLeft: '220px' }}
                    navbarScroll
                >
                    <Nav.Link href={'/'}>Home</Nav.Link>
                    <Nav.Link href={`/blogs`}>Blog</Nav.Link>

                    <NavDropdown title="Profile" id="navbarScrollingDropdown">
                        <NavDropdown.Item href={'/login'}>Login</NavDropdown.Item>
                        <NavDropdown.Item href={'/register'}>Register</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    </section>
  )
}
