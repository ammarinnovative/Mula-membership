import {Stack,Flex,Button,Text,Heading,Image } from '@chakra-ui/react'
import React from 'react'
import Sidebar from "../../Components/Sidebar/Sidebar"
import Profile from"../../Assets/Images/Profile_img.png"

function setting() {
  return (
    <Sidebar>
        <Stack>
            <Flex gap={"20px"}>
                <Button 
                    padding={"0px 50px"}
                    border={"1px solid #000"} 
                    BorderRadius={"3px"}
                    _hover={{
                    bg: '#2c339e',
                    color: '#fff',
                    }}>Profile</Button>
                <Button 
                padding={"0px 50px"} 
                border={"1px solid #000"} 
                BorderRadius={"3px"}
                _hover={{
                bg: '#2c339e',
                color: '#fff',
                }}>Delete Members</Button>
            </Flex>
        </Stack>
    </Sidebar>
  )
}

export default setting