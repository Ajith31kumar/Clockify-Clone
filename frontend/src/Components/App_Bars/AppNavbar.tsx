import {
    Badge,
    Box,
    Flex,
    IconButton,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Switch,
    Text,
  } from "@chakra-ui/react";
  import { AiOutlineMenu } from "react-icons/ai";
  import { useAppDispatch, useAppSelector } from "../../features/hooks";
  import { useEffect } from "react";
  import { getUser } from "../../features/users/usersSlice";
  import { logout } from "../../features/auth/authSlice";
  import { Show } from "@chakra-ui/react";
  import { useNavigate } from "react-router-dom";
  
  export default function AppNavbar({ Open }: { Open: Function }) {
    const auth = useAppSelector((store) => store.authSlice);
    const user = useAppSelector((store) => store.usersSlice.user);
    const [userid, email, p] = auth.token.trim().split(":");
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
      dispatch(getUser({ token: auth.token, id: userid }));
    }, []);
  
    const SplitName = user?.name.trim().split(" ");
    const handlelogout = () => {
      dispatch(logout());
    };
  
    return (
      <Flex
        maxW={"100%"}
        borderLeft="4px solid #02a9f4"
        borderBottom="2px solid #bdbdbd"
        p="0.3rem 0.8rem"
        align="center"
        justify="space-between"
      >
        <Flex align="center">
          <Box>
            <IconButton
              variant="ghost"
              colorScheme="#333333"
              aria-label="Menu"
              fontSize="1.65rem"
              icon={<AiOutlineMenu />}
              onClick={() => Open()}
            />
          </Box>
          <Box mt="0.4rem" ml="1.4rem">
            <img
              className="w-3/4"
              src="https://app.clockify.me/assets/logo.svg"
              alt="logo"
            />
          </Box>
        </Flex>
        <Flex align="center">
          <Show breakpoint="(min-width: 991px)">
            <Box pl="1rem">
              <Text>{user?.name}</Text>
            </Box>
          </Show>
          <Box px="1.5rem">
            <button className="font-sans bg-white text-[#02a9f4] px-2 border border-[#02a9f4] text-[0.9rem] hover:bg-[#02a9f4] hover:text-white">
              UPGRADE
            </button>
          </Box>
          <Show breakpoint="(min-width: 991px)">
            <Box py="0.6rem" borderLeft="border-dotted border-gray-400" px="1.5rem">
              <img
                src="https://app.clockify.me/assets/nav-icons/help.svg"
                alt="help"
              />
            </Box>
          </Show>
          <Box py="0.6rem" borderLeft="border-dotted border-gray-400" px="1.5rem">
            <img
              src="https://app.clockify.me/assets/nav-icons/notification.svg"
              alt="notification"
            />
          </Box>
          <Box borderLeft="border-dotted border-gray-400" px="1.5rem">
            <Menu isLazy>
              <MenuButton>
                <Box
                  className="bg-[#2a9789] text-center p-[0.3rem_0.5rem] rounded-full text-white"
                  _hover={{ cursor: "pointer" }}
                >
                  <Text fontSize="1.3rem" fontWeight="500">
                    {SplitName?.map((n) => n[0])}
                  </Text>
                </Box>
              </MenuButton>
              <MenuList>
                <MenuItem _focus={{ bg: "none" }}>
                  <Text>{user?.name}</Text>
                </MenuItem>
                <MenuItem _focus={{ bg: "none" }}>
                  <Text color="gray" fontSize="1rem">
                    {user?.email}
                  </Text>
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  <Text color="#333333" fontSize="1rem">
                    Profile Settings
                  </Text>
                </MenuItem>
                <MenuItem>
                  <Flex justify="space-between">
                    <Text color="#333333" fontSize="1rem">
                      Dark Theme
                    </Text>
                    <Switch ml="4rem" />
                  </Flex>
                </MenuItem>
                <MenuItem>
                  <Text color="#333333" fontSize="1rem">
                    Download
                  </Text>
                </MenuItem>
                <MenuItem>
                  <Flex justify="space-between">
                    <Text color="#333333" fontSize="1rem">
                      Dark Theme
                    </Text>
                    <Box ml="4rem">
                      <Badge colorScheme="green" variant="solid">
                        NEW
                      </Badge>
                    </Box>
                  </Flex>
                </MenuItem>
                <MenuDivider />
                <MenuItem onClick={handlelogout}>
                  <Text color="#333333" fontSize="1rem">
                    Log out
                  </Text>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Flex>
    );
  }
  