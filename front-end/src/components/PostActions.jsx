import { BiLike } from "react-icons/bi";
import { BiComment } from "react-icons/bi";
import { Flex } from "@chakra-ui/react";

const PostActions = ({liked, setLiked}) => {

    return(
        <Flex gap={3} my={2} onClick={(e) => e.preventDefault()}>
            <BiLike
                color={liked ? '#ff4500' : ''}
                fill={liked ? '#ff4500' : ''}
                onClick = {() => setLiked(!liked)}
                >
            </BiLike>
            <BiComment></BiComment>
        </Flex>
    )

}

export default PostActions