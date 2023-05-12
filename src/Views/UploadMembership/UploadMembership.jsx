import React, { useEffect, useState } from "react";
import {
  Stack,
  Flex,
  Button,
  Text,
  Heading,
  Image,
  Input,
  Textarea,
  Checkbox,
  Select,
  Box,
  Link,
} from "@chakra-ui/react";
import { AiOutlineUpload } from "react-icons/ai";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Upload_your_video_1 from "../../Assets/Images/Upload_your_video_1.png";
import Upload_your_video_2 from "../../Assets/Images/Upload_your_video_2.png";
import { Title } from "chart.js";
import { useToast } from "@chakra-ui/react";
import { POST } from "../../utilities/ApiProvider";
import store from "../../app/store";
import { useSelector } from "react-redux";
import { GET } from "../../utilities/ApiProvider";
import { TailSpin } from "react-loader-spinner";



export default function UploadMember() {
  const selector = useSelector((state) => state);
  const [loading,setLoading] = useState(false);
  const toast = useToast();

  const token = selector.user.user.data.data.JWT_TOKEN;

  const getCatagories = async ()=>{
    const res = await GET("courseCategory/getAllCourseCategoryList?limit=10&page=1",  {
      authorization: `Bearer ${token}`,
    });
    console.log(res);
    
    
  }

  const [value,setValue] = useState({
    course_category_name:""
  });
  console.log(value);

  
  useEffect(()=>{
getCatagories();
  },[]);




  // const createCat = async ()=>{
  //   const formData = new FormData();
  //   formData.append(value);
    
  // }
  
      const createCat = async ()=>{
        setLoading(true);
        const formData = new FormData();
        for (let key in value) {
          formData.append(key, value[key]);
        }
        const res = await POST("courseCategory/addCourseCategoryDetail",value,{
          authorization: `bearer ${token}`
        })
        if(res.status==200){
          toast({
            status:"success",
            position:"bottom-left",
            duration:5000,
            isClosable:true,
            title:res.data.message

          })
          setLoading(false);
        }
        console.log(res.data.message);
        setValue({course_category_name:""})
      }


  const [fields, setFields] = useState({
    name: "",
    category: "",
    membershipDetails: "",
    price: 0,
    thumbnail: "",
    sub_title:"ssdjdskj"
  });
  console.log(fields)

  const uploadMembership = async () => {
    if (
      !fields.title &&
      !fields.category &&
      !fields.membershipDetails &&
      !fields.price &&
      !fields.thumbnail
    ) {
      toast({
        description: "Please fill all the fields",
        status: "error",
        isClosable: true,
        position: "bottom-left",
        duration: 3000,
      });
      return;
    }

    const res = await POST("membership", fields, {
      authorization: `Bearer ${selector.user.user.data.data.JWT_TOKEN}`,
    });
    console.log(res);

    try {
      if (res.status == 200) {
        toast({
          description: res.data.message,
          status: "error",
          isClosable: true,
          position: "bottom-left",
          duration: 3000,
        });
      } else {
        toast({
          description: res.data.error,
          status: "error",
          isClosable: true,
          position: "bottom-left",
          duration: 3000,
        });
      }
    } catch (error) {}
  };

  return (
    <Sidebar>
      <Flex
        gap={"20px"}
        flexDirection={{ base: "column-reverse", md: "row" }}
        textAlign={{ base: "center", md: "left", lg: "", "2xl": "" }}
      >
        <Stack flex={"2"}>
          <Box mb={"20px"}>
            <Heading as="h2" size="md">
              Crypto Explained: Security Action
            </Heading>
          </Box>

          {/* input filed */}
          <Box>
            <Input
              type={Text}
              border={"1px solid #000"}
              value={fields.name}
              onChange={(e) => {
                setFields({ ...fields, name: e.target.value });
              }}
              placeholder="Crypto Explained: Security Action"
              _placeholder={{ color: "#867878" }}
            />
            <Select
              value={fields.category}
              onChange={(e) => {
                setFields({ ...fields, category: e.target.value });
              }}
              placeholder="Crypto"
              mt={"15px"}
              border={"1px solid #000"}
              _placeholder={{ color: "#867878", fontWeight: "bold" }}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Textarea
              value={fields.description}
              onChange={(e) => {
                setFields({ ...fields, membershipDetails: e.target.value });
              }}
              type={Text}
              mt={"15px"}
              border={"1px solid #000"}
              placeholder="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              _placeholder={{ color: "#867878" }}
            ></Textarea>
            <Input
              value={fields.price}
              onChange={(e) => {
                setFields({ ...fields, price: e.target.value });
              }}
              type={Text}
              mt={"15px"}
              border={"1px solid #000"}
              placeholder="$25.00"
              _placeholder={{ color: "#867878" }}
            />
          </Box>

          <Box>
            <Heading as="h2" size="md" mt={"30px"} mb={"20px"}>
              Thumbnail Image
            </Heading>
          </Box>
          <Box>
            <Input
              type={"file"}
              onChange={(e) => {
                setFields({ ...fields, thumbnail: e.target.files[0] });
              }}
              display={"none"}
              id={"file"}
            ></Input>
            <label htmlFor="file">
              <Stack
                padding={"30px 50px"}
                bg={"#ececec"}
                border={"1px Dashed #000"}
                borderRadius={"10px"}
                cursor={"pointer"}
                spacing="2"
                alignItems={"center"}
                width={"30%"}
                w={{ base: "100%", md: "35%", lg: "", "2xl": "" }}
              >
                <AiOutlineUpload fontSize={"50px"} />
                <Text>upload Thumbnail Image</Text>
              </Stack>
            </label>
          </Box>
          <Box>
            <Button
              onClick={uploadMembership}
              width={{ base: "100%", md: "100%", lg: "20%" }}
              marginTop={"30px"}
              marginBottom={"30px"}
              padding={"0px 50px"}
              borderRadius={"5px"}
              border={"1px solid #1e2598"}
              bg={"#1e2598"}
              color={"#fff"}
              _hover={{
                bg: "transparent",
                color: "#000",
                transition: "all 0.5s",
                border: "1px solid #000",
              }}
            >
              Publish
            </Button>
          </Box>
        </Stack>

        {/* Create New Category */}
        <Stack flex={"1"}>
          <Box bg={"#1e2598"} p={"15px 20px 20px 15px"} borderRadius={"5px"}>
            <Text
              color={"#fff"}
              fontWeight={"600"}
              fontFamily={"poppins"}
              fontSize={{ base: "15px", md: "18px" }}
              mb={"10px"}
            >
              Create New Category
            </Text>
            <Box mt={"30px"} position={"relative"}>
              <Input
                type={Text}
                border={"1px solid #fff"}
                height={"50px"}
                color={"white"}
                placeholder="Enter Name"
                name="course_category_name"
                value={value.course_category_name}
                onChange={(e)=>{setValue({course_category_name:e.target.value})}}
                _placeholder={{ color: "#fff" }}
              />
              <Box position={"absolute"} right={"8px"} top={"8px"}>
                <Button
                  h={"35px"}
                  onClick={createCat}
                  border={"1px solid #fff"}
                  cursor={"pointer"}
                  _hover={{
                    bg: "transparent",
                    border: "1px solid #fff",
                    color: "#fff",
                    transition: "all 0.5s",
                  }}
                >
                  {
                    loading? 
                    <TailSpin
                    height="20"
                    width="20"
                    color="blue"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />:"Create"
                  }
                </Button>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Flex>
    </Sidebar>
  );
}
