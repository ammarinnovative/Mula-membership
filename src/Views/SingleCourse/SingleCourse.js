import React from "react";
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
  InputGroup,
  FormControl,
} from "@chakra-ui/react";
import { AiOutlineUpload } from "react-icons/ai";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { imageURL } from "../../utilities/config";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Upload_your_video_1 from "../../Assets/Images/Upload_your_video_1.png";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  ModalCloseButton,
} from "@chakra-ui/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSelector } from "react-redux";
import { GrUpload } from "react-icons/gr";
import Upload_your_video_2 from "../../Assets/Images/Upload_your_video_2.png";
import { useEffect } from "react";
import { useState } from "react";
import { GET } from "../../utilities/ApiProvider";
import { useParams } from "react-router-dom";
export default function SingleCourse() {
  const [user, setUser] = useState({});
  const selector = useSelector((state) => state);
  const [video, setVideo] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [filterVideo, setFilterVideo] = useState([]);
  const [filterItem, setFilterItem] = useState([]);

  const params = useParams();

  const [fields, setFields] = useState({
    course_id: params.id,
    category_id: "",
    video: [],
  });

  const getVideo = async () => {
    const res = await GET("video/admin", {
      authorization: `bearer ${user?.JWT_TOKEN}`,
    });
    setVideo(res.data);
  };

  useEffect(() => {
    if (selector) {
      setUser(selector?.user?.user?.data?.data);
    }
  }, [selector]);
  useEffect(() => {
    if (user) {
      getVideo();
    }
  }, [user]);

  const Category = [
    ...new Set(
      video &&
        video?.map((item) => {
          return item.course_category_name;
        })
    ),
  ];

  const getElement = (item) => {
    const find = video.filter((data) => {
      return data.course_category_name === item;
    });
    setFilterVideo(find[0].video);
    setFields({ ...fields, category_id: find[0]._id });
    // setFields({...fields,category_id:item._id});
    // const cat = video.filter((item)=>item.course_category_name==item.course_category_name);
  };

  const filter = (item) => {
    
    const items = fields.video.find((data) => {
      return data == item._id;
    });
    console.log(items)
    if (items) {
      setFields({...fields,video:fields.video.filter((data)=>{return data !== item._id})});
    } else {
      setFields({...fields,video:[...fields.video,item._id]});
    }
  };
  console.log(fields);

  return (
    <Sidebar>
      <Flex
        gap={"20px"}
        mt={"20px"}
        flexDirection={{ base: "column-reverse", md: "row" }}
        textAlign={{ base: "center", md: "left" }}
      >
        <Stack flex={"2"}>
          <Box>
            <Select
              onChange={(e) => {
                getElement(e.target.value);
              }}
              mt={"15px"}
              border={"1px solid #000"}
              _placeholder={{ color: "#867878", fontWeight: "bold" }}
            >
              {video &&
                video?.map((item) => {
                  return (
                    <option value={item.course_category_name}>
                      {item?.course_category_name}
                    </option>
                  );
                })}
            </Select>
          </Box>

          <Flex
            gap="15px"
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={{ base: "center", sm: "center", md: "left" }}
            flexWrap={"wrap"}
          >
            {filterVideo &&
              filterVideo?.map((item) => {
                return (
                  <>
                    <Box

                    cursor={"pointer"}
                      onClick={() => {
                        filter(item);
                      }}
                      width={"200px"}
                      objectFit={"cover"}
                      height={"200px"}
                    >
                      <Box width={"200px"} height={"140px"} objectFit={"cover"}>
                        <Image borderRadius={"8px"} height={"full"} src={imageURL+item.thumbnail} w="100%" />
                      </Box>
                      <Stack
                        spacing={"15px"}
                        direction={"row"}
                        mt={"5px"}
                        justifyContent={"space-between"}
                      >
                        <Text textTransform={"capitalize"} fontWeight={"bold"}>
                          {item.title}
                        </Text>
                      </Stack>
                    </Box>
                  </>
                );
              })}
          </Flex>
          <Box></Box>
          <Box>
            <Button
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
                _placeholder={{ color: "#fff" }}
              />
              <Box position={"absolute"} right={"8px"} top={"8px"}>
                <Button
                  h={"35px"}
                  border={"1px solid #fff"}
                  _hover={{
                    bg: "transparent",
                    border: "1px solid #fff",
                    color: "#fff",
                    transition: "all 0.5s",
                  }}
                >
                  Create
                </Button>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Flex>
    </Sidebar>
  );
}
