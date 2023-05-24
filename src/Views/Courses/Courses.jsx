import {
  extendTheme,
  ChakraProvider,
  Center,
  Checkbox,
  ButtonGroup,
  CheckboxGroup,
  Circle,
  HStack,
  Box,
  Square,
  Flex,
  Text,
  Image,
  Button,
  useDisclosure,
  Input,
  useToast
} from "@chakra-ui/react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Img1 from "../../Assets/Images/Courses/course1.jpg";
import Img2 from "../../Assets/Images/Courses/course2.jpg";
import Img3 from "../../Assets/Images/Courses/course3.jpg";
import Img4 from "../../Assets/Images/Courses/Image4.jpg";
import Img5 from "../../Assets/Images/Courses/image5.jpg";
import Img6 from "../../Assets/Images/Courses/Image6.jpg";
import Img7 from "../../Assets/Images/Courses/Image7.jpg";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Select,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TailSpin } from "react-loader-spinner";
import {GET,POST} from "../../utilities/ApiProvider"
export const Courses = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user,setUser] = useState();
  const [category,setCategory] = useState([]);
  const [loading,setLoading] = useState(false);
  const [fields,setFields] = useState({
    category_id:"",
    name:"",
    sub_title:"",
    description:"",
    price:null,
    course_pic:null,
    user_id:"63cf042fa7e6c6b2cef26d9b"
  });


  const selector = useSelector(state=>state);

  useEffect(()=>{
    if(selector){
      setUser(selector?.user?.user?.data?.data);
    }
  },[selector])


  useEffect(()=>{
    if(user){
      getCategory();
    }
  },[user])
  const toast = useToast();
 

  const getCategory = async ()=>{
    const res =await GET("courseCategory/getAllCourseCategoryList",{
      authorization:`bearer ${user?.JWT_TOKEN}`
    });
    setCategory(res?.data)
  }


  const createPost = async ()=>{
    setLoading(true);
    if(!fields.name || !fields.price || !fields.category_id || !fields.sub_title || !fields.course_pic || !fields.description){
      toast({
        position:"bottom-left",
        isClosable:true,
        duration:5000,
        status:"error",
        description:"Please fill all the fields"
      });
      setLoading(false);
      return;
    }
    const formData =new FormData();
    for(let key in fields){
      formData.append(key,fields[key]);
    }
    const res = await POST("course/addCourseDetail",formData,{
      authorization: `bearer ${user?.JWT_TOKEN}`
    });
    setLoading(false);
  }

