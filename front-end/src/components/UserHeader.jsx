import { Box, VStack, Flex, Avatar, Text } from "@chakra-ui/react"

const UserHeader = () => {
    return(
        <VStack gap={4} alignItems={'start'}>
            <Flex justifyContent={"space-between"} w={'full'}>
                <Box>
                    <Text fontSize={"2xl"} fontWeight={'bold'}>
                        Full Name
                    </Text>
                    <Flex gap={2} alignItems={'center'}>
                        <Text fontSize={'sm'}>Username</Text>
                    </Flex>
                    
                </Box>
                <Box>
                    <Avatar
                        name="REHAN HAIDER"
                        src="/logo.png"
                        size={'xl'}
                    />
                </Box>
            </Flex>
        </VStack>
    )
}

export default UserHeader