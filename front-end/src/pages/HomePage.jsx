import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <Link to={'/rehan'}>
        <Flex w={'full'} justifyContent={'center'}>
            <Button mx={'aurot'}>Your User Profile Page Bro</Button>
        </Flex>
    </Link>
  )
}

export default HomePage