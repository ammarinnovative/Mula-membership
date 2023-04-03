import React from 'react'
import {Stack,Flex,Button,Text,Heading,Image,Input,Textarea,Checkbox,Select,Box,Link} from '@chakra-ui/react'
import {AiOutlineUpload } from "react-icons/ai";
import {EditIcon,DeleteIcon } from '@chakra-ui/icons'
import Sidebar from "../../Components/Sidebar/Sidebar"
import Upload_your_video_1 from "../../Assets/Images/Upload_your_video_1.png"
import Upload_your_video_2 from "../../Assets/Images/Upload_your_video_2.png"
export default function SingleCourse() {
  return (
    <Sidebar>
      <Flex gap={"20px"} flexDirection={{base:"column-reverse", sm:"", md:"row", lg:"", '2xl':''}} textAlign={{base:"center", md:'left', lg:'', '2xl':''}}>
        <Stack flex={"3"}>
          <Box mb={"20px"}>
            <Heading as="h2" size="md">
              Crypto Explained: Security Action
            </Heading>
          </Box>

            {/* input filed */}
          <Box>
            <Input type={Text} border={"1px solid #000"} placeholder="Crypto Explained: Security Action" _placeholder={{ color:"#867878"}}/>
            <Select  placeholder='Crypto' mt={"15px"} border={"1px solid #000"} _placeholder={{color:"#867878",fontWeight:"bold"}}>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
            <Textarea type={Text} mt={"15px"} border={"1px solid #000"}  placeholder="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." _placeholder={{color:"#867878"}}></Textarea>
            <Input type={Text} mt={"15px"} border={"1px solid #000"} placeholder="$25.00" _placeholder={{ color:"#867878"}}/>
          </Box>

          <Box>
            <Heading as="h2" size="md" mt={"30px"} mb={"20px"}>
              Available Vidoes
            </Heading>
          </Box>
          <Flex gap="15px" flexDirection={{base:"column", sm:"row", md:'', lg:'', '2xl':''}}  justifyContent={{base:"center", sm:"center", md:'left', lg:'', '2xl':''}} >
            <Box>
              <Image  src={Upload_your_video_1} w={{base:"100%", md:'', lg:'', '2xl':''}}></Image>
              <Stack spacing={"15px"} direction={"row"} mt={"5px"} justifyContent={{base:"center", md:'', lg:'', '2xl':''}}>
                <Link to="/"><Text fontSize={"18px"}fontWeight={"400"}color="#000"><EditIcon fontSize={"20px"} color={"#000"}/> Edit</Text></Link>
                <Link to="/"><Text fontSize={"18px"}fontWeight={"400"}color="#000"><DeleteIcon fontSize={"20px"} color={"#000"}/> Delete</Text></Link>
              </Stack>
            </Box>
            <Box>
              <Image src={Upload_your_video_2} w={{base:"100%", md:'', lg:'', '2xl':''}}></Image>
              <Stack spacing={"15px"} direction={"row"} mt={"5px"} justifyContent={{base:"center", md:'', lg:'', '2xl':''}}>
                <Link to="/"><Text fontSize={"18px"}fontWeight={"400"}color="#000"><EditIcon fontSize={"20px"} color={"#000"}/> Edit</Text></Link>
                <Link to="/"><Text fontSize={"18px"}fontWeight={"400"}color="#000"><DeleteIcon fontSize={"20px"} color={"#000"}/> Delete</Text></Link>
              </Stack>
            </Box>
          </Flex>
          <Box >
            <Heading as="h2" mt={"15px"} size="md" mb={"20px"}>
              Add more videos
            </Heading>
          </Box>
          <Box > 
            <Input type={"file"} display={"none"} id={"file"} ></Input>
            <label htmlFor='file'>
              <Stack 
                padding={"30px 50px"}
                bg={"#ececec"}
                border={"1px Dashed #000"}
                borderRadius={"10px"}
                cursor={"pointer"} spacing="2"alignItems={"center"} width={"30%"} w={{base:"100%", md:'35%', lg:'', '2xl':''}}>
                <AiOutlineUpload  fontSize={"50px"}/>  
                <Text>Upload Your Video</Text>
              </Stack>
            </label>
          </Box>
        {/* <Box mt={"20px"}>
          <Checkbox size='sm' colorScheme='purple' border={"#0d1140"} fontWeight={"600"}>
          Set as thumbnail
          </Checkbox>
        </Box> */}
        <Box>
          <Button width={"15%"} 
          marginTop={"30px"}
          marginBottom={"30px"}
          padding={"0px 50px"}
          borderRadius={"5px"}
          border={"1px solid #1e2598"}
          bg={'#1e2598'}
          color={'#fff'}
          _hover={{
          bg: 'transparent',
          color: '#000',
          transition:"all 0.5s",
          border:"1px solid #000"
          }}>Publish</Button>
        </Box>
        </Stack>

        {/* Create New Category */}
        <Stack flex={"1"}>
          <Box bg={"#1e2598"} p={"15px 20px 20px 15px"} borderRadius={"5px"}>
            <Text color={"#fff"} fontWeight={"600"} fontSize={{base:'15px', sm:'', md: '20px', lg: '', xl:'', '2xl': '26px' }} mb={"10px"}>Create New Category</Text>
              <Box mt={"30px"} position={"relative"}>
                <Input type={Text} border={"1px solid #fff"} height={"50px"} placeholder="Enter Name" _placeholder={{ color:"#fff"}}/>
                <Box position={"absolute"} right={"8px"} top={"8px"}>
                  <Button h={"35px"}border={"1px solid #fff"}_hover={{bg:"transparent",border:"1px solid #fff",color:"#fff",transition:"all 0.5s"}}>Create</Button>
                </Box>
              </Box>
          </Box>
        </Stack>
      </Flex>
    </Sidebar>
  )
}





