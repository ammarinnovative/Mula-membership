import { extendTheme, Select, AvatarGroup, Wrap, WrapItem, ChakraProvider, Input, Center, Checkbox, ButtonGroup, CheckboxGroup, Circle, HStack, Box, Square, Flex, Text, Image, Button, Avatar } from '@chakra-ui/react'
import Sidebar from '../../Components/Sidebar/Sidebar.jsx'
import { FaPlusCircle } from "react-icons/fa";
import Detais from "../../Components/DetailsCard/Detail";
import { useEffect, useState } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ReactApexChart from "react-apexcharts";
import BasicStatistics from "../../Components/Cards/Card";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { CgAdd } from 'react-icons/cg';
import {GET} from "../../utilities/ApiProvider.js";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,

} from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import store from '../../app/store.js';



export const Home = () => {

    const navigate = useNavigate();
    const selector = useSelector(store => store);
    const [user,setUser] = useState();

    useEffect(() => {
        if(user === null){
            navigate('/login')
        }
    }, [selector]);

    const [datas,setDatas]= useState({
        summary:[],
        recenetCourses:[]
    });

    const [data, setData] = useState(
        [
            {
                num: 1,
                title: "Crypto trading",
                id: 1
            },
            {
                num: 2,
                title: "NFT mmarketplace",
                id: 2
            },
            {
                num: 3,
                title: "Bitcoin trading",
                id: 3
            },
        ]
    )


    const [date, setDate] = useState(new Date());
    const getData = (date) => {
        setDate(date)
    }


    const UserAct = [
        {
            title: "Total Courses",
            total: "45",
            view: "View All",
            id: 1
        },
        {
            title: "Active's User",
            total: "1,025",
            view: "View All",
            id: 2
        },


    ]


    useEffect(()=>{
        if(selector){
            setUser(selector?.user?.user?.data?.data);
        }
    },[selector])


    useEffect(()=>{
        if(user){
            getdetails();
        }
    },[user]);

    const getdetails = async()=>{
        const res = await GET("dashboard",{
            authorization: `bearer ${user?.JWT_TOKEN}`
        });
        setDatas({...datas,summary:res.data[0].summary,recenetCourses:res.data[0].recentCourses});
    }

    console.log(datas.summary)
    const [CharData, setChartData] = [{

        series: [{
            name: "Session Duration",
            data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
        },
        {
            name: "Page Views",
            data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
        },
        {
            name: 'Total Visits',
            data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
        }
        ],
        options: {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: [5, 7, 5],
                curve: 'straight',
                dashArray: [0, 8, 5]
            },
            title: {
                text: 'Page Statistics',
                align: 'left'
            },
            legend: {
                tooltipHoverFormatter: function (val, opts) {
                    return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
                }
            },
            markers: {
                size: 0,
                hover: {
                    sizeOffset: 6
                }
            },
            xaxis: {
                categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
                    '10 Jan', '11 Jan', '12 Jan'
                ],
            },
            tooltip: {
                y: [
                    {
                        title: {
                            formatter: function (val) {
                                return val + " (mins)"
                            }
                        }
                    },
                    {
                        title: {
                            formatter: function (val) {
                                return val + " per session"
                            }
                        }
                    },
                    {
                        title: {
                            formatter: function (val) {
                                return val;
                            }
                        }
                    }
                ]
            },
            grid: {
                borderColor: '#f1f1f1',
            }
        },


    }];

    const { isOpen, onOpen, onClose } = useDisclosure()



    return (
        <Box>
            <Sidebar>
                <Modal isOpen={isOpen} size={"2xl"} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                            <ModalHeader display={"flex"} alignItems={"center"}><Box cursor={"pointer"} onClick={onClose}><AiOutlineArrowLeft /></Box><Text marginLeft={"10px"} width={"200px"} fontSize={"20px"}>Choose an option</Text></ModalHeader>
                            <Box marginRight={"10px"} onClick={onClose}><Button>Next</Button></Box>
                        </Box>
                        <ModalBody>
                            <Box display={"flex"} gap={"10px"}>
                                <Box flex={"1"} shadow={"md"} backgroundColor={"#0d1140"} display={"flex"} justifyContent={"center"} alignItems={"center"} height={"15vh"} fontFamily={"poppins"} color={"white"} rounded={"md"}><Link to={"/dashboard/CourseDetails"}><Box display={"flex"} cursor={"pointer"} alignItems={"center"} flexDirection={"column"}><CgAdd fontSize={"24px"} />  Upload Courses</Box></Link></Box>
                                <Box flex={"1"} shadow={"md"} backgroundColor={"#fff"} display={"flex"} justifyContent={"center"} alignItems={"center"} height={"15vh"} border={"1px solid black"} fontFamily={"poppins"} color={"black"} rounded={"md"}><Link to={"/dashboard/UploadMembershipVideos"}><Box display={"flex"} cursor={"pointer"} alignItems={"center"} flexDirection={"column"}><CgAdd fontSize={"24px"} />Upload Membership Videos</Box></Link></Box>
                            </Box>
                        </ModalBody>
                    </ModalContent>
                </Modal>
                <Box gap={"20px"} display={{ lg: "flex" }} flexDirection={{ base: "column", md: "column", lg: "row" }} width={"100%"}>
                    <Box width={{ base: "100%", md: "50%" }} flex={"1"}>
                        <Text fontSize={{ base: "25px", md: "30px" }} textAlign={{ base: "center", md: "center", lg: "left" }} fontWeight={"600"}>Manage Your Courses</Text>
                    </Box>
                    {/* <Box width={"100%"} flex={"1"}>
                        <Box cursor={"pointer"} display={"flex"} onClick={onOpen} width={"100%"} justifyContent={"center"} alignItems={"center"} height={"20vh"} border={"2px  dashed black"}>
                            <FaPlusCircle size={"25px"} />
                        </Box>
                    </Box> */}
                    <Box marginTop={"20px"} flex={"3"} width={"100%"} fontWeight={"bold"} fontSize={"20px"}>
                        <Text>Recent Courses</Text>
                        <Detais data={datas.recenetCourses} />
                    </Box>
                </Box>
                <Box display={"flex"} flexDirection={{ base: "column", md: "column", lg: "row" }} marginTop={"60px"}>
                    <Box flex={"6"} width={"100%"}>
                        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                            <Text fontSize={"20px"} fontWeight={"bold"}>Membership Subscribers</Text>
                            <Select width={"20%"} size={{ base: "xsm" }} placeholder='Select'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </Box>
                        <Box marginTop={"40px"}>
                            <ReactApexChart options={CharData.options} series={CharData.series} type="line" height={350} />

                        </Box>
                    </Box>
                    <Box marginLeft={"30px"} flexDirection={{ base: "column", md: "column", lg: "row" }} justifyContent={{ base: "center", md: "center" }} flex={"4"}>
                        <Box display={"flex"} justifyContent={"space-between"}>
                            <Text fontWeight={"700"}>Zoom Meeting schedule</Text>
                            <Link to="/dashboard/MeetingSchdule"><Text>View All</Text></Link>
                        </Box>
                        <Box display={{ base: "flex" }} justifyContent={{ base: "center" }} marginTop={"50px"} >
                            <Calendar onChange={getData} value={date} />
                        </Box>
                    </Box>
                </Box>
                <Box display={"flex"} flexDirection={{ base: "column", md: "column", lg: "column", xl: "row" }} alignItems={'center'}>
                    <Box flex={2} width={"100%"}>
                        <BasicStatistics width={"100%"} UserAct={datas.summary} />
                    </Box>
                    <Box display={"flex"} marginTop={{ base: "40px" }} flexDirection={"column"} flex={1}   >
                        <Text fontWeight={"700"} fontSize={"23px"}>User Activities</Text>
                        <Flex flexDirection={{ base: "column", md: "column", lg: "row" }} alignItems={"center"}>
                            <Box display={"flex"} marginTop={"23px"} height={"3vh"} alignItems={"center"} max={4} gap={"-10px"}>
                                <AvatarGroup size='md' max={4}>
                                    <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                    <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                                    <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                                    <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                                </AvatarGroup>
                            </Box>
                            <Link to={"/dashboard/user"}><Button fontWeight={"700"} marginTop={{ base: "30px" }} backgroundColor={"white"} marginLeft={"20px"} border={"1px solid black"}>View All Activities</Button></Link>
                        </Flex>
                    </Box>
                </Box>
            </Sidebar >
        </Box >
    )
}



