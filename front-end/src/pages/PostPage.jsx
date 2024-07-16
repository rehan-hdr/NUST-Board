import { Avatar, Box, Divider, Flex, Image, Text } from "@chakra-ui/react"
import { BsThreeDots } from "react-icons/bs"
import PostActions from "../components/PostActions"
import { useState } from "react";
import Comment from "../components/Comment";

const PostPage = () => {

    const [liked, setLiked] = useState(false);
    return(

        <>
            <Flex>
                <Flex w={'full'} gap={3} alignItems={'center'}>
                        <Avatar name='Rehan Haider' src='/RehanHaider.JPG' size={'md'}/>
                        <Text fontSize={'sm'} fontWeight={'bold'}>
                            Rehan Haider
                        </Text>
                </Flex>
                <Flex gap={4} alignItems={'center'}>

                <Text fontSize={'md'} color={'black.neutral'}>CampusEvents</Text>

                    <Text fontSize={'sm'}>
                        1d
                    </Text>
                    <BsThreeDots/>

                </Flex>
            </Flex>



            <Text my={3} fontSize={'lg'}>Executive Recruitment Deadline Extended!!! Apply Now!</Text>

            <Text my={3} fontSize={'md'}>
                            Breaking news, future execs!<br></br>
                The hunt for the best of the best for ON'24 isn't over yet.<br></br> 
                <b>Deadline extended to July 6th, 2024, 11:59 PM.</b><br></br>
                Ready to step up and shine?<br></br>

                Tu Phir Shuru Karein?<br></br>
                #ON24
            </Text>



            <Box borderRadius={6} overflow={'hidden'} border={'1px solid'} borderColor={'gray'}>
                <Image src='/onust.jpeg' w={'full'}/>
            </Box>

            <Flex gap={2} alignItems={'center'}>
                <PostActions liked={liked} setLiked={setLiked}/>
            </Flex>

            <Flex gap={2} alignItems={'center'}>
            <Text color={'black.neutral'} fontSize='sm'>{200 + (liked? 1 : 0)} likes</Text>

                <Box w={0.5} h={0.5} borderRadius={'full'} bg = {'black.natural'} color={'#ffffff'}></Box>

                <Text color={'black.neutral'} fontSize='sm'>238 replies</Text>  

            </Flex>
            <Divider borderColor={'black.neutral'} my={5}/>

            <Comment 
                comment='BRUHHH'
                createdAt='2d'
                likes={100}
                name='Raza Haider'
                userAvatar='/RehanHaider.JPG'

            />
            <Comment
                comment='BRUHHH'
                createdAt='2d'
                likes={102}
                name='RSaa Haider'
                userAvatar='/logo.png'
            />
            <Comment
                  comment='NAH BOIH'
                  createdAt='1d'
                  likes={100}
                  name='Raza Haider'
                  userAvatar='/RehanHaider.JPG'
            />


        </>
    )
}

export default PostPage