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

                    <Text fontSize={'sm'}>
                        1d
                    </Text>
                    <BsThreeDots/>

                </Flex>
            </Flex>



            <Text my={3} fontSize={'lg'}>Lets go bhruh</Text>

            <Text my={3} fontSize={'md'}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro explicabo harum ipsam minima quas illo delectus quo, voluptatem aspernatur error impedit eum obcaecati vel recusandae odio dolore eos? Ipsum repellat nobis nemo ipsam animi facere veniam suscipit quisquam nam obcaecati dolores distinctio odio ullam, unde quis, iusto nihil officiis beatae.
            </Text>



            <Box borderRadius={6} overflow={'hidden'} border={'1px solid'} borderColor={'gray'}>
                <Image src='/RehanHaider.JPG' w={'full'}/>
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

            <Comment/>
            <Comment/>
            <Comment/>


        </>
    )
}

export default PostPage