<Navbar inverse collapseOnSelect style={{paddingBottom: "30px"}}>
    <Navbar.Header>
        <Button className="botonEscapeHatch"type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
        </Button>
        <a className="navbar-brand">
            <img className="logo img-responsive" src={logo} alt="logo"/>
        </a>
        <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
        <Nav style={{paddingTop: "30px"}} pullRight>
            <NavItem className="itemMenu">
                <a href="#inicio">Inicio</a>
            </NavItem>
            <NavItem className="itemMenu">
                <a href="#servicios">Servicios</a>
            </NavItem>
            <NavItem className="itemMenu">
                <a href="#galeria">Galeria</a>
            </NavItem>
            <NavItem className="itemMenu">
                <a href="#contacto">Contacto</a>
            </NavItem>
        </Nav>
    </Navbar.Collapse>
</Navbar>