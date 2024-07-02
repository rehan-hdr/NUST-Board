// import { Flex, Link } from "@chakra-ui/react"

const UserPost = () => {

    return(
        <Link to={'/rehan/post/1'}>
            <Flex gap={3} mb={4} py={5}>

                <Flex flexDirection={'column'} alignItems={'center'}>
                    <Avatar size='md' name='Rehan Haider' src='/RehanHaider.JPG' />
                </Flex>

            </Flex>
        </Link>
    )

}

export default UserPost