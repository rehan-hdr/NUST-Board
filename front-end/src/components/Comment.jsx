import { Avatar, Divider, Flex, Text} from "@chakra-ui/react";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import PostActions from "./PostActions";

const Comment = () => {

    const [liked, setLiked] = useState(false);

    return(<>

                <Flex gap={4} py={2} my={2} w={'full'}>
                    <Avatar src='/RehanHaider.JPG' name='Rehan Haider' size={'sm'}/>
                    <Flex gap={1} w={'full'} flexDirection={'column'}>
                        <Flex w={'full'} justifyContent={'space-between'} alignItems={'center'}>
                            <Text fontSize={'sm'} fontWeight={'bold'}>Rehan haider bruh</Text>
                            <Flex gap={2} alignItems={'center'}>
                                <Text fontSize={'sm'} color={'black.neutral'}>ID</Text>
                                <BsThreeDots/>
                            </Flex>
                            </Flex>
                            <Text>
                                YEAH BRUH THIS IS MY COMMENT
                            </Text>
                            <PostActions liked={liked} setLiked={setLiked}/>
                            <Text color={'black.neutral'} fontSize={'sm'}>{100 + (liked? 1:0)} likes</Text>
        

                    </Flex>
                </Flex>

                <Divider borderColor={'black.neutral'}/>

            </>)
}

export default Comment