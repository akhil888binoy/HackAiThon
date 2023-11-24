import React from 'react';
import { Box } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Text, CardFooter } from '@chakra-ui/react';
import { VStack, HStack, Stack } from '@chakra-ui/react';
import { Card, CardBody, Image, Button } from '@chakra-ui/react';
import img2 from "../../../assets/2.png";
import { Link } from 'react-router-dom';

// Import the dummy data from project.json
import dummyProjects from '../../../dupliserver/project.json';

const hackathonOptions = {
  position: "absolute",
  left: "50%",
  transform: "translate(-50%, -50%)",
  top: "55rem",
  p: "4",
  size: "4x1",
};

const ProjectGalleryPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      {...hackathonOptions}
      bgColor={"whiteAlpha.200"}
      h={"100rem"}
      w={"70rem"}
      backdropFilter='auto'
      backdropBlur='8px'
    >
      <Heading marginLeft={"40%"}> Project Gallery</Heading>
      <VStack gap={"3rem"} mt={"2rem"}>
        {chunkArray(dummyProjects, 3).map((row, rowIndex) => (
          <HStack key={rowIndex} gap={"3rem"}>
            {row.map((project, index) => (
              <Card key={index} size={"md"} bgColor={"whiteAlpha.200"}>
                <CardBody>
                  <VStack>
                    <Image src={project.imageUrl} h={"10rem"} w={"15rem"} />
                    <Heading size={"md"}>{project.projectName}</Heading>
                    <Text>{project.teamName}</Text>
                    <Button colorScheme='teal'><Link to="/projectdetail">View Project</Link></Button>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

// Function to chunk an array into subarrays of a specified size
function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default ProjectGalleryPage;
