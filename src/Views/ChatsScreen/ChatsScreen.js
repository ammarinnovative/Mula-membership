import React, { useState } from 'react'
import { Heading,Stack,Flex, Box,Text,Image,Button, Input,Link, Tabs,TabList, TabPanels, Tab, TabPanel, InputGroup, InputLeftElement } from '@chakra-ui/react'
import Sidebar from "../../Components/Sidebar/Sidebar"
import {LinkIcon} from '@chakra-ui/icons'
import { FaEllipsisV } from "react-icons/fa";
import CahtProfile from "../../Assets/Images/cahtProfile.png"
import CahtProfilein from "../../Assets/Images/cahtProfilein.png"
import Avatar from "../../Assets/Images/Avatar.png"
import Avatar2 from "../../Assets/Images/Avatar2.png"
import Avatar3 from "../../Assets/Images/Avatar3.png"
import ActiveProfile from '../../Components/ActiveProfile/ActiveProfile';
import CahtProfilein2 from "../../Assets/Images/cahtProfilein2.png"
import Avatar4 from "../../Assets/Images/Avatar4.png"

export default function ChatsScreen() {
const [data,setData] = useState([
    {
        name:"Crypto Trading",
        img:CahtProfile,
        id:1
    },
    {
        name:"Stock Marketing",
        img:CahtProfile,
        id:2
    },
    {
        name:"Nfts Bet",
        img:CahtProfile,
        id:3
    },
]);


const [data2,setData2]= useState(
    [

        
        {
            name:"John Doe",
            img:Avatar,
            id:4
        },
        {
            name:"Alexa Alexander",
            img:Avatar2,
            id:5
        },
        {
            name:"Adam Knight",
            img:Avatar3,
            id:6
        },
    ]
)

const [data3,setData3] = useState([
    {
        name:"Crypto Trading",
        img:CahtProfile,
        id:7
    },
    {
        name:"Stock Marketing",
        img:CahtProfile,
        id:8
    },
    {
        name:"Nfts Bet",
        img:CahtProfile,
        id:9
    },
])

  return (
   <Sidebar>
        <Stack gap={"20px"} direction={"column, row"}>
            {/* profile */}
            <Stack  flex={"1"} overflow={"auto"}height={"820px"}>
                <Heading as="h2" size="md">
                    All Chats
                </Heading>
                <Text color={"#1e2597"} fontWeight={"600"}>
                Groups
                </Text>
                <ActiveProfile data={data} />
            
                <Text color={"#1e2597"} mt={"20px"} mb={"20px"} fontWeight={"600"}>
                    Direct Chats
                </Text>
                <ActiveProfile data={data2} />
        
                <Text color={"#1e2597"} mt={"20px"} mb={"20px"} fontWeight={"600"}>
                    Group Announcements
                </Text>
                <ActiveProfile data={data3} />
        
            </Stack>

            {/* Header , writter */}
            <Stack flex={"4"} borderBottom={"1px solid #000"} boxShadow={"3px -1px 5px -1px #000"} position="relative">
                {/* Header */}
                    <Box bg={"#1e2597"} color={"#fff"} padding={"15px 30px"} >
                        <Flex alignItems={"center"} justifyContent={"space-between"}>
                            <Heading as="h2" size="md">
                                Group Announcements
                            </Heading>
                            <Link to="/">
                                <FaEllipsisV/>
                            </Link>
                        </Flex>
                    </Box>
                    {/* tabs */}
                    <Tabs colorScheme='purple' variant='soft-rounded'>
                        <TabList borderBottom={"1px solid #1e2597"} padding={"10px 80px"}>
                            <Tab fontSize={"24px"} color={"#727272"}fontWeight={"600"}>NFTs</Tab>
                            <Tab fontSize={"24px"} color={"#727272"}fontWeight={"600"}>Crypto Trading</Tab>
                            <Tab fontSize={"24px"} color={"#727272"}fontWeight={"600"}>Stocks</Tab>
                        </TabList>

                        {/* chat */}
                        <TabPanels>
                            <TabPanel>
                                <Box height={"600px"} overflow={"auto"}>
                                    <Box padding={"0px 30px "}>
                                        <Stack spacing={"6"} direction="row" alignItems={"center"} paddingBottom={"20px"}>
                                            <Image width={"3%"} src={Avatar4}></Image>
                                            <Text fontSize={'md'} bg={"#b2b2b2"} color={"#000000"}  borderRadius={"12px 12px 12px 0px"}padding={"10px 20px"}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            </Text>
                                        </Stack>
                                    </Box>

                                    <Box padding={"0px 30px "}>
                                        <Stack spacing={"6"} direction="row" alignItems={"center"} paddingBottom={"20px"}>
                                            <Image width={"3%"} src={Avatar4}></Image>
                                            <Text fontSize={'md'} bg={"#b2b2b2"} color={"#000000"}  borderRadius={"12px 12px 12px 0px"}padding={"10px 20px"}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            </Text>
                                        </Stack>
                                    </Box>
                                    <Box padding={"0px 30px "}>
                                        <Stack spacing={"6"} direction="row" alignItems={"center"} paddingBottom={"20px"}>
                                            <Image width={"3%"} src={Avatar4}></Image>
                                            <Text fontSize={'md'} maxW={"960px"} bg={"#b2b2b2"} color={"#000000"}  borderRadius={"12px 12px 12px 0px"}padding={"10px 50px 10px 20px"}>
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </Text>
                                        </Stack>
                                    </Box>
                                </Box>
                            </TabPanel>

                            <TabPanel>
                                <Box height={"600px"} overflow={"auto"}>
                                    <Box padding={"0px 30px "}>
                                        <Stack spacing={"6"} direction="row" alignItems={"center"} paddingBottom={"20px"}>
                                            <Image width={"3%"} src={CahtProfilein}></Image>
                                            <Text fontSize={'md'} bg={"#b2b2b2"} color={"#000000"}  borderRadius={"12px 12px 12px 0px"}padding={"10px 20px"}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            </Text>
                                        </Stack>
                                    </Box>
                                    <Box padding={"10px 30px "}>
                                        <Stack spacing={"6"} direction="row" alignItems={"center"} justifyContent={"right"} textAlign={"left"} paddingBottom={"20px"}>
                                            <Text fontSize={'md'} bg={"#1e2598"} color={"#fff"} borderRadius={"12px 12px 0px 12px"}padding={"10px 20px"}>
                                                Duis aute irure dolor in reprehenderit
                                            </Text>
                                            <Image width={"3%"} src={CahtProfilein2}></Image>
                                        </Stack>
                                    </Box>
                                    <Box padding={"0px 30px "}>
                                        <Stack spacing={"6"} direction="row" alignItems={"center"} paddingBottom={"20px"}>
                                            <Image width={"3%"} src={CahtProfilein}></Image>
                                            <Text fontSize={'md'} bg={"#b2b2b2"} color={"#000000"}  borderRadius={"12px 12px 12px 0px"}padding={"10px 20px"}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            </Text>
                                        </Stack>
                                    </Box>
                                    <Box padding={"0px 30px "}>
                                        <Stack spacing={"6"} direction="row" alignItems={"center"} paddingBottom={"20px"}>
                                            <Image width={"3%"} src={CahtProfilein}></Image>
                                            <Text fontSize={'md'} maxW={"960px"} bg={"#b2b2b2"} color={"#000000"}  borderRadius={"12px 12px 12px 0px"}padding={"10px 50px 10px 20px"}>
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </Text>
                                        </Stack>
                                    </Box>
                                    <Box padding={"0px 30px "}>
                                        <Stack spacing={"6"} direction="row" alignItems={"center"} justifyContent={"right"} textAlign={"left"} paddingBottom={"20px"}>
                                            <Text fontSize={'md'} bg={"#1e2598"} color={"#fff"} borderRadius={"12px 12px 0px 12px"}padding={"10px 20px"}>
                                                YEs
                                            </Text>
                                            <Image width={"3%"} src={CahtProfilein2}></Image>
                                        </Stack>
                                    </Box>
                                    <Box padding={"0px 30px "}>
                                        <Stack spacing={"6"} direction="row" alignItems={"center"} paddingBottom={"20px"}>
                                            <Image width={"3%"} src={CahtProfilein}></Image>
                                            <Text fontSize={'md'} bg={"#b2b2b2"} color={"#000000"}  borderRadius={"12px 12px 12px 0px"}padding={"10px 20px"}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            </Text>
                                        </Stack>
                                    </Box>
                                    <Box padding={"0px 30px "}>
                                        <Stack spacing={"6"} direction="row" alignItems={"center"} justifyContent={"right"} textAlign={"left"} paddingBottom={"20px"}>
                                            <Text fontSize={'md'} bg={"#1e2598"} color={"#fff"} borderRadius={"12px 12px 0px 12px"}padding={"10px 20px"}>
                                                Duis aute irure dolor in reprehenderit
                                            </Text>
                                            <Image width={"3%"} src={CahtProfilein2}></Image>
                                        </Stack>
                                    </Box>
                                    <Box padding={"0px 30px "}>
                                        <Stack spacing={"6"} direction="row" alignItems={"center"} paddingBottom={"20px"}>
                                            <Image width={"3%"} src={CahtProfilein}></Image>
                                            <Text fontSize={'md'} bg={"#b2b2b2"} color={"#000000"}  borderRadius={"12px 12px 12px 0px"}padding={"10px 20px"}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            </Text>
                                        </Stack>
                                    </Box>
                                    <Box padding={"0px 30px "}>
                                        <Stack spacing={"6"} direction="row" alignItems={"center"} paddingBottom={"20px"}>
                                            <Image width={"3%"} src={CahtProfilein}></Image>
                                            <Text fontSize={'md'} maxW={"960px"} bg={"#b2b2b2"} color={"#000000"}  borderRadius={"12px 12px 12px 0px"}padding={"10px 50px 10px 20px"}>
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </Text>
                                        </Stack>
                                    </Box>
                                    <Box padding={"0px 30px "}>
                                        <Stack spacing={"6"} direction="row" alignItems={"center"} justifyContent={"right"} textAlign={"left"} paddingBottom={"20px"}>
                                            <Text fontSize={'md'} bg={"#1e2598"} color={"#fff"} borderRadius={"12px 12px 0px 12px"}padding={"10px 20px"}>
                                                YEs
                                            </Text>
                                            <Image width={"3%"} src={CahtProfilein2}></Image>
                                        </Stack>
                                    </Box>
                                </Box>
                            </TabPanel>

                            <TabPanel>
                                <Box height={"600px"} overflow={"auto"}>
                                    <Box padding={"10px 30px "}>
                                        <Stack spacing={"6"} direction="row" alignItems={"center"} justifyContent={"right"} textAlign={"left"} paddingBottom={"20px"}>
                                            <Text fontSize={'md'} bg={"#1e2598"} color={"#fff"} borderRadius={"12px 12px 0px 12px"}padding={"10px 20px"}>
                                                Duis aute irure dolor in reprehenderit
                                            </Text>
                                            <Image width={"3%"} src={CahtProfilein2}></Image>
                                        </Stack>
                                    </Box>
                                    
                                    <Box padding={"0px 30px "}>
                                        <Stack spacing={"6"} direction="row" alignItems={"center"} justifyContent={"right"} textAlign={"left"} paddingBottom={"20px"}>
                                            <Text fontSize={'md'} bg={"#1e2598"} color={"#fff"} borderRadius={"12px 12px 0px 12px"}padding={"10px 20px"}>
                                                YEs
                                            </Text>
                                            <Image width={"3%"} src={CahtProfilein2}></Image>
                                        </Stack>
                                    </Box>
                                    
                                    <Box padding={"0px 30px "}>
                                        <Stack spacing={"6"} direction="row" alignItems={"center"} justifyContent={"right"} textAlign={"left"} paddingBottom={"20px"}>
                                            <Text fontSize={'md'} bg={"#1e2598"} color={"#fff"} borderRadius={"12px 12px 0px 12px"}padding={"10px 20px"}>
                                                Duis aute irure dolor in reprehenderit
                                            </Text>
                                            <Image width={"3%"} src={CahtProfilein2}></Image>
                                        </Stack>
                                    </Box>
                                    <Box padding={"0px 30px "}>
                                        <Stack spacing={"6"} direction="row" alignItems={"center"} justifyContent={"right"} textAlign={"left"} paddingBottom={"20px"}>
                                            <Text fontSize={'md'} bg={"#1e2598"} color={"#fff"} borderRadius={"12px 12px 0px 12px"}padding={"10px 20px"}>
                                                YEs
                                            </Text>
                                            <Image width={"3%"} src={CahtProfilein2}></Image>
                                        </Stack>
                                    </Box>
                                </Box>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>               

                    {/* writter */}
                    <Stack bg={"#c8c8c8"} position={"absolute"} w={"100%"} bottom={"0"} padding={"10px 30px"} justifyContent={"space-between"} direction={"column,row"} alignItems={"center"}>
                        <Link to="/">
                            <LinkIcon fontSize={"20px"} color={"#000"}/> 
                        </Link>
                        <Input type="text"   color={"#000"} border={"none"} height={"auto"}  placeholder=' Enter your message' _placeholder={{ color:'#000' }} _focusVisible={{border:"none"}} />
                        <Button 
                        padding={"25px 50px"}
                        BorderRadius={"3px"}
                        border={"1px solid #2c339e"}
                        bg={"#1e2597"}
                        color= {"#fff"}
                        _hover={{
                        bg:"transparent",
                        border:"1px solid #2c339e",
                        color:"#1e2597",
                        transition:"all 0.7s"
                        }}>Send</Button>
                    </Stack>


            </Stack>
        </Stack>
   </Sidebar>
  )
}
