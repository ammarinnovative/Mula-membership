import React, { useEffect, useState } from "react";
import { Box, Text, Avatar, Input, Button, WrapItem } from "@chakra-ui/react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import { GET, POST,PUT } from "../../utilities/ApiProvider";
import { imageURL } from "../../utilities/config";
import { AiFillWarning } from "react-icons/ai";
import { useToast } from "@chakra-ui/react";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Payout = () => {
  const selector = useSelector((state) => state);
  const [user, setUser] = useState();
  const [data, setData] = useState([]);
  const [files, setFile] = useState({});
  const [loading,setLoading] = useState(false);
  const [ids,setId] = useState("");



  const toast = useToast();
  useEffect(() => {
    if (selector) {
      setUser(selector?.user?.user?.data?.data);
    }
  }, [selector]);

  useEffect(() => {
    if (user) {
      getData();
    }
  }, [user]);

  const getData = async () => {
    setLoading(true)
    const res = await GET("dashboard/payoutRequest", {
      authorization: `bearer ${user?.JWT_TOKEN}`,
    });
    setData(res?.data);
    setLoading(false)
  };


  const Approve =async () => {
    console.log(ids);
    const formdata = new FormData();
    formdata.append('attachment',files);
    try {
      const res = await PUT(`dashboard/payoutUpdate/${ids}`,formdata,{
        authorization: `bearer ${user?.JWT_TOKEN}`
      });
      if(res.status==200){
        toast({
          position:"bottom-left",
          isClosable:true,
          description:"Payment approved",
          status:"success",
          duration:5000,
        })
      }else{
        toast({
          position:"bottom-left",
          isClosable:true,
          description:res.data.message,
          duration:5000,
          status:"error"
        })
      }
      getData();
    } catch (error) {
      toast({
        position:"bottom-left",
        isClosable:true,
        duration:5000,
        status:"error",
        description:error
      })
    }
    
  };

  return (
    <Sidebar>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
      <Text fontSize={"20px"} fontWeight={"semibold"}>
        User Payout Requests
      </Text>
      <Link to={"/dashboard/PayoutHistory"}><Button _hover={{backgroundColor:"none"}} color={"white"} backgroundColor={"#1e2598"}>Payout History</Button></Link>
      </Box>
      
      {
        loading?<Box display={"grid"} height={"70vh"} placeItems={"center"}>
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
      </Box>:
      data.length==0?<Text fontSize={"25px"} width={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"} height={"60vh"} fontWeight={"semibold"}>No Request Found</Text>: 
      
      data &&
        data?.map((item) => {
          return (
            <>
              <Box
              key={item._id}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
              >
                <Box mt="20px">
                  <Box
                    padding={"4px 10px"}
                    m={"15px 0"}
                    width={"fit-content"}
                    backgroundColor={"#f7dec1"}
                    color={"#c1925c"}
                    border={"1px solid #e39e52"}
                  >
                    Status:Pending
                  </Box>
                  <Box>
                    <Box
                      display={"flex"}
                      m={"30px 0"}
                      width={"100%"}
                      justifyContent={"space-between"}
                    >
                      <WrapItem width={"200px"}>
                        <Avatar
                          name="Dan Abrahmov"
                          src="https://bit.ly/dan-abramov"
                        />
                        <Box>
                          <Text color={"gray.700"}>Name</Text>
                          <Text fontWeight={"bold"} fontSize={"13px"}>
                            {item?.username}
                          </Text>
                        </Box>
                      </WrapItem>
                      <Box
                        width={"200px"}
                        display={{ base: "none", md: "none", lg: "block" }}
                      >
                        <Text color={"gray.500"}>Amount</Text>
                        <Text fontWeight={"600"}>${item?.amount}</Text>
                      </Box>
                      <Box
                        width={"200px"}
                        display={{ base: "none", md: "none", lg: "block" }}
                      >
                        <Text color={"gray.500"}>Cretaed At</Text>
                        <Text fontWeight={"600"}>{item?.createdAt}</Text>
                      </Box>
                      <Input
                        type="file"
                        id="attachment"
                        name="attachment"
                        display={"none"}
                        onChange={(e)=>{setFile(e.target.files[0])}}
                        
                      />
                      
                        <Box
                          display={{ base: "none", md: "none", lg: "block" }}
                        >
                          <Button
                            backgroundColor={"transparent"}
                            _hover={{ backgroundColor: "none" }}
                            cursor={"pointer"}
                            onClick={(e)=>{setId(item._id)}}
                            border={"1px solid black"}
                          ><label htmlFor="attachment">
                            Attach File
                            </label>
                          </Button>
                        </Box>
                      
                      <Box display={{ base: "none", md: "none", lg: "block" }}>
                        <Button
                          backgroundColor={"green.600"}
                          _hover={{ backgroundColor: "green.700" }}
                          color={"white"}
                          onClick={()=>{Approve(item._id)}}
                        >
                          Completed
                        </Button>
                      </Box>
                      <Box display={{ base: "none", md: "none", lg: "block" }}>
                        <Text></Text>
                        <Text fontWeight={"500"}></Text>
                      </Box>
                      <Box display={{ base: "block", md: "block", lg: "none" }}>
                        <Button
                          marginLeft={"120px"}
                          color={"#fff"}
                          size="sm"
                          _hover={{ backgroundColor: "0d1140" }}
                          backgroundColor={"#24349d"}
                        >
                          View Details
                        </Button>
                      </Box>
                      <Box borderBottom={"2px solid #000"}></Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </>
          );
        })}
    </Sidebar>
  );
};

export default Payout;
