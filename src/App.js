import {useState} from 'react';
import {
  Routes,
  Outlet,
  Route,
} from "react-router-dom";
import Container from '@mui/material/Container';
import Header from './components/header/Header';
import Main from './pages/Main';
import About from './pages/About';
import AddNote from './pages/AddNote';

const Layout = () => {
  return (
    <>
      <Header />
      <Container style={{ marginTop: "100px" }}>
        <Outlet />
      </Container>
    </>
  )
}

function App() {

  const [items, setItems] = useState([{id: 1, title: "This is test note", text: "If you want, you can edit or delete this note."}]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main items={items} />} />
        <Route path="about" element={<About />} />
        <Route path="add" element={<AddNote />} />
        <Route path="*" element={<div>Not Found!</div>} />
      </Route>
    </Routes>
  );
}

export default App;
