import { extendTheme, Select, AvatarGroup, Wrap, WrapItem, ChakraProvider, Input, Center, Checkbox, ButtonGroup, CheckboxGroup, Circle, HStack, Box, Square, Flex, Text, Image, Button, Avatar } from '@chakra-ui/react'
import Sidebar from '../../Components/Sidebar/Sidebar.jsx'
import { FaPlusCircle } from "react-icons/fa";
import Detais from "../../Components/DetailsCard/Detail";
import { useState } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ReactApexChart from "react-apexcharts";
import BasicStatistics from "../../Components/Cards/Card";


export const Home = () => {



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
    console.log(date)
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




    return (
        <Box>
            <Sidebar>
                <Box gap={"20px"} display={{lg:"flex"}} flexDirection={{base:"column",md:"column",lg:"row"}}   width={"100%"}>
                    <Box width={{base:"100%",md:"50%"}} flex={"1"}>
                        <Text fontSize={{base:"25px",md:"30px"}} textAlign={{base:"center",md:"center"}} fontWeight={"600"}>Manage Your Courses</Text>
                        <Text textAlign={{base:"center",md:"cneter",lg:"left"}}>Upload your courses to click on the plus icon</Text>
                    </Box>
                    <Box width={"100%"} flex={"1"}>
                        <Input type="file" display={"none"} id={"file"} />
                        <label htmlFor='file'>
                            <Box cursor={"pointer"} display={"flex"} width={"100%"} justifyContent={"center"} alignItems={"center"} height={"20vh"} border={"2px  dashed black"}>
                                <FaPlusCircle size={"25px"} />
                            </Box>
                        </label>
                    </Box>
                    <Box marginTop={"20px"} flex={"3"} width={"100%"} fontWeight={"bold"} fontSize={"20px"}>
                        <Text>Recent Courses</Text>
                        <Detais data={data} />
                    </Box>
                </Box>
                <Box display={"flex"} flexDirection={{base:"column",md:"column",lg:"row"}} marginTop={"60px"}>
                    <Box flex={"6"} width={"100%"}>
                        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                            <Text fontSize={"20px"} fontWeight={"bold"}>Membership Subscribers</Text>
                            <Select width={"20%"} size={{base:"xsm"}}  placeholder='Select'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </Box>
                        <Box marginTop={"40px"}>
                            <ReactApexChart options={CharData.options} series={CharData.series} type="line" height={350} />

                        </Box>
                    </Box>
                    <Box marginLeft={"30px"} flexDirection={{base:"column",md:"column",lg:"row"}} justifyContent={{base:"center",md:"center"}} flex={"4"}>
                        <Box display={"flex"} justifyContent={"space-between"}>
                            <Text fontWeight={"700"}>Zoom Meeting schedule</Text>
                            <Text>View All</Text>
                        </Box>
                        <Box display={{base:"flex"}} justifyContent={{base:"center"}} marginTop={"50px"} >
                            <Calendar onChange={getData} value={date} />
                        </Box>
                    </Box>
                </Box>
                <Box display={"flex"} flexDirection={{base:"column",md:"column",lg:"column",xl:"row"}} alignItems={'center'}>
                    <Box flex={2} width={"100%"}>
                        <BasicStatistics width={"100%"} UserAct={UserAct} />
                    </Box>
                    <Box display={"flex"} marginTop={{base:"40px"}} flexDirection={"column"} flex={1}   >
                        <Text fontWeight={"700"} fontSize={"23px"}>User Activities</Text>
                        <Flex  flexDirection={{base:"column",md:"column",lg:"row"}} alignItems={"center"}>
                            <Box display={"flex"} marginTop={"23px"} height={"3vh"} alignItems={"center"} max={4} gap={"-10px"}>
                                <AvatarGroup size='md' max={4}>
                                    <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                    <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                                    <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                                    <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                                </AvatarGroup>
                            </Box>
                            <Button fontWeight={"700"} marginTop={{base:"30px"}} backgroundColor={"white"} marginLeft={"20px"} border={"1px solid black"}>View All Activities</Button>
                    </Flex>
                </Box>
        </Box>
            </Sidebar >
        </Box >
    )
}



