
import { extendTheme, ChakraProvider, Center, Checkbox, CheckboxGroup, Circle, HStack, Box, Square, Flex, Text, Image, Button, Container, VStack, InputGroup, InputRightElement } from '@chakra-ui/react'
import ColorShade from '../../Assets/Images/ColorShade.jpg';
import Logo from "../../Assets/Images/Logo.png"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
} from '@chakra-ui/react'
import { useState } from 'react';



export const LoginPage = () => {
    const [show,setShow] = useState(false);
    return (
        <Box backgroundImage={ColorShade} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} className="boxMode" width={"100%"} height={"100vh"} backgroundSize={"cover"}>
            <Box display={"flex"} width="100%" flexDirection={"column"} alignItems={"center"} >
                <Image src={Logo} width={"200px"} marginBottom={"24px"} />
                <Text textTransform={"uppercase"} fontFamily={'Poppins700'} fontSize={{base:"35px",md:"50px",lg:"68px"}} fontWeight={"900"} color={"white"}>Welcome back</Text>
                <Text color={'white'} letterSpacing={"2px"} fontWeight={"normal"} marginBottom={"30px"} fontFamily={'poppins400'}>Enter your details</Text>
                <Container>
                    <VStack>
                        <FormControl>
                            <Input type={"email"} placeholder='Enter your Email' color={"white"} />
                        </FormControl>
                        <FormControl>
                            <InputGroup>
                                <Input type={show?"text":"password"} color="white" placeholder="Enter your password" />
                                <InputRightElement width={"4.5rem"}>
                                <Button background={"transparent"}  onClick={()=>{setShow(!show)}} color="white" _hover={"none"} size={"sm"}>{show?"Hide":"Show"}</Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Button width={"100%"} colorScheme={"blue"}>Submit</Button>
                    </VStack>
                </Container>
            </Box>
        </Box>
    )
}