import Logo from "../../Assets/Images/Logo.png"
import { FaHome, FaUserCheck, FaDollarSign } from "react-icons/fa";
import React, { ReactNode, useEffect, useState } from 'react';
import { Link as ReactLink, useLocation } from "react-router-dom";
import { SearchIcon } from '@chakra-ui/icons'
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  Image,
  Link,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  InputLeftElement,
  MenuList,
  InputGroup,
  Input,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  AiOutlineHome,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { BsWallet, BsFillChatTextFill, BsFillPlayCircleFill } from "react-icons/bs";

const LinkItems = [
  { name: 'Home', icon: FaHome, url: '/' },
  { name: 'Courses', icon: BsFillPlayCircleFill, url: '/dashboard/Courses' },
  { name: 'Tiers', icon: FaDollarSign, url: '/dashboard/Tiers' },
  { name: 'Chat', icon: BsFillChatTextFill, url: '/dashboard' },
  { name: 'Users', icon: FaUserCheck, url: '/dashboard/User' },
  { name: 'Settings', icon: FiSettings, url: '/dashboard/Setting' },
];

export default function SidebarWithHeader({ children }) {

  const location = useLocation();
  const [curLoc, setCurLoc] = useState('Overview');

  useEffect(() => {
    let tempLoc = String(location.pathname).split('/')[2];
    if (tempLoc !== '' || tempLoc !== undefined || tempLoc !== null) {
      setCurLoc(tempLoc);
    } else {
      setCurLoc('Overview');
    }
  }, [location])

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [same,setSame] = useState("true");
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      <MobileNav onOpen={onOpen} tarLoc={curLoc} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest}) => {


  const location = useLocation();
  console.log(location.pathname,"======>",LinkItems);

  return (
    <Box
      transition="3s ease"
      borderRight="1px"
      backgroundColor={"#0d1140"}
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      // color="red" 
      paddingTop={"22px"}

      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          <Image width={"130px"} src={Logo} alt="img" />
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Box mt={"40px"}  >
        {LinkItems.map((link) => (
          <Link as={ReactLink} backgroundColor={"#fff"} to={link.url}>
            <NavItem url={link?.url} width={"100%"} marginLeft={"0"} borderRadius={"0"} key={link.name} color={"gray.12"} icon={link.icon}>
              {link.name}
            </NavItem>
          </Link>
        ))}
      </Box>
    </Box>
  );
};


const NavItem = ({ icon, url, children, ...rest }) => {

  const location = useLocation();
  console.log(url, '---' ,location.pathname);
  return (
    <Link color={url===location.pathname?"#2c339e":"#fff"} href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        bg={url === location.pathname ? '#fff' : 'transparent'}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};


const MobileNav = ({ onOpen, tarLoc, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      backgroundColor={"#0d1140"}
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'space-between' }}
      {...rest}>
      <Box>
        <Text display={{ base: "none", md: "block" }} fontWeigh={"bold"} fontSize={"27px"} color={"black"}>{tarLoc ?? 'Overview'}</Text>
      </Box>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />


      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        <Image src={Logo} />
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <InputGroup>
          <InputLeftElement pointerEvents='none'
            children={<SearchIcon color='gray.300' />} />
          <Input placeholder="Search something" />
        </InputGroup>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};