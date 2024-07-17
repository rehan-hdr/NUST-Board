import { Box, VStack, Flex, Avatar, Text, LinkBox, Link, Button } from "@chakra-ui/react"
import {useRecoilValue} from 'recoil'
import userAtom from '../atoms/userAtom'
import {Link as RouterLink} from 'react-router-dom'

const UserHeader = ({user}) => {

    const currentUser = useRecoilValue(userAtom);
    return(
        <VStack gap={4} alignItems={'start'}>
            <Flex justifyContent={"space-between"} w={'full'}>
                <Box>
                    <Text fontSize={"2xl"} fontWeight={'bold'}>
                        {user.name}
                    </Text>
                    <Flex gap={2} flexDirection={'column'} alignItems={'start'}>
                        <Text fontSize={'l'}>{user.username}</Text>
                    </Flex>
                    
                </Box>
                <Box>
                    {user.profilePic && (
                    <Avatar
                        name={user.name}
                        src={user.profilePic}
                        size={'2xl'}
                    />)}
                    {!user.profilePic && (
                    <Avatar
                        name={user.name}
                        src= "htt[s://bit.ly/broken-link"
                        size={'2xl'}
                    />)}
                </Box>
            </Flex>

            <Text>{user.bio}</Text>

            {currentUser._id === user._id && (
                <Link as={RouterLink} to='/update'>
                    <Button size={'sm'}>Update Profile</Button>
                </Link>
            )}

            {}

            <Flex w={'full'} fontWeight={'bold'} justifyContent={'center'} borderRadius={'full'} bg = {'theme.neutral'} color={'#ffffff'}>
                POSTS
                </Flex>
        </VStack>
    )
}

export default UserHeader