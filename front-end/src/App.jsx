import { Button, Container } from '@chakra-ui/react'
import {Navigate, Route, Routes} from 'react-router-dom'
import UserPage from './pages/UserPage';
import Header from './components/Header';
import PostPage from './pages/PostPage';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import { useRecoilValue } from 'recoil';
import userAtom from './atoms/userAtom';
import LogoutButton from './components/LogoutButton';
import UpdateProfilePage from './pages/UpdateProfilePage';



function App() {

  const user = useRecoilValue(userAtom);

  return (
    <>
    <Container maxW={'230px'} bg={'black'}></Container>
    <Container maxW={"680px"}>
      <Header />
      <Routes>
        <Route path='/' element={user ? <HomePage /> : <AuthPage />}/>
        <Route path='/auth' element={!user ? <AuthPage /> : <Navigate to="/"/>} />
        <Route path='/update' element={user ? <UpdateProfilePage /> : <Navigate to="/auth"/>} />

        <Route path='/:username' element={<UserPage />}/>
        <Route path='/:username/post/:pid' element={<PostPage />}/>
      </Routes>

      {user && <LogoutButton />}
    </Container>
    </>

  )
};

export default App
