import { Box, Button, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { BsSearch } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from "../../../features/hooks";
import { filterQueryType } from "./Filter";
import { useEffect, useState, useRef } from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { projectType } from "../../../features/types/types";
import { getLocalProducts } from "../../../features/projects/projectsSlice";

export const Search = ({ setFilterQuery, filterQuery }: { filterQuery: filterQueryType, setFilterQuery: Function }) => {
  const dispatch = useAppDispatch();
  const ref = useRef<any>();
  const projects = useAppSelector(store => store.projectsSlice);
  const [myProject, setMyProject] = useState<projectType[]>([]);

  useEffect(() => {
    setMyProject(projects.products || []);
    console.log(myProject);
  }, [projects.products]);

  const handleSearch = (val: string) => {
    const filteredProjects = projects.products.filter((project: projectType) =>
      project.name.toLowerCase().includes(val.toLowerCase())
    );
    setMyProject(filteredProjects);
  };

  return (
    <Box w="100%">
      <Menu>
        <MenuButton w="100%">
          <InputGroup>
            <InputLeftAddon children={<BsSearch />} />
            <Input ref={ref} type="search" name="searchProject" placeholder="Project Name" />
          </InputGroup>
        </MenuButton>
        <MenuList maxH={"200px"} overflow={"scroll"}>
          <Input
            onChange={(e) => handleSearch(e.target.value)}
            type="text"
            name="searchProject"
            placeholder="Search project"
            mx={"3%"}
            h="50px"
            w="94%"
            mb="15px"
          />
          <MenuItem
            color={"#0f532"}
            fontSize={"1.2em"}
            fontWeight={"700"}
            borderBottom={"1px solid #999"}
            onClick={() => {
              dispatch(getLocalProducts());
              ref.current.value = "";
              setMyProject(projects.products || []);
            }}
          >
            Clear Search
          </MenuItem>
          {
            myProject.map((project: projectType) => (
              <MenuItem
                key={project._id}
                w={["320px", "500px", "400px", "500px"]}
                onClick={() => {
                  setFilterQuery({ ...filterQuery, name: project.name });
                  ref.current.value = project.name;
                }}
              >
                {project.name}
              </MenuItem>
            ))
          }
        </MenuList>
      </Menu>
    </Box>
  );
};
