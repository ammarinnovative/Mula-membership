import { useEffect, useState } from "react";
import { GET } from "../../utilities/ApiProvider";
import { useSelector } from "react-redux";
import { Input, Radio, RadioGroup, Stack, useToast } from "@chakra-ui/react";

export default function ChatRoomList({ show, onItemSelect }) {
  const [chatRoomList, setchatRoomList] = useState([]);
  const selector = useSelector((state) => state);
  const toast = useToast();

  useState(() => {
    if (selector) {
      (async () => {
        const res = await GET("chatroom", {
          authorization: `bearer ${selector.user.user.data.data.JWT_TOKEN}`,
        });

        console.log(res);
        setchatRoomList(res?.data);
      })();
    }
  }, []);

  const [value, setValue] = useState("");

  useEffect(() => {
    onItemSelect && onItemSelect(value);
  }, [value]);

  return (
    <Stack py={4} hidden={!show}>
      <RadioGroup onChange={setValue} value={value}>
        {chatRoomList?.map((item) => (
          <Stack key={item._id} direction="row">
            <Radio value={item._id}>{item.title}</Radio>
          </Stack>
        ))}
      </RadioGroup>
    </Stack>
  );
}
