import React, { useContext } from 'react'
import { Context } from '..';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink, useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate();

    const logOut = () => {
        user.setUser({});;
        user.setIsAuth(false);
    }

  return (
      <Navbar bg="dark" variant="dark">
        <Container>
        <NavLink style={{color: 'white', textDecoration: 'none'}} to={SHOP_ROUTE}>КупиДевайс</NavLink>
            {user.isAuth ? 
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button 
                        variant={"outline-light"} 
                        onClick={()=> navigate(ADMIN_ROUTE)}
                    >
                        Адмін панель
                    </Button>
                    <Button 
                        variant={"outline-light"} 
                        className="ms-2" 
                        onClick={()=> logOut()}
                    >
                        Вийти
                    </Button>
                </Nav>    
                :
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button variant={"outline-light"} onClick={()=> navigate(LOGIN_ROUTE)}>Авторизація</Button>
                </Nav>  
            }
        </Container>
      </Navbar>
  )
})

export default NavBar