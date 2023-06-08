import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { GET } from "../../utilities/ApiProvider";
import { useSelector } from "react-redux";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { TailSpin } from "react-loader-spinner";


const PayoutHistory = () => {
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);
  const [loading,setLoading]=useState(false);
  const selector = useSelector((state) => state);
  useEffect(() => {
    if (selector) {
      setUser(selector?.user?.user?.data?.data);
    }
  }, [selector]);

  const getData = async () => {
    setLoading(true);
    const res = await GET("dashboard/payoutHistory", {
      authorization: `bearer ${user?.JWT_TOKEN}`,
    });
    setData(res.data);
    setLoading(false);
  };

  console.log(user?.JWT_TOKEN);
  useEffect(() => {
    if (user) {
      getData();
    }
  }, [user]);
  return (
    <Sidebar>
      <Text fontSize={"27px"} textAlign={"center"} fontWeight={"semibold"}>
        Payout History
      </Text>
      <Box mt={"50px"} backgroundColor={"white"}>
        {
            loading? <Box display={"grid"} height={"70vh"} placeItems={"center"}>
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
            </Box> :""
        }
        <TableContainer>
          <Table variant="gray">
            <Thead>
              <Tr color={"gray.500"} backgroundColor={"gray.200"}>
                <Th fontSize={"20px"} fontWeight={"semibold"}>
                  User Id
                </Th>
                <Th fontWeight={"semibold"} fontSize={"20px"}>
                  Name
                </Th>
                <Th fontWeight={"semibold"} fontSize={"20px"}>
                  Amount
                </Th>
                <Th fontWeight={"semibold"} fontSize={"20px"}>
                  Status
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {data &&
                data?.map((e) => {
                  return (
                    <Tr key={e._id}>
                      <Td>{e.userId}</Td>
                      <Td>{e.username}</Td>
                      <Td>{e.amount}</Td>
                      <Td>{e.status}</Td>
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Sidebar>
  );
};

export default PayoutHistory;



