import { Flex, Link, Avatar, Text, Box, Image, Divider } from "@chakra-ui/react"
import { BsThreeDots } from "react-icons/bs"
import PostActions from "./PostActions"
import { Link as ReactRouterLink} from "react-router-dom"
import { useState } from "react"


const UserPost = (props) => {

    const [liked, setLiked] = useState(false);

    return(
        <Link as={ReactRouterLink} to={'/rehan/post/1'}>
            <Flex gap={3} mb={4} py={5}>

                <Flex flexDirection={'column'} alignItems={'center'}>
                    <Avatar size='md' name='Rehan Haider' src='/RehanHaider.JPG' />
                </Flex>

                <Flex flex={1} flexDirection={'column'} gap={2}>

                    <Flex justifyContent={'space-between'} w={'full'}>
                        <Flex w = {'full'} alignItems={'center'}>
                            <Text fontSize={'sm'} fontWeight={'bold'}>REHAN HAIDER</Text>
                        </Flex>
                        <Flex gap={4} alignItems={'enter'}>
                            <Text fontSize={'md'} color={'black.neutral'}>Jobs/Internships</Text>
                            <Text fontSize={'sm'} color={'black.neutral'}> 1d</Text>
                            <BsThreeDots/>

                        
                        </Flex>

 
                    </Flex>
                    <Text fontSize={'l'}>{props.postTitle}</Text>

                    {props.postImg && (
                         <Box borderRadius={6} overflow={'hidden'} border={'1px solid'} borderColor={'gray'}>
                             <Image src={props.postImg} w={'full'}/>
                         </Box>
                    )}



                    <Flex gap={3} mt={0}>
                        <PostActions liked={liked} setLiked={setLiked}/>
                    </Flex>
                    <Flex gap={1} alignItems={'center'}>
                        <Text color={'black.neutral'} fontSize={'sm'}>{props.replies} replies</Text>
                        <Box w={0.5} h={0.5} borderRadius={'full'} bg = {'black.natural'} color={'#ffffff'}></Box>
                        <Text color={'black.neutral'} fontSize={'sm'}>{props.likes + (liked? 1:0)} likes</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Divider borderColor={'black.neutral'} my={0}/>
        </Link>
                    

    )
}

export default UserPost