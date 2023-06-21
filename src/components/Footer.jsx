import { Box } from '@chakra-ui/react';
import React from 'react';
import { Heading } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';
import { VStack } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';
import { Button } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';

const Footer = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box bgColor="blackAlpha.900" minH="40" p="16" color="white" >
      <Stack direction={['column', 'row']} spacing="4" alignItems={isMobile ? "center" : "flex-start"} flexWrap={isMobile ? "wrap" : "nowrap"}>
        <VStack w="full" alignItems={['center', 'center']}>
          <Heading size="md" textTransform="uppercase" textAlign={['center', 'left']}>
            Subscribe to get updates
          </Heading>
          <HStack borderBottom="2px solid white">
            <Input
              placeholder="enter email"
              border="none"
              borderRadius="none"
              outline="none"
              focusBorderColor="none"
            />
            <Button p="0" colorScheme="purple" variant="ghost" borderRadius="0 20px 20px 0">
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack w="full" borderLeft={['none', '1px solid white']} borderRight={['none', '1px solid white']}>
          <Heading size="md" textTransform="uppercase" textAlign="center">
            Video Hub
          </Heading>
          <Text >All Rights Reserved</Text>
        </VStack>
        <VStack w="full">
          <Heading size="md" textTransform="uppercase">
            Social Media
          </Heading>
          <HStack spacing="4">
            <Button variant="link" colorScheme="white">
              <a target="_blank" href="https://youtube.com">
                Youtube
              </a>
            </Button>
            <Button variant="link" colorScheme="white">
              <a target="_blank" href="https://youtube.com">
                Instagram
              </a>
            </Button>
            <Button variant="link" colorScheme="white">
              <a target="_blank" href="https://youtube.com">
                Github
              </a>
            </Button>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;