import { Flex, Image } from "@chakra-ui/react";

const Header = () => {
    return(
        <Flex justifyContent={"center"} mt={12} mb={12} >
            <Image
            cursor = "pointer"
            alt = 'logo'
            w={300}
            src = '/logo.png'
            />
        </Flex>
    )
};

export default Header