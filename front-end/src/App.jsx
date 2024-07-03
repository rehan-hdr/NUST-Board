import { Button, Container } from '@chakra-ui/react'
import {Route, Routes} from 'react-router-dom'
import UserPage from './pages/UserPage';
import Header from './components/Header';
import PostPage from './pages/PostPage';



function App() {

  return (
    <>
    <Container maxW={'230px'} bg={'black'}></Container>
    <Container maxW={"680px"}>
      <Header />
      <Routes>
        <Route path='/:username' element={<UserPage />}/>
        <Route path='/:username/post/:pid' element={<PostPage />}/>
      </Routes>
    </Container>
    </>

  )
};

export default App
