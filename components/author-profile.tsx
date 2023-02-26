import { Box, Circle, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Emoji from './emoji';

export default function AuthorProfile() {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: '4', md: '8' }}>
      <Circle size="80px" overflow="hidden">
        <Image
          alt="Aditya Pingle"
          src="/static/images/aditya.jpg"
          width="80px"
          height="80px"
        />
      </Circle>
      <Box>
        <Heading size="md">Written by Aditya Pingle</Heading>
        <Text mt="4" lineHeight="taller">
          Co-founder, CTO and Senior Full Stack Engineer{' '}
          <Emoji label="Software developer">👨🏽‍💻</Emoji>. Passionate about helping the world through modern technologies, innovating products and building future brands.
        </Text>
      </Box>
    </Flex>
  );
}