console.log(fields);
  return (
    <Box>
      <Sidebar>
        <Box>
          <Box>
            <Button
              backgroundColor={"#1e2598"}
              margin={"10px 0"}
              width={{ base: "100%", md: "40%", lg: "25%" }}
              _hover={"none"}
              marginRight="10px"
              px={"40px"}
              color="white"
            >
              Courses
            </Button>
            <Button
              backgroundColor={"#1E2598"}
              margin={"10px 0"}
              width={{ base: "100%", md: "40%", lg: "25%" }}
              px={"40px"}
              _hover={"none"}
              color="white"
            >
              Membership Videos
            </Button>
          </Box>
          <Flex
            justifyContent={"space-between"}
            margin={"20px 0"}
            flexDirection={{ base: "column", md: "column", lg: "row" }}
            alignItems={"center"}
          >
            <Text
              fontSize={{ base: "30px", md: "22px" }}
              fontFamily={"AvenirLT"}
              fontWeight={"bold"}
            >
              3 Crypto courses
            </Text>
            <Button
              color={"#000000"}
              outline={"none"}
              fontSize={"16px"}
              width={{ base: "100%", md: "100%", lg: "35%" }}
              size="md"
              border={"1px solid #000000"}
              backgroundColor={"#ffffff"}
              onClick={onOpen}
            >
              Create New Courses
            </Button>
          </Flex>
          <Flex
            justifyContent={{ base: "center", md: "space-between" }}
            flexWrap={"wrap"}
            width={"100%"}
          >
            <Box
              cursor={"pointer"}
              width={{ base: "80%", md: "40%", lg: "30%" }}
            >
              <Image
                src={Img1}
                width={"100%"}
                marginTop={"50px"}
                alt={"Image"}
              />
              <Text
                fontWeight={"600"}
                fontFamily={"Poppins700"}
                marginTop={"5px"}
                fontSize={"20px"}
              >
                Crypto Explained:Security Action
              </Text>
              <Box marginTop={"15px"}>
                <Box
                  display={"flex"}
                  fontSize={"20px"}
                  color={"gray.600"}
                  fontFamily={"Poppins400"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Text>Category</Text>
                  <Text>Videos</Text>
                </Box>
                <Box
                  display={"flex"}
                  fontSize={"20px"}
                  color={"blue"}
                  fontFamily={"Poppins400"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Text>Crypto Trading</Text>
                  <Text>11</Text>
                </Box>
              </Box>
            </Box>
            <Box
              cursor={"pointer"}
              width={{ base: "80%", md: "40%", lg: "30%" }}
            >
              <Image
                src={Img2}
                width={"100%"}
                marginTop={"50px"}
                alt={"Image"}
              />
              <Text
                fontWeight={"600"}
                fontFamily={"Poppins700"}
                marginTop={"5px"}
                fontSize={"20px"}
              >
                Crypto Explained:Security Action
              </Text>
              <Box marginTop={"15px"}>
                <Box
                  display={"flex"}
                  fontSize={"20px"}
                  color={"gray.600"}
                  fontFamily={"Poppins400"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Text>Category</Text>
                  <Text>Videos</Text>
                </Box>
                <Box
                  display={"flex"}
                  fontSize={"20px"}
                  color={"blue"}
                  fontFamily={"Poppins400"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Text>Crypto Trading</Text>
                  <Text>11</Text>
                </Box>
              </Box>
            </Box>
            <Box
              cursor={"pointer"}
              width={{ base: "80%", md: "40%", lg: "30%" }}
            >
              <Image
                src={Img3}
                width={"100%"}
                marginTop={"50px"}
                alt={"Image"}
              />
              <Text
                fontWeight={"600"}
                fontFamily={"Poppins700"}
                marginTop={"5px"}
                fontSize={"20px"}
              >
                Crypto Explained:Security Action
              </Text>
              <Box marginTop={"15px"}>
                <Box
                  display={"flex"}
                  fontSize={"20px"}
                  color={"gray.600"}
                  fontFamily={"Poppins400"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Text>Category</Text>
                  <Text>Videos</Text>
                </Box>
                <Box
                  display={"flex"}
                  fontSize={"20px"}
                  color={"blue"}
                  fontFamily={"Poppins400"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Text>Crypto Trading</Text>
                  <Text>11</Text>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex mt={"50px"} alignItems={"center"}>
            <Text
              fontSize={"22px"}
              fontFamily={"poppins"}
              marginRight={"60px"}
              fontWeight={"bold"}
            >
              11 Stock Market Courses courses
            </Text>
            <Text cursor={"pointer"}>View All</Text>
          </Flex>
          <Flex
            justifyContent={{ base: "center", md: "space-between" }}
            flexWrap={"wrap"}
            width={"100%"}
          >
            <Box
              cursor={"pointer"}
              margin={"0 10px"}
              width={{ base: "80%", md: "45%", lg: "23%" }}
            >
              <Image
                src={Img4}
                width={"100%"}
                marginTop={"50px"}
                alt={"Image"}
              />
              <Text
                fontWeight={"600"}
                fontFamily={"Poppins700"}
                marginTop={"5px"}
                fontSize={"20px"}
              >
                Crypto Explained:Security Action
              </Text>
              <Box marginTop={"15px"}>
                <Box
                  display={"flex"}
                  fontSize={"20px"}
                  color={"gray.600"}
                  fontFamily={"Poppins400"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Text>Category</Text>
                  <Text>Videos</Text>
                </Box>
                <Box
                  display={"flex"}
                  fontSize={"20px"}
                  color={"blue"}
                  fontFamily={"Poppins400"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Text>Crypto Trading</Text>
                  <Text>11</Text>
                </Box>
              </Box>
            </Box>
            <Box
              cursor={"pointer"}
              margin={"0 10px"}
              width={{ base: "80%", md: "45%", lg: "23%" }}
            >
              <Image
                src={Img5}
                width={"100%"}
                marginTop={"50px"}
                alt={"Image"}
              />
              <Text
                fontWeight={"600"}
                fontFamily={"Poppins700"}
                marginTop={"5px"}
                fontSize={"20px"}
              >
                Crypto Explained:Security Action
              </Text>
              <Box marginTop={"15px"}>
                <Box
                  display={"flex"}
                  fontSize={"20px"}
                  color={"gray.600"}
                  fontFamily={"Poppins400"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Text>Category</Text>
                  <Text>Videos</Text>
                </Box>
                <Box
                  display={"flex"}
                  fontSize={"20px"}
                  color={"blue"}
                  fontFamily={"Poppins400"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Text>Crypto Trading</Text>
                  <Text>11</Text>
                </Box>
              </Box>
            </Box>
            <Box
              cursor={"pointer"}
              margin={"0 10px"}
              width={{ base: "80%", md: "45%", lg: "23%" }}
            >
              <Image
                src={Img6}
                width={"100%"}
                marginTop={"50px"}
                alt={"Image"}
              />
              <Text
                fontWeight={"600"}
                fontFamily={"Poppins700"}
                marginTop={"5px"}
                fontSize={"20px"}
              >
                Crypto Explained:Security Action
              </Text>
              <Box marginTop={"15px"}>
                <Box
                  display={"flex"}
                  fontSize={"20px"}
                  color={"gray.600"}
                  fontFamily={"Poppins400"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Text>Category</Text>
                  <Text>Videos</Text>
                </Box>
                <Box
                  display={"flex"}
                  fontSize={"20px"}
                  color={"blue"}
                  fontFamily={"Poppins400"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Text>Crypto Trading</Text>
                  <Text>11</Text>
                </Box>
              </Box>
            </Box>
            <Box
              cursor={"pointer"}
              margin={"0 10px"}
              width={{ base: "80%", md: "45%", lg: "23%" }}
            >
              <Image
                src={Img7}
                width={"100%"}
                marginTop={"50px"}
                alt={"Image"}
              />
              <Text
                fontWeight={"600"}
                fontFamily={"Poppins700"}
                marginTop={"5px"}
                fontSize={"20px"}
              >
                Crypto Explained:Security Action
              </Text>
              <Box marginTop={"15px"}>
                <Box
                  display={"flex"}
                  fontSize={"20px"}
                  color={"gray.600"}
                  fontFamily={"Poppins400"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Text>Category</Text>
                  <Text>Videos</Text>
                </Box>
                <Box
                  display={"flex"}
                  fontSize={"20px"}
                  color={"blue"}
                  fontFamily={"Poppins400"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Text>Crypto Trading</Text>
                  <Text>11</Text>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Box>
        <Modal isOpen={isOpen} size={"xl"} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cretae New Courses</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
            <Input onChange={(e)=>{setFields({...fields,name:e.target.value})}} type="text" placeholder="Name" m={"5px 0"} />
            <Input onChange={(e)=>{setFields({...fields,price:e.target.value})}} type="number" placeholder="price" m={"5px 0"} />
            <Input onChange={(e)=>{setFields({...fields,sub_title:e.target.value})}} type="text" placeholder="Sub Title" m={"5px 0"} />
            <Input onChange={(e)=>{setFields({...fields,description:e.target.value})}} type="text" placeholder="Description" m={"5px 0"} />
            <Select onChange={(e)=>{setFields({...fields,category_id:e.target.value})}} placeholder="Select Option">
            {
              category && category?.map((item)=>{
                return(
                  <option value={item._id}>{item.course_category_name}</option>
                )
              })
            }
            </Select>
            <Input type="file" onChange={(e)=>{setFields({...fields,course_pic:e.target.files[0]})}} placeholder="Image" m={"5px 0"} />
            <Button  onClick={createPost} backgroundColor={"#1e2598"} _hover={"none"} width={"100%"} color={"white"}>{loading? <TailSpin
            width="30"
            color="white"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />:"Create"}</Button>
          </ModalBody>
        </ModalContent>
      </Modal>
      </Sidebar>
    </Box>
  );
};
