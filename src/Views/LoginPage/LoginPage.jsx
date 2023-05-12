import {
  extendTheme,
  ChakraProvider,
  Center,
  Checkbox,
  CheckboxGroup,
  Circle,
  HStack,
  Box,
  Square,
  Flex,
  Text,
  Image,
  Button,
  Container,
  VStack,
  InputGroup,
  InputRightElement,
  Toast,
} from "@chakra-ui/react";
import ColorShade from "../../Assets/Images/ColorShade.jpg";
import Logo from "../../Assets/Images/Logo.png";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiEdit } from "react-icons/fi";
import axios from "axios";
import { POST } from "../../utilities/ApiProvider";
import { Navigate, useNavigate } from "react-router-dom";
import { addUser } from "../../reducers/UserReducer";
import { Dispatch } from "react";
import { useToast } from "@chakra-ui/react";

export const LoginPage = () => {
  const toast = useToast();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Fields, setFields] = useState({
    email: "",
    password: "",
  });

  const submitForm = async () => {
    const res = await POST("admin/login", Fields);
    console.log(res)
    if (res.status == 200) {
      toast({
        description: res.data.message,
        status: "success",
        isClosable: true,
        position: "bottom-left",
        duration: 2500,
      });
      dispatch(addUser(res));
      navigate("/");
    } else {
      toast({
        description: res.data.message,
        status: "error",
        isClosable: true,
        position: "bottom-left",
        duration: 5000,
      });
    }
  };

  const selector = useSelector((store) => store);
  console.log(selector);
  const [show, setShow] = useState(false);
  return (
    <Box
      backgroundImage={ColorShade}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      className="boxMode"
      width={"100%"}
      height={"100vh"}
      backgroundSize={"cover"}
    >
      <Box
        display={"flex"}
        width="100%"
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Image src={Logo} width={"200px"} marginBottom={"24px"} />
        <Text
          textTransform={"uppercase"}
          fontFamily={"Poppins700"}
          fontSize={{ base: "35px", md: "50px", lg: "68px" }}
          fontWeight={"900"}
          color={"white"}
        >
          Welcome back
        </Text>
        <Text
          color={"white"}
          letterSpacing={"2px"}
          fontWeight={"normal"}
          marginBottom={"30px"}
          fontFamily={"poppins400"}
        >
          Enter your details
        </Text>
        <Container>
          <VStack>
            <FormControl>
              <Input
                type={"email"}
                onChange={(e) => {
                  setFields({ ...Fields, email: e.target.value });
                }}
                value={Fields.email}
                placeholder="Enter your Email"
                color={"white"}
              />
            </FormControl>
            <FormControl>
              <InputGroup>
                <Input
                  type={show ? "text" : "password"}
                  value={Fields.password}
                  onChange={(e) => {
                    setFields({ ...Fields, password: e.target.value });
                  }}
                  color="white"
                  placeholder="Enter your password"
                />
                <InputRightElement width={"4.5rem"}>
                  <Button
                    background={"#0084ce"}
                    onClick={() => {
                      setShow(!show);
                    }}
                    color="white"
                    _hover={"none"}
                    size={"sm"}
                  >
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button width={"100%"} onClick={submitForm} colorScheme={"blue"}>
              Submit
            </Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};
