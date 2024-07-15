import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil';
import userAtom from '../atoms/userAtom';

const HomePage = () => {

  const user = useRecoilValue(userAtom);
  return (
    <>
    {user && <Link to={'/rehan'}>
        <Flex w={'full'} justifyContent={'center'}>
            <Button mx={'aurot'}>Your User Profile Page Bro</Button>
        </Flex>
    </Link>}
    </>
  )

}

export default HomePage