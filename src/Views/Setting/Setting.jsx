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
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import store from "../../app/store";
import { useEffect, useState } from "react";
import { POST, PUT } from "../../utilities/ApiProvider";
import { Form } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { Modal } from "antd";
import { TailSpin } from "react-loader-spinner";
import { imageURL } from "../../utilities/config";

export const Setting = () => {
  const selector = useSelector((store) => store);
  const [selectedUser, setSelectedUser] = useState(null);
  // const id = selector.user.user.data.data._id;
  // const token = selector.user.user.data.data.JWT_TOKEN;
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState({});
  const [feields, setFields] = useState({
    name: "",
    password: "",
    confirmPassword: "",
  });
  const [ids, setId] = useState("");
  // let name;
  // const proImage = selector.user.user.data.data.profilePic;
  // let email = selector.user.user.data.data.email;
  useEffect(() => {
    if (selector) {
      setSelectedUser(selector?.user?.user?.data?.data ?? "");
    }
  }, [selector]);

  const toast = useToast();

  useEffect(() => {
    // setId(id);
    // name = selector.user.user.data.data.full_name;
    setFields({ ...feields, name: selectedUser?.full_name });
  }, [selector]);

  const uploadImage = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("profilePicture", image);
    const res = await POST(`users/profilePic/${selectedUser?._id}`, formData, {
      authorization: `bearer ${selectedUser?.JWT_TOKEN}`,
    });
    setLoading(false);
  };

  const UpdateData = async () => {
    setState(true);
    if(!feields.name || !feields.password || !feields.confirmPassword){
      toast({
        position:"bottom-left",
        status:"error",
        duration:5000,
        description:"Please fill all the fields",
        isClosable:true
      });
      return;
      setState(false);
    }
    if (feields.password.length !== 0 || feields.confirmPassword !== 0) {
      if (feields.password !== feields.confirmPassword) {
        toast({
          title: "Password and confrim doesn't match",
          duration: 5000,
          isClosable: true,
          position: "bottom-left",
          status: "error",
        });
        return;
        setState(false);
      }
    }
    let data = new Object(feields);
    delete data?.confirmPassword;

    if (feields.name.length == 0) {
      delete data?.name;
    }
    if(feields.password.length ==0){
      delete data?.password;
    }

    const res = await PUT(`users/update/${selectedUser?._id}`, data, {
      authorization: `bearer ${selectedUser?.JWT_TOKEN}`,
    });

    if (res.status == 200) {
      toast({
        position: "bottom-left",
        title: res.data.message,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        position: "bottom-left",
        title: res.data.meesgae,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }

    setFields({
      ...feields,
      password: "",
      confirmPassword: "",
    });
    setState(false);
  };
  return (
    <Sidebar>
      <Text
        fontSize={"20px"}
        display="flex"
        justifyContent={{ base: "center", md: "left", lg: "left" }}
        fontWeight="600"
      >
        Profile Photo
      </Text>
      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "row", lg: "row" }}
      >
        <Input
          type="file"
          display="none"
          id="profile"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <label htmlFor="profile">
          <Box
            display={"flex"}
            justifyContent={{ base: "center", md: "left", lg: "left" }}
          >
            <Image
              cursor={"pointer"}
              boxSize={"150px"}
              borderRadius={"full"}
              src={imageURL + selectedUser?.profilePic}
            />
          </Box>
        </label>
        <Box
          display={"flex"}
          gap="10px"
          marginLeft="10px"
          justifyContent="center"
          flexDirection="column"
        >
          <Button
            px="35px"
            _hover={{ backgroundColor: "#1e2598" }}
            backgroundColor={"#1e2598"}
            color="#fff"
            onClick={uploadImage}
          >
            {loading ? (
              <TailSpin
                height="20"
                width="20"
                color="white"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            ) : (
              "Change"
            )}
          </Button>
        </Box>
      </Box>
      <Box paddingTop={"20px"}>
        <Text
          fontSize={"20px"}
          textAlign={{ base: "center", md: "left", lg: "left" }}
          fontWeight="600"
          fontFamily={"poppins"}
        >
          Account Setting
        </Text>
        <Box>
          <Box
            display={"flex"}
            flexDirection={{ base: "column", md: "row", lg: "row" }}
            mt="40px"
            gap="20px"
          >
            <FormControl width={{ base: "100%", md: "45%", lg: "30%" }}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                onChange={(e) => {
                  setFields({ ...feields, name: e.target.value });
                }}
                value={feields.name}
                border={"1px solid"}
                placeholder="Enter your Name"
              />
            </FormControl>
            <FormControl width={{ base: "100%", md: "45%", lg: "30%" }}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={selectedUser?.email}
                border={"1px solid"}
                placeholder="Enter your Email"
              />
            </FormControl>
          </Box>
          <Box marginTop={"30px"}>
            <Text fontSize={"20px"} marginBottom="10px" fontWeight="700">
              New
            </Text>
            <Box
              display={"flex"}
              flexDirection={{ base: "column", md: "row", lg: "row" }}
              gap="20px"
            >
              <FormControl width={{ base: "100%", md: "45%", lg: "30%" }}>
                <FormLabel>Enter New Password</FormLabel>
                <Input
                  onChange={(e) => {
                    setFields({ ...feields, password: e.target.value });
                  }}
                  border={"1px solid"}
                  value={feields.password}
                  placeholder="Enter your Password"
                />
              </FormControl>
              <FormControl width={{ base: "100%", md: "45%", lg: "30%" }}>
                <FormLabel>Enter Confirm Password</FormLabel>
                <Input
                  value={feields.confirmPassword}
                  onChange={(e) => {
                    setFields({ ...feields, confirmPassword: e.target.value });
                  }}
                  border={"1px solid"}
                  placeholder="Enter your Password"
                />
              </FormControl>
            </Box>
          </Box>
          <Button
            backgroundColor={"#1e2598"}
            width={{ base: "100%", md: "45%", lg: "30%" }}
            mt="20px"
            _hover="none"
            onClick={UpdateData}
            color="white"
          >
            {state ? (
              <TailSpin
                height="20"
                width="20"
                color="white"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            ) : (
              "Change Password"
            )}
          </Button>
        </Box>
      </Box>
    </Sidebar>
  );
};
