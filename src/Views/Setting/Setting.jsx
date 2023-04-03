import { extendTheme, ChakraProvider, Avatar, Center, WrapItem, Checkbox, ButtonGroup, CheckboxGroup, Circle, HStack, Box, Square, Flex, Text, Image, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import Sidebar from "../../Components/Sidebar/Sidebar";



export const Setting = () => {
    return (
        <Sidebar>
            <Text fontSize={"20px"} display="flex" justifyContent={{base:"center",md:"left",lg:"left"}} fontWeight="600">Profile Photo</Text>
            <Box display={"flex"} flexDirection={{base:"column",md:"row",lg:"row"}}>
                <Box display={"flex"} justifyContent={{base:"center",md:"left",lg:"left"}}>
                    <Image boxSize={"150px"} borderRadius={"full"} src='https://bit.ly/dan-abramov' />
                </Box>
                <Box display={"flex"} gap="10px" marginLeft="10px" justifyContent="center" flexDirection="column">
                    <Button px="35px" _hover={{ backgroundColor: "#1e2598" }} backgroundColor={"#1e2598"} color="#fff">Change</Button>
                    <Button border={"1px solid black"} color="#1e2598" px="35px">Remove</Button>
                </Box>
            </Box>
            <Box paddingTop={"20px"}>
                <Text fontSize={"20px"} textAlign={{base:"center",md:"left",lg:"left"}} fontWeight="600" fontFamily={"poppins"}>Account Setting</Text>
                <Box>
                    <Box display={"flex"} flexDirection={{base:"column",md:"row",lg:"row"}} mt="40px" gap="20px">
                        <FormControl width={{base:"100%",md:"45%",lg:"30%"}}>
                            <FormLabel>Name</FormLabel>
                            <Input type="text" border={"1px solid"} placeholder='Enter your Name' />
                        </FormControl>
                        <FormControl width={{base:"100%",md:"45%",lg:"30%"}}>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" border={"1px solid"} placeholder='Enter your Email' />
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl marginTop={"30px"} width={{base:"100%",md:"45%",lg:"30%"}}>
                            <Text fontSize={"20px"} marginBottom="10px" fontWeight="700">Old Password</Text>
                            <FormLabel>Enter old Password</FormLabel>
                            <Input border={"1px solid"} placeholder='Enter your Password' />
                        </FormControl>
                    </Box>
                    <Box marginTop={"30px"}>
                        <Text fontSize={"20px"} marginBottom="10px" fontWeight="700">New Password</Text>
                        <Box display={"flex"} flexDirection={{base:"column",md:"row",lg:"row"}} gap="20px">
                            <FormControl width={{base:"100%",md:"45%",lg:"30%"}}>
                                <FormLabel>Enter New Password</FormLabel>
                                <Input border={"1px solid"} placeholder='Enter your Password' />
                            </FormControl>
                            <FormControl width={{base:"100%",md:"45%",lg:"30%"}}>
                                <FormLabel>Enter Confirm Password</FormLabel>
                                <Input border={"1px solid"} placeholder='Enter your Password' />
                            </FormControl>
                        </Box>
                    </Box>
                    <Button backgroundColor={"#1e2598"} width={{base:"100%",md:"45%",lg:"30%"}} mt="20px" _hover="none" color="white">Change Password</Button>
                </Box>
            </Box>

        </Sidebar>
    )
}