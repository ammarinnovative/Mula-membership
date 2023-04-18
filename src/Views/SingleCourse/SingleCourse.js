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
import { GrUpload } from 'react-icons/gr';
import Upload_your_video_2 from "../../Assets/Images/Upload_your_video_2.png"
export default function SingleCourse() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)
  return (
    <Sidebar>
      <Box ref={finalRef} tabIndex={-1} aria-label='Focus moved to this box'>
        Some other content that'll receive focus on close.
      </Box>
      <Modal finalFocusRef={finalRef} size={"2xl"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Box display={"flex"}alignItems={"center"} justifyContent={"space-between"} >
          <ModalHeader>
            <Box display={"flex"}   alignItems={"center"}>
               <Box cursor={"pointer"} onClick={onClose}><AiOutlineArrowLeft /></Box>
                <Text w={"200px"} >Upload New Videos</Text>
            </Box></ModalHeader>
          {/* <ModalCloseButton /> */}
          <Button width={"20%"} mr={"13px"} color={"#fff"} _hover={{backgroundColor:"none"}} backgroundColor={"#0d1140"}>Next</Button>
          </Box>
          <Input id='file' type='file' display={"none"} />
          <label htmlFor='file'>
            <ModalBody>
              <Box width={"100%"} cursor={"pointer"} display={"flex"} alignItems={"center"} flexDirection={"column"} justifyContent={"center"} height={"15vh"} border={"1px dotted black"}>
                <GrUpload fontSize={"23px"} />
                <Text>Upload Your Video</Text>
              </Box>
              <Box marginTop={"10px"}>
                <FormControl>
                  <Input placeholder='Video Title' />
                </FormControl>
                <FormControl marginTop={"10px"}>
                  <Input placeholder='Description' height={"8vh"} />
                </FormControl>
              </Box>
            </ModalBody>
          </label>
        </ModalContent>
      </Modal>
      <Flex gap={"20px"} flexDirection={{ base: "column-reverse", md: "row" }} textAlign={{ base: "center", md: 'left' }}>
        <Stack flex={"2"}>
          <Box mb={"20px"}>
            <Heading as="h2" size="md">
              Crypto Explained: Security Action
            </Heading>
          </Box>

          {/* input filed */}
          <Box>
            <Input type={Text} border={"1px solid #000"} placeholder="Crypto Explained: Security Action" _placeholder={{ color: "#867878" }} />
            <Select placeholder='Crypto' mt={"15px"} border={"1px solid #000"} _placeholder={{ color: "#867878", fontWeight: "bold" }}>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
            <Textarea type={Text} mt={"15px"} border={"1px solid #000"} placeholder="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." _placeholder={{ color: "#867878" }}></Textarea>
            <Input type={Text} mt={"15px"} border={"1px solid #000"} placeholder="$25.00" _placeholder={{ color: "#867878" }} />
          </Box>

          <Box>
            <Heading as="h2" size="md" mt={"30px"} mb={"20px"}>
              Available Vidoes
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
            <Heading as="h2" mt={"15px"} size="md" mb={"20px"}>
              Add more videos
            </Heading>
          </Box>
          <Box >
            {/* <Input type={"file"} display={"none"} id={"file"} ></Input>
            <label htmlFor='file'> */}
            <Stack
              onClick={onOpen}
              padding={"30px 50px"}
              bg={"#ececec"}
              border={"1px Dashed #000"}
              borderRadius={"10px"}
              cursor={"pointer"} spacing="2" alignItems={"center"} width={"30%"} w={{ base: "100%", md: '35%', lg: '', '2xl': '' }}>
              <AiOutlineUpload fontSize={"50px"} />
              <Text>Upload Your Video</Text>
            </Stack>
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





