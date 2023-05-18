import {
  extendTheme,
  ChakraProvider,
  Avatar,
  Center,
  WrapItem,
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
  Stack,
} from "@chakra-ui/react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { SmallAddIcon } from "@chakra-ui/icons";
import { Select } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";
import { Input } from "antd";
import { useEffect, useRef, useState } from "react";
import { GET } from "../../utilities/ApiProvider";
import { useSelector } from "react-redux";
import { POST } from "../../utilities/ApiProvider";
import Item from "antd/es/list/Item";
import ChatRoomList from "./ChatRoomList";
import ReactPaginate from "react-paginate";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
export const Tiers = () => {

  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState("");
  const [feature, setFeature] = useState([]);
  const [MembershipPlan, setMembershipPlan] = useState([]);
  const [catData, setCatData] = useState([]);
  const [loading, setLoading] = useState(false);
  const selector = useSelector((state) => state);
  const [user, setUser] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [stateLoad, setStateLoad] = useState(false);
  // const [loading,setLoading] = useState(false);
  // const [membershipData, setmembershipData] = useState([]);

  const getData = async () => {
    const res = await GET(
      "courseCategory/getAllCourseCategoryList?limit=23&page=1",
      {
        authorization: `bearer ${user?.JWT_TOKEN}`,
      }
    );
    setCatData(res.data);
  };

  const getMembershipPlan = async () => {
    setStateLoad(true);
    const res = await GET("membership?limit=23&page=", {
      authorization: `bearer ${user?.JWT_TOKEN}`,
    });
    console.log(res);
    setMembershipPlan(res?.data);
    setStateLoad(false);
  };
  

  useEffect(() => {
    if (selector) {
      setUser(selector?.user?.user?.data?.data ?? "");
    }
  }, [selector]);

  useEffect(() => {
    if(user){
      getMembershipPlan();
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      getData();
    }
  }, [user]);
  const [chatRoom, showChatRoom] = useState(false);
  const [fields, setFields] = useState({
    name: "",
    price: 0,
    membershipDetails: [],
    thumbnail: {},
    category: [],
    sub_title: "membership",
    access_levels: [
      {
        zoomConferance: false,
        announcements: false,
        directMessage: false,
      },
    ],
  });
  const ref = useRef();

  useEffect(() => {
    if (!chatRoom) setCheck("chatRoom", undefined);
  }, [chatRoom]);
  const Data = () => {
    setFeature([...feature, { text: data }]);
    setFields({ ...fields, membershipDetails: [...feature, { text: data }] });
    setData(" ");
  };

  function setCheck(key, value) {
    let newAccessLevels = { ...fields.access_levels[0] };
    newAccessLevels[key] = value;

    setFields({ ...fields, access_levels: [newAccessLevels] });
  }

  const postdata = async () => {
    setLoading(true);
    const object = {
      ...fields,
      category: JSON.stringify(fields.category),
      membershipDetails: JSON.stringify(fields.membershipDetails),
      access_levels: JSON.stringify(fields.access_levels),
    };

    const formData = new FormData();
    for (let key in object) {
      formData.append(key, object[key]);
    }

    // formData.forEach((element) => {
    // });

    const res = await POST("membership", formData, {
      authorization: `bearer ${user?.JWT_TOKEN}`,
    });
    setLoading(false);
  };

  const changePage = ({ selected }) => {
    setPageNumber(selected);
    console.log(selected);
  };
  return (
    <Sidebar>
      <Modal
        size={"xl"}
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        // id="container"
      >
        <ModalOverlay />
        <ModalContent>
          <Box
            display="flex"
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <ModalHeader display={"flex"} alignItems={"center"}>
              <AiOutlineArrowLeft cursor={"pointer"} onClick={onClose} />
              <Text marginLeft={"10px"} width={"240px"}>
                {" "}
                Enter tier details
              </Text>
            </ModalHeader>
            <Button
              mr={"12px"}
              color={"white"}
              px={"30px"}
              bg={"#1e2598"}
              onClick={postdata}
            >
              Create
            </Button>
          </Box>
          <ModalBody pb={6}>
            <Box display="flex" flexDirection={"column"} gap={"10px"}>
              <form ref={ref}>
                <Input
                  value={fields.name}
                  onChange={(e) => {
                    setFields({ ...fields, name: e.target.value });
                  }}
                  placeholder="Tier Name"
                  type="text"
                  margin="5px 0"
                  name={"name"}
                />
                <Input
                  value={fields.price}
                  onChange={(e) => {
                    setFields({ ...fields, price: e.target.value });
                  }}
                  placeholder="$Price"
                  type="text"
                  margin="5px 0"
                  name={"price"}
                />
                <Box display={"flex"} alignItems={"center"}>
                  <Input
                    onChange={(e) => {
                      setData(e.target.value);
                    }}
                    placeholder="Enter your Features"
                    width={"70%"}
                    value={data}
                    margin="5px 0"
                    name={"price"}
                  />
                  <Box
                    display={"flex"}
                    cursor={"pointer"}
                    alignItems={"center"}
                    gap="5px"
                  >
                    <Button
                      onClick={Data}
                      height={"4vh"}
                      ml="5px"
                      color={"blue"}
                    >
                      Add
                    </Button>
                  </Box>
                </Box>
                {feature?.length &&
                  feature.map((data) => {
                    return (
                      <Input
                        value={data.text}
                        margin="5px 0"
                        placeholder="Feature 1"
                        type="text"
                      />
                    );
                  })}
                <Input
                  type="file"
                  margin="5px 0"
                  onChange={(e) => {
                    setFields({ ...fields, thumbnail: e.target.files[0] });
                  }}
                />
                <Select
                  onChange={(e) => {
                    setFields({
                      ...fields,
                      category: JSON.stringify([e.target.value]),
                    });
                  }}
                  placeholder="Crypto"
                  mt={"15px"}
                  border={"1px solid #000"}
                  _placeholder={{ color: "#867878", fontWeight: "bold" }}
                >
                  {catData?.length &&
                    catData?.map((Item) => {
                      return (
                        <option value={Item._id}>
                          {Item.course_category_name}
                        </option>
                      );
                    })}
                </Select>
                <Text fontSize={"18px"} fontWeight={"bold"}>
                  Include:
                </Text>
                <CheckboxGroup colorScheme="blue">
                  <Stack spacing={[1, 5]} direction={["column", "row"]}>
                    <Checkbox
                      autoComplete="none"
                      size={"sm"}
                      checked={chatRoom}
                      onChange={() => showChatRoom(!chatRoom)}
                    >
                      Group Chats
                    </Checkbox>
                    <Checkbox
                      autoComplete="none"
                      size={"sm"}
                      checked={!fields.access_levels[0].announcements}
                      onChange={() =>
                        setCheck(
                          "announcements",
                          !fields.access_levels[0].announcements
                        )
                      }
                    >
                      Group Announcement
                    </Checkbox>
                    <Checkbox
                      autoComplete="none"
                      size={"sm"}
                      checked={!fields.access_levels[0].directMessage}
                      onChange={() =>
                        setCheck(
                          "directMessage",
                          !fields.access_levels[0].directMessage
                        )
                      }
                    >
                      Chat with Mula
                    </Checkbox>
                    <Checkbox
                      autoComplete="none"
                      size={"sm"}
                      checked={!fields.access_levels[0].zoomConferance}
                      onChange={() =>
                        setCheck(
                          "zoomConferance",
                          !fields.access_levels[0].zoomConferance
                        )
                      }
                    >
                      1-1 Zoom Call
                    </Checkbox>
                  </Stack>
                </CheckboxGroup>
                <ChatRoomList
                  show={chatRoom}
                  onItemSelect={(value) => {
                    setCheck("chatRoom", value);
                  }}
                />
              </form>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Flex
        justifyContent={"space-between"}
        gap="20px"
        flexDirection={{ base: "column", md: "row" }}
        flexWrap={"wrap"}
        alignItems={"center"}
      >
        <Text fontSize={"25px"} fontWeight={"600"}>
          Current Tiers Plan
        </Text>
        <Button
          leftIcon={<SmallAddIcon boxSize={7} />}
          border={"1px solid black"}
          onClick={onOpen}
        >
          Cretae New Tiers
        </Button>
      </Flex>
      {stateLoad ? (
        <Box display={"grid"} height={"70vh"} placeItems={"center"}>
          <TailSpin
            height="80"
            width="80"
            color="blue"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </Box>
      ) : (
        <>
          <Box
            marginTop={"20px"}
            display={"flex"}
            role={"group"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            margin={"20px 5px 20px 5px"}
          >
            {MembershipPlan?.length &&
              MembershipPlan?.map((item) => {
                return (
                  
                  <Box
                    backgroundColor={"#1e2598"}
                    margin={"20px 5px 20px 5px"}
                    rounded={"md"}
                    color={"white"}
                    padding={"10px"}
                    width={{ base: "100%", md: "47%", lg: "40%", xl: "32%" }}
                    key={item._id}
                    alignSelf={"normal"}
                  >
                    <Link to={`/dashboard/UploadMembershipVideos/${item._id}`}>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      width={"100%"}
                      justifyContent={"space-between"}
                    >
                      <Text>{item.name}</Text>
                      <Button
                        border={"1px solid #1e2598"}
                        px={"30px"}
                        color={"#1e2598"}
                      >
                        Edit
                      </Button>
                    </Box>
                    <Flex marginTop={"15"} alignItems={"center"}>
                      <Flex fontSize={"40px"} fontWeight={"bold"}>
                        ${item.price}
                      </Flex>
                      <Text marginTop={"18px"} marginLeft={"5px"}>
                        per Month
                      </Text>
                    </Flex>
                    <Box
                      marginTop={"10px"}
                      borderBottom={"1px solid #fff"}
                    ></Box>
                    <Flex
                      color={"white"}
                      padding={"20px 2px 30px 20px"}
                      flexDirection={"column"}
                    >
                      <ul>
                        {item?.membershipDetails.length &&
                          item.membershipDetails?.map((feature) => {
                            return <li key={feature._id}>{feature.text}</li>;
                          })}
                      </ul>
                    </Flex>
                  </Link>
                  </Box>
                );
              })}
          </Box>
        </>
      )}
    </Sidebar>
  );
};
