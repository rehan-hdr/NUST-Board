import { BiLike } from "react-icons/bi";
import { BiComment } from "react-icons/bi";
import { Flex } from "@chakra-ui/react";

const PostActions = ({liked, setLiked}) => {

    return(
        <Flex gap={3} my={1} onClick={(e) => e.preventDefault()}>
            <BiLike
                size={30}
                fill={liked ? '#ff4500' : ''}
                onClick = {() => setLiked(!liked)}
                >
            </BiLike>
            <BiComment size={30}></BiComment>
        </Flex>
    )

}

export default PostActions