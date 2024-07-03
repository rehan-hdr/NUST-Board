import { Box, VStack, Flex, Avatar, Text, LinkBox, Link } from "@chakra-ui/react"

const UserHeader = () => {
    return(
        <VStack gap={4} alignItems={'start'}>
            <Flex justifyContent={"space-between"} w={'full'}>
                <Box>
                    <Text fontSize={"2xl"} fontWeight={'bold'}>
                        Full Name
                    </Text>
                    {/* <Flex gap={2} flexDirection={'column'} alignItems={'start'}>
                        <Text fontSize={'l'}>Junior</Text>
                        <Text fontSize={'l'}>SEECS</Text>
                    </Flex> */}
                    
                </Box>
                <Box>
                    <Avatar
                        name="REHAN HAIDER"
                        src="/RehanHaider.JPG"
                        size={'2xl'}
                    />
                </Box>
            </Flex>

            <Text>lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, mollitia distinctio? In quam mollitia id quo, velit molestiae provident alias est corrupti voluptas nulla odio! Nihil eius iusto, quam fugiat, odit obcaecati consequuntur quod fugit non, earum totam natus. Voluptatum!</Text>

            {/* <Flex w={'full'} justifyContent={'space-between'}>
                <Flex gap={2} alignItems={'center'}>

                    <Box w='1' h='1' borderRadius={'full'}></Box>
                    <Link>your links</Link>
                    <Link>your links</Link>

                </Flex>
            </Flex> */}

            <Flex w={'full'} fontWeight={'bold'} justifyContent={'center'} borderRadius={'full'} bg = {'theme.neutral'} color={'#ffffff'}>
                POSTS
                </Flex>
        </VStack>
    )
}

export default UserHeader