
import { extendTheme, ChakraProvider, Center, Checkbox, CheckboxGroup, Circle, HStack, Box, Square, Flex, Text, Image, Button } from '@chakra-ui/react'
import ColorShade from '../../Assets/Images/ColorShade.jpg';
import Logo from "../../Assets/Images/Logo.png"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
} from '@chakra-ui/react'



export const LoginPage = () => {
    return (
        <Box backgroundImage={ColorShade} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} className="boxMode" width={"100%"} height={"100vh"} backgroundSize={"cover"}>
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"} >
                <Image src={Logo} width={"200px"} marginBottom={"24px"} />
                <Text textTransform={"uppercase"} fontFamily={'Poppins700'} fontSize={"68px"} fontWeight={"900"} color={"white"}>Welcome back</Text>
                <Text color={'white'} letterSpacing={"2px"} fontWeight={"normal"} marginBottom={"30px"} fontFamily={'poppins400'}>Enter your details</Text>
                <FormControl color={"white"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} isRequired>
                    <Input _placeholder={{ color: 'white' }} color={"white"} placeholder='Email Address' type={"email"} width={"md"} marginBottom={"10px"} />
                    <Input _placeholder={{ color: 'white' }} color={"white"} placeholder='Enter a password' width={"md"} type={"password"} />
                    <Box display={"flex"} marginTop={"10px"} color={"white"} width={"full"} justifyContent={"space-around"}>
                        <Checkbox colorScheme={"green"} checkBox isInvalid>Remember password?</Checkbox>
                        <Text>Forget Password?</Text>
                    </Box>
                </FormControl>
            </Box>
        </Box>
    )
}