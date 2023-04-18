import { useState } from "react";
import { Box, Text, Flex, WrapItem, Avatar, Button, Wrap } from "@chakra-ui/react"
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { GrAddCircle } from 'react-icons/gr';
import { GrClose } from 'react-icons/gr';



const MeetingSchedule = () => {
    const [date, setDate] = useState(new Date());
    return (
        <Sidebar>
            <Box display={"flex"} flexDirection={{ base: "column", md: "column", lg: "column",xl:"row" }}>
                <Box flex={"2"}>
                    <Box mt={"30px"}>
                        <Text fontSize={"20px"}textAlign={{base:"center",md:"center",lg:"left"}} margin="10px 0" fontFamily={"poppins"} fontWeight="600">Next Zoom Meeting</Text>
                        <Text textAlign={{base:"center",md:"center",lg:"left"}}>4 available meeting on saturday</Text>
                        <Box marginTop={"30px"}>
                            <Box color={"black"} marginBottom={"30px"}>
                                <Flex width={"100%"} alignItems={"center"} justifyContent={"space-between"}>
                                    <WrapItem  >
                                        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                                        <Box>
                                            <Text color={"gray.700"}>Name</Text>
                                            <Text fontWeight={"bold"} fontSize={"13px"}>John Peterson</Text>
                                        </Box>
                                    </WrapItem>
                                    <Box>
                                        <Text>Date,</Text>
                                        <Text fontWeight={"500"}>15Feb 2023</Text>
                                    </Box>
                                    <Button color="red" fontWeight={"normal"} display={{ base: "none", md: "none", lg: "block" }} border={"1px solid red"}>Cancel Meeting</Button>
                                    <Box display={{base:"block",md:"block",lg:"none"}}>
                                        <GrClose />
                                    </Box>
                                    <Box borderBottom={"2px solid #000"}></Box>

                                </Flex>
                                <Box width={"80%"} marginLeft={"45px"} marginTop={"30px"} border={"1px solid gray"}></Box>
                            </Box>
                            <Box color={"black"} marginBottom={"30px"}>
                                <Flex width={"100%"} alignItems={"center"} justifyContent={"space-between"}>
                                    <WrapItem  >
                                        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                                        <Box>
                                            <Text color={"gray.700"}>Name</Text>
                                            <Text fontWeight={"bold"} fontSize={"13px"}>John Peterson</Text>
                                        </Box>
                                    </WrapItem>
                                    <Box>
                                        <Text>Date,</Text>
                                        <Text fontWeight={"500"}>15Feb 2023</Text>
                                    </Box>
                                    <Button color="red" display={{ base: "none", md: "none", lg: "block" }} fontWeight={"normal"} border={"1px solid red"}>Cancel Meeting</Button>
                                    <Box display={{base:"block",md:"block",lg:"none"}}>
                                        <GrClose />
                                    </Box>
                                    <Box borderBottom={"2px solid #000"}></Box>
                                </Flex>
                                <Box width={"80%"} marginLeft={"45px"} marginTop={"30px"} border={"1px solid gray"}></Box>
                            </Box>
                            <Box color={"black"} marginBottom={"30px"}>
                                <Flex width={"100%"} alignItems={"center"} justifyContent={"space-between"}>
                                    <WrapItem  >
                                        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                                        <Box>
                                            <Text color={"gray.700"}>Name</Text>
                                            <Text fontWeight={"bold"} fontSize={"13px"}>John Peterson</Text>
                                        </Box>
                                    </WrapItem>
                                    <Box>
                                        <Text>Date,</Text>
                                        <Text fontWeight={"500"}>15Feb 2023</Text>
                                    </Box>
                                    <Button color="red" fontWeight={"normal"} display={{ base: "none", md: "none", lg: "block" }} border={"1px solid red"}>Cancel Meeting</Button>
                                    <Box display={{base:"block",md:"block",lg:"none"}}>
                                        <GrClose />
                                    </Box>
                                    <Box borderBottom={"2px solid #000"}></Box>

                                </Flex>
                                <Box width={"80%"} marginLeft={"45px"} marginTop={"30px"} border={"1px solid gray"}></Box>
                            </Box>
                            <Box color={"black"} marginBottom={"30px"}>
                                <Flex width={"100%"} alignItems={"center"} justifyContent={"space-between"}>
                                    <WrapItem  >
                                        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                                        <Box>
                                            <Text color={"gray.700"}>Name</Text>
                                            <Text fontWeight={"bold"} fontSize={"13px"}>John Peterson</Text>
                                        </Box>
                                    </WrapItem>
                                    <Box>
                                        <Text>Date,</Text>
                                        <Text fontWeight={"500"}>15Feb 2023</Text>
                                    </Box>
                                    <Button color="red" fontWeight={"normal"} display={{ base: "none", md: "none", lg: "block" }} border={"1px solid red"}>Cancel Meeting</Button>
                                    <Box  cursor="pointer" display={{base:"block",md:"block",lg:"none"}}>
                                        <GrClose />
                                    </Box>
                                    <Box borderBottom={"2px solid #000"}></Box>

                                </Flex>
                                <Box width={"80%"} marginLeft={"45px"} marginTop={"30px"} border={"1px solid gray"}></Box>
                            </Box>
                        </Box>
                    </Box>

                </Box>
                <Box flex={"1"}>
                    <Box display={"flex"} justifyContent={{base:"center",md:"left",lg:"left",xl:"right"}}>
                        <Button leftIcon={<GrAddCircle />} width={{base:"100%",md:"100%",lg:"100%",xl:"60%"}} border={"1px solid #000"}>Create Meeting</Button>
                    </Box>
                    <Text mt={"30px"} fontSize={"20px"} fontWeight="600">Cancelled Meeting</Text>
                    <Box>
                        <Box display={"flex"} justifyContent="space-between" mt={"30px"}>
                            <Box>
                                <Wrap>
                                    <WrapItem display={"flex"} alignItems="center">
                                        <Avatar name="Jackson" size={"md"} src="https://bit.ly/dan-abramov" />
                                        <Text fontWeight={"600"} marginLeft={"5px"}>John Deo</Text>
                                    </WrapItem>
                                </Wrap>
                            </Box>
                            <Box>
                                <Box color={"gray"}>Date:</Box>
                                <Box fontWeight={"600"}>15Feb,2023</Box>
                            </Box>
                        </Box>
                        <Text color={"red"} marginBottom={"10px"} marginTop="15px" fontFamily="poppins">This meeting has been deleted</Text>
                        <Box borderBottom={"1px solid gray"} marginTop="20px"></Box>
                        <Box display={"flex"} justifyContent="space-between" mt={"30px"}>
                            <Box>
                                <Wrap>
                                    <WrapItem display={"flex"} alignItems="center">
                                        <Avatar name="Jackson" size={"md"} src="https://bit.ly/dan-abramov" />
                                        <Text fontWeight={"600"} marginLeft={"5px"}>John Deo</Text>
                                    </WrapItem>
                                </Wrap>
                            </Box>
                            <Box>
                                <Box color={"gray"}>Date:</Box>
                                <Box fontWeight={"600"}>15Feb,2023</Box>
                            </Box>
                        </Box>
                        <Text color={"red"} marginBottom={"10px"} marginTop="15px" fontFamily="poppins">This meeting has been deleted</Text>
                        <Box borderBottom={"1px solid gray"} marginTop="20px"></Box>
                    </Box>
                    <Box display={"flex"} marginTop={"10px"} justifyContent={{base:"center",md:"center",lg:"right"}}> 
                    <Calendar
                        onChange={setDate}
                        value={date}
                        maxDate={new Date()}
                    />
                    </Box>
                </Box>
            </Box>
        </Sidebar>
    )
}


export default MeetingSchedule;