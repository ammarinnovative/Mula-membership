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
import { POST, PUT } from "../../utilities/ApiProvider";
import store from "../../app/store";
import { useSelector } from "react-redux";
import { GET } from "../../utilities/ApiProvider";
import { TailSpin } from "react-loader-spinner";
import { Form, json, useParams } from "react-router-dom";
import Item from "antd/es/list/Item";
import { FaEdit } from "react-icons/fa";
import { DELETE } from "../../utilities/ApiProvider";
import { MdDelete } from "react-icons/md";

export default function UploadMember() {
  const selector = useSelector((state) => state);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const [catagories, setCatagories] = useState([]);
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);
  const [loadings, setLoadings] = useState(false);
  const params = useParams();
  const [catLoad,setCarLoad] = useState(false);
  const[updateId,setUpdateId] = useState({});
  const [toggle,setToggle] = useState(false);

  const getCatagories = async () => {
    setCarLoad(true);
    const res = await GET(
      "courseCategory/getAllCourseCategoryList?limit=10&page=1",
      {
        authorization: `Bearer ${user.JWT_TOKEN}`,
      }
    );
    setCatagories(res.data);
    setCarLoad(false);
  };


  const [value, setValue] = useState({
    course_category_name: "",
  });




  useEffect(() => {
    if (user) {
      getCatagories();
    }
  }, [user]);

  useEffect(() => {
    if (selector) {
      setUser(selector?.user?.user?.data?.data);
    }
  }, [selector]);

  const createCat = async () => {
    setLoading(true);
    const formData = new FormData();
    for (let key in value) {
      formData.append(key, value[key]);
    }
    const res = await POST("courseCategory/addCourseCategoryDetail", value, {
      authorization: `bearer ${user.JWT_TOKEN}`,
    });
    console.log(res);
    if (res.status == 200) {
      toast({
        status: "success",
        position: "bottom-left",
        duration: 5000,
        isClosable: true,
        title: res.data.message,
      });
      setLoading(false);
      getCatagories();
    }
    else{
      toast({
        status: "error",
        position: "bottom-left",
        duration: 5000,
        isClosable: true,
        description: res.data.error,
      });
      setLoading(false);
    }
    setValue({ course_category_name: "" });
  };

  const [fields, setFields] = useState({
    category: [],
    price: 5,
    video: "63f9516b352a3cbh2ea6b8dc",
  });

  


