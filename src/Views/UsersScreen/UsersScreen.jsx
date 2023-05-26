import { extendTheme, ChakraProvider, Center, Checkbox, ButtonGroup, CheckboxGroup, Circle, HStack, Box, Square, Flex, Text, Image, Button } from '@chakra-ui/react'
import Sidebar from "../../Components/Sidebar/Sidebar"
import BasicStatistics from "../../Components/Cards/Card";
import Table from "../../Components/table/table";
import {GET} from "../../utilities/ApiProvider";
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Item from 'antd/es/list/Item';

export const UserScreen = () => {

const selecor = useSelector(state=>state);

    const [data,setData] = useState([]);
    const [user,settUser]= useState({});
    const [fields,setFields] = useState([
        {
        Summry:{},
        },
        {
            totalMembers:[],
        },
        {
            courseMembers:[{}],
        },
        {
            Subscribers:[{}],
        },
        {
            BlockedMembers:[{}]
        }
        
]);








    const getUser = async ()=>{
        const res = await GET("dashboard/user",{
            authorization:`bearer ${user?.JWT_TOKEN}`
        });
        setFields([
        {
            Summry:res.data[0].Summry,
        },
        {
            Subscribers:res.data[0].Subscribers
        },
        {
            totalMembers:res.data[0].totalMembers
        },
        {
            BlockedMembers:res.data[0].BlockedMembers
        }
    ]);
        // setFields([{
        //     Summry:res.data[0].Summry,
        //     courseMembers:res.data[0].courseMembers,
        //     Subscribers:res.data[0].Subscribers,
        //     BlockedMembers:res.data[0].BlockedMembers
        // }]);
    }


    console.log([...new Set(fields.map((item)=>{return item}))]);


    useEffect(()=>{
        if(selecor){
            settUser(selecor?.user?.user?.data?.data);
        }
    },[selecor]);

    for (const obj of data) {
        const keys = Object.keys(obj); // Getting the keys of the object
        if (keys.length > 0) {
          const firstKey = keys[0]; // Accessing the first key
          const firstValue = obj[firstKey]; // Accessing the value corresponding to the first key
      
          console.log(firstKey, firstValue);
        }
      }


    useEffect(()=>{
        if(user){
            getUser();
        }
    },[user])
    const UserAct = [
        {
            title: "Total Members",
            total: "4,214",
            id: 1
        },
        {
            title: "Total Course Member",
            total: "523",
            id: 2
        },
        {
            title: "Total Subscripber Member",
            total: "110",
            id: 3
        },
        {
            title: "Total Revenue",
            total: "$24,251.00",
            id: 4
        },
    ]


    const buttonData = [
        {
            btn: "Total Members"
        },
        {
            btn: "Course Member"
        },
        {
            btn: "Subscriber Members"
        },
        {
            btn:"Blocked Members"
        }

    ]




    return (
        <Sidebar>
            <Box paddingLeft={"16px"}>
                <Text fontSize={"30px"} textAlign={{base:"center",md:"left",lg:"left"}} fontWeight={"700"}>Activities</Text>
            </Box>
            <Box>
                <BasicStatistics UserAct={UserAct} />
            </Box>
            <Box padding={"16px"}>
                <Text fontFamily={"poppins"} textAlign={{base:"center",md:"left",lg:"left"}} fontSize={"25px"} fontWeight={"900"}>Members Activities</Text>
                <Text fontSize={"20px"} color={"gray.700"} textAlign={{base:"center",md:"left",lg:"left"}} fontFamily={"poppins"} >Manage total users,courses tears and their progress</Text>
                <Flex mt={"20px"} gap="10px"  flexWrap={"wrap"} width={{base:"100%",md:"100%",lg:"100%"}} justifyContent={"space-between"}>
                    {/* {arrBtn.map((data) => {
                        return (
                            <Button onClick={()=>{btnData(data)}}  _hover={{backgroundColor:"#2c339e"}} width={{base:"100%",md:"40%",lg:"30%",'xl':"23%"}} color={"white"} marginBottom={"20px"} backgroundColor={"#2c339e"}>{data}</Button>
                        )
                    })} */}
                </Flex>
                <Table />
            </Box>
        </Sidebar>
    )
}





















