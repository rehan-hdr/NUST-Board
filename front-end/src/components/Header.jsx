import { Flex, Image } from "@chakra-ui/react";

const Header = () => {
    return(
        <Flex justifyContent={"center"} mt={6} mb={12} >
            <Image
            cursor = "pointer"
            alt = 'logo'
            w={20}
            src = '/logo.png'
            />
        </Flex>
    )
};

export default Header