import './App.css';
import { Navbar, Container, Nav, Alert} from "react-bootstrap";
import { Routes, Route, Link} from "react-router-dom";
import Shop from './components/Shop';
import NotFound from './components/NotFound';
import ShopItems from './components/ShopItems';
import { useState, useEffect } from 'react';
import Login from './components/Login';
import { useSelector,useDispatch } from "react-redux";
import {setUserNameState} from './store/dataSlice';


function App() {
  const [inputValue, setInputValue] = useState('1');
  const userName =  useSelector((state) => state.data.userName);
  let storeName = localStorage.getItem('userName');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserNameState(storeName))
}, []);

  return ( <> 
{(storeName == null) ? '' : <Alert>Hello {userName}</Alert>}

  <div className='text-left'>
  <h5>Номер товара на который перейти <input defaultValue={inputValue} onKeyUp={e => setInputValue(e.currentTarget.value)}/></h5>
  
  </div>
   <Navbar bg="light" expand="lg">
    <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Link className="nav-link" to="/products"><b>В магазин</b></Link>
            <Link className="nav-link ml-3" to={`/product/${inputValue}`}><b>Перейти на страницу товара</b></Link>
        </Nav>
    </Navbar.Collapse>
</Container>
</Navbar>

    <div className="App">
            <Routes>
                <Route path="/" element={<Shop storeName={storeName}/>} />
                <Route path="/login" element={<Login storeName={storeName}/>} />
                <Route path="products" element={<Shop storeName={storeName}/>} />
                <Route path="product/:id" element={<ShopItems storeName={storeName}/>} />
                <Route path="*" element={<NotFound storeName={storeName}/>} />
            </Routes>
    </div>
    </>
  );
}

export default App;
