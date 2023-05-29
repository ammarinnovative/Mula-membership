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
} from "@chakra-ui/react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import BasicStatistics from "../../Components/Cards/Card";
import Table from "../../Components/table/table";
import { GET } from "../../utilities/ApiProvider";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Item from "antd/es/list/Item";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'



export const UserScreen = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const selecor = useSelector((state) => state);
  const [data, setData] = useState([]);
  const [user, settUser] = useState({});
  const [details,setDetails] = useState({
    name:"",
    phone:"",
    id:""
  });
  const [filterData,setFilterData] = useState();
  const [selected,setSelected] = useState("");
  const [btns,setBtns] = useState("");
  const [fields, setFields] = useState([
    { Summry: {} },
    {
      totalMembers: [],
      courseMembers: [{}],
      Subscribers: [{}],
      BlockedMembers: [{}],
    },
  ]);

  const getUser = async () => {
    const res = await GET("dashboard/user", {
      authorization: `bearer ${user?.JWT_TOKEN}`,
    });
    setFields([
      { Summry: res.data[0].Summry },
      {
        totalMembers: res.data[0].totalMembers,
        courseMembers: res.data[0].courseMembers,
        Subscribers: res.data[0].courseMembers,
        BlockedMembers: res.data[0].BlockedMembers,
      },
    ]);
  };

  // console.log(fields)

  useEffect(() => {
    if (selecor) {
      settUser(selecor?.user?.user?.data?.data);
    }
  }, [selecor]);

  const btn = [];

  for (let key in fields[1]) {
    btn.push(key);
  }

  useEffect(() => {
    if (user) {
      getUser();
    }
  }, [user]);
  const UserAct = [
    {
      title: "Total Members",
      total: "4,214",
      id: 1,
    },
    {
      title: "Total Course Member",
      total: "523",
      id: 2,
    },
    {
      title: "Total Subscripber Member",
      total: "110",
      id: 3,
    },
    {
      title: "Total Revenue",
      total: "$24,251.00",
      id: 4,
    },
  ];

    const btnData = (data) => {
      setSelected(data);
    setFilterData(fields[1][data]);
  };


  const btnItems = (_name,_number,_id)=>{
    setDetails({
      name:_name,
      number:_number,
      id:_id
    })
    console.log(details);
    onOpen();
  }


  

  return (
    <Sidebar>
     <Modal  isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>User Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box display={"flex"} gap={"20px"} flexWrap={"wrap"}>
            <Box width={"45%"}>
              <Text fontWeight={"bold"}>Name:</Text>
            <Text>{details.name}</Text>
            </Box>
            <Box width={"45%"}>
              <Text fontWeight={"bold"}>Phone:</Text>
            <Text>{details.number}</Text>
            </Box>
            <Box width={"100%"}>
              <Text fontWeight={"bold"}>ID:</Text>
            <Text>{details.id}</Text>
            </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Box paddingLeft={"16px"}>
        <Text
          fontSize={"30px"}
          textAlign={{ base: "center", md: "left", lg: "left" }}
          fontWeight={"700"}
        >
          Activities
        </Text>
      </Box>
      <Box>
        <BasicStatistics UserAct={UserAct} />
      </Box>
      <Box padding={"16px"}>
        <Text
          fontFamily={"poppins"}
          textAlign={{ base: "center", md: "left", lg: "left" }}
          fontSize={"25px"}
          fontWeight={"900"}
        >
          Members Activities
        </Text>
        <Text
          fontSize={"20px"}
          color={"gray.700"}
          textAlign={{ base: "center", md: "left", lg: "left" }}
          fontFamily={"poppins"}
        >
          Manage total users,courses tears and their progress
        </Text>
        <Flex
          mt={"20px"}
          gap="10px"
          flexWrap={"wrap"}
          width={{ base: "100%", md: "100%", lg: "100%" }}
          justifyContent={"space-between"}
        >
          {btn.map((data) => {
            return (
              <Button
                onClick={()=>{btnData(data)}}
                _hover={{ backgroundColor: "#2c339e",color:"white" }}
                width={{ base: "100%", md: "40%", lg: "30%", xl: "23%" }}
                color={data===selected?"white":"blue"}
                border={"1px solid #1e2598"}
                marginBottom={"20px"}
                backgroundColor={data===selected?"#1e2598":"none"}
                
              >
                {data}
              </Button>
            );
          })}
        </Flex>
        {
          filterData && filterData?.map((data)=>{
            return(
              <Table onOpen={onOpen} btnItems={btnItems}  name={data?.full_name ?? ""} id={data._id} number={data?.phone_number ?? ""} profile={data?.profilePic ?? ""} />
            )
          })
        }
      </Box>
    </Sidebar>
  );
};