// <Box marginTop={"70px"}>
//                 <Box marginBottom={"30px"}>
//                     <Flex width={"100%"} marginBottom={"30px"} justifyContent={"space-between"}>
//                         <WrapItem>
//                             <Avatar name='Dan Abrahmov' display={{ md: "none", lg: "block" }} src='https://bit.ly/dan-abramov' />
//                             <Box>
//                                 <Text color={"gray.700"}>Name</Text>
//                                 <Text fontWeight={"bold"} fontSize={"13px"}>John Peterson</Text>
//                             </Box>
//                         </WrapItem>
//                         <Box display={{ base: "none", md: "none", lg: "block" }}>
//                             <Text>Email,</Text>
//                             <Text fontWeight={"500"}>jack34@gmail.com</Text>
//                         </Box>
//                         <Box display={{ base: "none", md: "none", lg: "block" }}>
//                             <Text>Phone:</Text>
//                             <Text fontWeight={"500"}>+92443454545</Text>
//                         </Box>
//                         <Box display={{ base: "none", md: "none", lg: "block" }}>
//                             <Text>Register Date</Text>
//                             <Text fontWeight={"500"}>15Feb 2020</Text>
//                         </Box>
//                         <Box display={{ base: "none", md: "none", lg: "block" }}>
//                             <Text>Item</Text>
//                             <Text fontWeight={"500"}>(Silver Tier)</Text>
//                         </Box>
//                         <Box display={{ base: "none", md: "none", lg: "block" }}>
//                             <Text>Pay</Text>
//                             <Text fontWeight={"500"}>$10,00</Text>
//                         </Box>
//                         <Box borderBottom={"2px solid #000"}></Box>
//                         <Box display={{ base: "block", md: "block", lg: "none" }}>
//                             <Button color={"#fff"} size="sm" _hover={{ backgroundColor: "0d1140" }} backgroundColor={"#24349d"}>View Details</Button>
//                         </Box>
//                     </Flex>
//                     <Flex width={"90%"} display={{ base: "none", md: "none", lg: "block" }} margin={"auto"} justifyContent={"space-between"}>
//                         <Text color={"red"}>This user has been deleted</Text>
//                         <Button fontWeight={"normal"} px={"40px"} border={"1px solid black"}>Unblocked</Button>
//                     </Flex>
//                     <Box width={"80%"} marginLeft={"45px"} marginTop={"30px"} border={"1px solid gray"}></Box>
//                 </Box>
//                 <Box marginBottom={"30px"}>
//                     <Flex width={"100%"} marginBottom={"30px"} justifyContent={"space-between"}>
//                         <WrapItem>
//                             <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
//                             <Box>
//                                 <Text color={"gray.700"}>Name</Text>
//                                 <Text fontWeight={"bold"} fontSize={"13px"}>John Peterson</Text>
//                             </Box>
//                         </WrapItem>
//                         <Box display={{ base: "none", md: "none", lg: "block" }}>
//                             <Text>Email,</Text>
//                             <Text fontWeight={"500"}>jack34@gmail.com</Text>
//                         </Box>
//                         <Box display={{ base: "none", md: "none", lg: "block" }}>
//                             <Text>Phone:</Text>
//                             <Text fontWeight={"500"}>+92443454545</Text>
//                         </Box>
//                         <Box display={{ base: "none", md: "none", lg: "block" }}>
//                             <Text>Register Date</Text>
//                             <Text fontWeight={"500"}>15Feb 2020</Text>
//                         </Box>
//                         <Box display={{ base: "none", md: "none", lg: "block" }}>
//                             <Text>Item</Text>
//                             <Text fontWeight={"500"}>(Silver Tier)</Text>
//                         </Box>

//                         <Box display={{ base: "none", md: "none", lg: "block" }}>
//                             <Text>Pay</Text>
//                             <Text fontWeight={"500"}>$10,00</Text>
//                         </Box>
//                         <Box borderBottom={"2px solid #000"}></Box>
//                         <Box display={{ base: "block", md: "block", lg: "none" }}>
//                             <Button color={"#fff"} _hover={{ backgroundColor: "0d1140" }} size={"sm"} backgroundColor={"#24349d"}>View Details</Button>
//                         </Box>
//                     </Flex>

//                     <Flex display={{ base: "none", md: "none", lg: "block" }} width={"90%"} margin={"auto"} justifyContent={"space-between"}>
//                         <Text color={"red"}>This user has been deleted</Text>
//                         <Button fontWeight={"normal"} px={"40px"} border={"1px solid black"}>Unblocked</Button>
//                     </Flex>
//                     <Box width={"80%"} marginLeft={"45px"} marginTop={"30px"} border={"1px solid gray"}></Box>
//                 </Box>
//             </Box>