const deleteCat =async (_id)=>{
  
  const res = await DELETE(`courseCategory/delete/${_id}`,{
    authorization: `bearer ${user.JWT_TOKEN}`
  });
  console.log(res);

  try {
    if(res.data.status == 200){
      toast({
        status:"success",
        description:"Deleted successfully",
        isClosable:true,
        position:"bottom-left",
        duration:5000
      })
    }
    
  } catch (error) {
    
  }
  
  getCatagories();

  
}

  const uploadMembership = async () => {
    setLoadings(true);
    if (fields.category.length == 0 || !fields.video) {
      toast({
        description: "Please fill all the fields",
        status: "error",
        isClosable: true,
        position: "bottom-left",
        duration: 3000,
      });
      setLoadings(false);
      return;
    }

    const jsonFields = JSON.stringify(fields);
    debugger;
    const res = await POST(`membership/playlist/${params.id}`, jsonFields, {
      authorization: `Bearer ${user.JWT_TOKEN}`,
    });

    try {
      if (res.status == 200) {
        toast({
          description: res.data.message,
          status: "success",
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

    setLoadings(false);
  };


  const updateValue = (data)=>{
    setToggle(true);
    setUpdateId(data._id);
    setValue({course_category_name:data?.course_category_name})
  }

  const Updated = async ()=>{
    setLoading(true);
    const res = await PUT(`courseCategory/update/${updateId}`,value,{
      authorization: `bearer ${user.JWT_TOKEN}`
    })
    console.log(res);

    try {
      if(res.status==200){
        toast({
          position:"bottom-left",
          status:"success",
          description:"Category Updated",
          isClosable:true,
          duration:5000
        })
      }
    } catch (error) {
      toast({
        position:"bottom-left",
        duration:5000,
        status:"success",
        isClosable:true,
        description:res.data.error
      })
    }

    getCatagories();
    setToggle(false);
    setValue({course_category_name:""})
    setLoading(false)
  
  }
  
  
  return (
    <Sidebar>
      <Flex
        gap={"20px"}
        flexDirection={{ base: "column-reverse", md: "row" }}
        textAlign={{ base: "center", md: "left", lg: "", "2xl": "" }}
      >
        <Stack flex={"2"}>
          {/* input filed */}
          <Box>
            <Select
              value={fields.category}
              onChange={(e) => {
                setFields({ ...fields, category: [e.target.value] });
              }}
              placeholder="Crypto"
              mt={"15px"}
              border={"1px solid #000"}
              _placeholder={{ color: "#867878", fontWeight: "bold" }}
            >
              {catagories.map((Item) => {
                return (
                  <option value={Item._id}>{Item.course_category_name}</option>
                );
              })}
            </Select>

            <Input
              value={fields.price}
              type={Text}
              mt={"15px"}
              border={"1px solid #000"}
              placeholder="$25.00"
              _placeholder={{ color: "#867878" }}
            />
          </Box>

          <Box>
            <Heading as="h2" size="md" mt={"30px"} mb={"20px"}>
              Upload Video
            </Heading>
          </Box>
          <Box>
            <Input
              type={"file"}
              // onChange={(e) => {
              //   setFields({...fields,video:e.target.files[0]});
              // }}
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
                <Text>upload Video</Text>
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
              {loadings ? (
                <TailSpin
                  height="20"
                  width="20"
                  color="blue"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              ) : (
                "Publish"
              )}
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
                onChange={(e) => {
                  setValue({ course_category_name: e.target.value });
                }}
                _placeholder={{ color: "#fff" }}
              />
              <Box position={"absolute"} right={"8px"} top={"8px"}>
                {
                  toggle?<Button
                  h={"35px"}
                  onClick={Updated}
                  border={"1px solid #fff"}
                  cursor={"pointer"}
                  _hover={{
                    bg: "transparent",
                    border: "1px solid #fff",
                    color: "#fff",
                    transition: "all 0.5s",
                  }}
                >
                  {loading ? (
                    <TailSpin
                      height="20"
                      width="20"
                      color="blue"
                      ariaLabel="tail-spin-loading"
                      radius="1"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    />
                  ) : (
                    "Update"
                  )}
                </Button>:<Button
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
                  {loading ? (
                    <TailSpin
                      height="20"
                      width="20"
                      color="blue"
                      ariaLabel="tail-spin-loading"
                      radius="1"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    />
                  ) : (
                    "Create"
                  )}
                </Button>
                }
              </Box>
            </Box>
          </Box>
          <Box>
            <Text fontSize={"20px"} fontWeight={"bold"}>
            {
              catagories.length>0? "Created Categories":"No Categories found"
             }
            </Text>
            {
              catLoad?<Box>Loading....</Box>:catagories?.map((data)=>{
                return(
                  
             <Box
              display={"flex"}
              padding={"10px"}
              gap={"5px"}
              justifyContent={"space-between"}
              alignItems={"center"}
              marginBottom={"10px"}
              border={"1px solid gray"}
              borderRadius={"5px"}
            >
              <Text>{data.course_category_name}</Text>
              <Box display={"flex"} alignItems={"center"} gap={"8px"}>
                <Box
                  display={"flex"}
                  gap={"5px"}
                  cursor={"pointer"}
                  alignItems={"center"}
                  onClick={()=>{updateValue(data)}}
                >
                  <FaEdit fontSize={"20px"} />
                  <Text>Edit</Text>
                </Box>
                <Box
                  display={"flex"}
                  gap={"5px"}
                  cursor={"pointer"}
                  alignItems={"center"}
                  onClick={()=>{deleteCat(data._id)}}

                >
                  <MdDelete fontSize={"20px"} />
                  <Text>Delete</Text>
                </Box>
              </Box>
            </Box>
                )
              })
            }
           
          </Box>
        </Stack>
      </Flex>
    </Sidebar>
  );
}
