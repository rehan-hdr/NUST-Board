import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    Avatar,
    Center,
  } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { useRecoilState } from 'recoil';
import userAtom from '../atoms/userAtom';
import useImagePreview from '../hooks/useImagePreview';
import useShowToast from '../hooks/useShowToast';

  
  export default function UpdateProfilePage() {

    const [user, setUser] =  useRecoilState(userAtom)

    const [inputs, setInputs] = useState({
      name:user.name,
      username:user.username,
      email: user.email,
      bio: user.bio,
      password:'',
      profilePic: user.profilePic
    });

    // useRef(null) creates a reference to something, (null in this case)
    const fileRef = useRef(null);
    const [updating, setUpdating] = useState(false);

    const { handleImageChange, imageUrl } = useImagePreview()

    console.log(user)

    const showToast =useShowToast();

    const handleSubmit = async (e) => {
      e.preventDefault();

      if(updating){return;}
      else {setUpdating(true);}

      try {
        const res = await fetch(`api/users/update/${user._id}`, { 
          method:"PUT",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify({...inputs, profilePic:imageUrl})
        }
        )
        const data = await res.json();

        if (data.error){
          showToast("Error", data.error, "error");
          return; 
        }
        showToast("Success", "Profile updated successfully", "success");
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        
        
      } catch (error) {

        showToast("Error", error, "error")
        
      }finally{
        setUpdating(false);
      }

    }
  
    return (
      <form onSubmit = {handleSubmit}>
      <Flex
        align={'center'}
        justify={'center'}
        my={6}>
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
            User Profile Edit
          </Heading>
          <FormControl>
            <Stack direction={['column', 'row']} spacing={6}>
              <Center>
                <Avatar size="xl" src={imageUrl || user.profilePic} />

              </Center>
              <Center w="full">

                {/* triggering the click on the useRef() object */}

                <Button 
                w="full" 
                onClick={()=>fileRef.current.click()}>
                  Change Profile Picture
                </Button>

                {/*assigning the useRef() object to this input*/}

                <Input 
                type='file'
                hidden ref={fileRef}
                onChange = {handleImageChange} /> 
              </Center>
            </Stack>
          </FormControl>
          <FormControl >
            <FormLabel>Full Name</FormLabel>
            <Input
              value={inputs.name}
              onChange={(e) => setInputs({...inputs, name:e.target.value})}
              placeholder="Rehan Haider"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
              value={inputs.username}
              onChange={(e) => setInputs({...inputs, username:e.target.value})}
              placeholder="rehan"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
          <FormControl >
            <FormLabel>Email address</FormLabel>
            <Input
               value={inputs.email}
               onChange={(e) => setInputs({...inputs, email:e.target.value})}
              placeholder="rehan@gmail.com"
              _placeholder={{ color: 'gray.500' }}
              type="email"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Bio</FormLabel>
            <Input
              value={inputs.bio}
              onChange={(e) => setInputs({...inputs, bio:e.target.value})}
              placeholder="seecs sopho"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              value={inputs.password}
              onChange={(e) => setInputs({...inputs, password:e.target.value})}
              placeholder="password"
              _placeholder={{ color: 'gray.500' }}
              type="password"
            />
          </FormControl>
          <Stack spacing={6} direction={['column', 'row']}>
            <Button
              bg={'red.400'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'red.500',
              }}>
              Cancel
            </Button>
            <Button
            type='submit'
            isLoading={updating}
              bg={'green.400'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'green.500',
              }}>
              Submit
            </Button>
          </Stack>
        </Stack>
      </Flex>
      </form>
    )
  }