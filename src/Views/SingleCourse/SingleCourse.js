import React from 'react'
import { Stack, Flex, Button, Text, Heading, Image, Input, Textarea, Checkbox, Select, Box, Link, InputGroup, FormControl } from '@chakra-ui/react'
import { AiOutlineUpload } from "react-icons/ai";
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import Sidebar from "../../Components/Sidebar/Sidebar"
import Upload_your_video_1 from "../../Assets/Images/Upload_your_video_1.png"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  ModalCloseButton,
} from '@chakra-ui/react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { GrUpload } from 'react-icons/gr';
import Upload_your_video_2 from "../../Assets/Images/Upload_your_video_2.png"
import { useEffect } from 'react';
import { useState } from 'react';
import { GET } from '../../utilities/ApiProvider';
import { useParams } from 'react-router-dom';
export default function SingleCourse() {
  const [user,setUser] = useState({});
  const selector = useSelector(state=>state);
  const [video,setVideo] = useState([]);
  const [filterData,setFilterData] = useState([]);


  const params = useParams();


  const [fields,setFields] = useState({
    course_id:params.id,
    category_id:"",
    video:[]
  });


  const getVideo =async ()=>{
    const res = await GET("video/admin",{
      authorization:`bearer ${user?.JWT_TOKEN}`
    });
    setVideo(res.data);
   
  }

  useEffect(()=>{
    if(selector){
      setUser(selector?.user?.user?.data?.data);
    }
  },[selector]);
  useEffect(()=>{
    if(user){
      getVideo();
    }
  },[user]);

 console.log(fields);

  const Category = [...new Set(video&& video?.map((item)=>{return item.course_category_name}))];

  const getElement = (item)=>{
    setFields({...fields,category_id:item._id});
    
  }

  return (
    <Sidebar>
          
      <Flex gap={"20px"} mt={"20px"} flexDirection={{ base: "column-reverse", md: "row" }} textAlign={{ base: "center", md: 'left' }}>
        <Stack flex={"2"}>
          <Box>
            <Select onChange={(e)=>{getElement(e)}} placeholder='Select an option' mt={"15px"} border={"1px solid #000"} _placeholder={{ color: "#867878", fontWeight: "bold" }}>
              {
                video && video?.map((item)=>{
                  return(
                    <option>{item?.course_category_name}</option>
                  )
                })
              }
            </Select>
          </Box>
         
          <Box>
            <Heading as="h2" size="md" mt={"30px"} mb={"20px"}>
              Uploaded Vidoes
            </Heading>
          </Box>
          <Flex gap="15px" flexDirection={{ base: "column", sm: "row"}} justifyContent={{ base: "center", sm: "center", md: 'left' }} >
            <Box>
              <Image src={Upload_your_video_1} w={{ base: "100%", md: '', lg: '', '2xl': '' }}></Image>
              <Stack spacing={"15px"} direction={"row"} mt={"5px"} justifyContent={"space-between"}>
                <Link to="/"><Text fontSize={"18px"} fontWeight={"400"} color="#000"><EditIcon fontSize={"20px"} color={"#000"} /> Edit</Text></Link>
                <Link to="/"><Text fontSize={"18px"} fontWeight={"400"} color="#000"><DeleteIcon fontSize={"20px"} color={"#000"} /> Delete</Text></Link>
              </Stack>
            </Box>
            <Box>
              <Image src={Upload_your_video_2} w={{ base: "100%"}}></Image>
              <Stack spacing={"15px"} direction={"row"} mt={"5px"} justifyContent={{ base: "center"}}>
                <Link to="/"><Text fontSize={"18px"} fontWeight={"400"} color="#000"><EditIcon fontSize={"20px"} color={"#000"} /> Edit</Text></Link>
                <Link to="/"><Text fontSize={"18px"} fontWeight={"400"} color="#000"><DeleteIcon fontSize={"20px"} color={"#000"} /> Delete</Text></Link>
              </Stack>
            </Box>
          </Flex>
          <Box >
            {/* <Input type={"file"} display={"none"} id={"file"} ></Input>
            <label htmlFor='file'> */}
            
            {/* </label> */}
          </Box>
          <Box>
            <Button width={{ base: "100%", md: "100%", lg: "20%" }}
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
                transition: "all 0.5s",
                border: "1px solid #000"
              }}>Publish</Button>
          </Box>
        </Stack>

        {/* Create New Category */}
        <Stack flex={"1"}>
          <Box bg={"#1e2598"} p={"15px 20px 20px 15px"} borderRadius={"5px"}>
            <Text color={"#fff"} fontWeight={"600"} fontFamily={"poppins"} fontSize={{ base: '15px', md: '18px', }} mb={"10px"}>Create New Category</Text>
            <Box mt={"30px"} position={"relative"}>
              <Input type={Text} border={"1px solid #fff"} height={"50px"} color={"white"} placeholder="Enter Name" _placeholder={{ color: "#fff" }} />
              <Box position={"absolute"} right={"8px"} top={"8px"}>
                <Button h={"35px"} border={"1px solid #fff"} _hover={{ bg: "transparent", border: "1px solid #fff", color: "#fff", transition: "all 0.5s" }}>Create</Button>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Flex>
    </Sidebar>
  )
}





