import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react'
  import { useState } from 'react'
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useSetRecoilState } from 'recoil'
import authScreenAtom from '../atoms/authAtom'
import useShowToast from '../../hooks/useShowToast'
import userAtom from '../atoms/userAtom'



  
  export default function Login() {

    const showToast = useShowToast();
    const [inputs, setInputs] = useState({
        "username":"",
        'password':"",
    
    })
    const setUser = useSetRecoilState(userAtom);



    const handleLogin = async () => {
        try {
            const res = await fetch("/api/users/login",{
                method:'POST',
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(inputs),
            })
            const data = await res.json();
            if(data.error){
                showToast("Error", data.error, "error");
                return;
            }
            localStorage.setItem("user",JSON.stringify(data));
            setUser(data);
        } catch (error) {
            showToast("Error", data.error, "error");
            return;
        }
    }
    const [showPassword, setShowPassword] = useState(false)
    const setAuthScreen = useSetRecoilState(authScreenAtom);
  
    return (
      <Flex
        align={'center'}
        justify={'center'}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Login
            </Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
            w={{
                base:'full',
                sm:'400px'
            }}>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Username</FormLabel>
                <Input type="email" 
                        value={inputs.username} 
                        onChange = {(e) => setInputs({...inputs, username:e.target.value})}
                        />
              </FormControl>
              <FormControl  isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} 
                        value={inputs.password} 
                        onChange = {(e) => setInputs({...inputs, password:e.target.value})}/>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() => setShowPassword((showPassword) => !showPassword)}>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handleLogin}>
                  Login
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Don't have an account? <Link color={'blue.400'} onClick={() => setAuthScreen('signup')}>Register</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    )
  }