import { Box, VStack, Flex, Avatar, Text, LinkBox, Link } from "@chakra-ui/react"

const UserHeader = () => {
    return(
        <VStack gap={4} alignItems={'start'}>
            <Flex justifyContent={"space-between"} w={'full'}>
                <Box>
                    <Text fontSize={"2xl"} fontWeight={'bold'}>
                        Full Name
                    </Text>
                    <Flex gap={2} flexDirection={'column'} alignItems={'start'}>
                        <Text fontSize={'l'}>Junior</Text>
                        <Text fontSize={'l'}>SEECS</Text>
                    </Flex>
                    
                </Box>
                <Box>
                    <Avatar
                        name="REHAN HAIDER"
                        src="/RehanHaider.JPG"
                        size={'2xl'}
                    />
                </Box>
            </Flex>

            <Text>Description you want for yourself. lorem40</Text>

            <Flex w={'full'} justifyContent={'space-between'}>
                <Flex gap={2} alignItems={'center'}>

                    <Box w='1' h='1' borderRadius={'full'}></Box>
                    <Link>your links</Link>
                    <Link>your links</Link>

                </Flex>
            </Flex>

            <Flex w={'full'} fontWeight={'bold'} justifyContent={'center'} border={'1px solid black'} borderRadius={'full'} bg = {'black.neutral'} color={'#ffffff'} borderBottom={'5px solid gray'}>
                POSTS
                </Flex>
        </VStack>
    )
}

export default UserHeader