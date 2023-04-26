import { Box, Flex, GridItem, Heading, HStack, SimpleGrid, Text } from '@chakra-ui/react';
import Link from 'next/link';
import siteConfig from 'site.config';
import LinkItem from './link-item';
import { EmailIcon, GithubIcon, LinkedInIcon } from './social-icons';

function FooterLink({ href, children }) {
  return (
    <Link href={href} passHref>
      <Box as="a">{children}</Box>
    </Link>
  );
}

export default function Footer() {
  return (
    <Box as="footer" position="relative" paddingY="20">
      <Box maxWidth="6xl" marginX="auto" paddingX="6">
        <SimpleGrid columns={{ base: 4, md: 12 }} spacing="16">
          <GridItem colSpan={6}>
            <Box>
              <Heading marginBottom="6" size="lg">
                A3M.io
              </Heading>
              <Text fontSize="lg">
                code that creates an impact, designs that leave a mark.
              </Text>
            </Box>

            <HStack marginTop="9" spacing={{ base: '8', md: '10' }}>
              <LinkItem href={siteConfig.profiles.linkedin} icon={LinkedInIcon}>
                Talk to Us!
              </LinkItem>
              
              <LinkItem href={siteConfig.profiles.email} icon={EmailIcon}>
                Email
              </LinkItem>
            </HStack>
          </GridItem>

          <GridItem colSpan={3}>
            <Heading as="h2" marginBottom="6" size="lg">
              Contact
            </Heading>
            <Flex direction="column" gap="4">
              <FooterLink href={siteConfig.profiles.email}>Email : info@a3m.io </FooterLink>
             <h1>Address: <address>A3M NextGen Pvt.Ltd, Bijli Nagar, Pune - 411033</address></h1>
            </Flex>
          </GridItem>

          <GridItem colSpan={3}>
            <Heading as="h2" marginBottom="6" size="lg">
              Policies
            </Heading>
            <Flex direction="column" gap="4">
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/intellectualproperty">Intellectual Property Policy</FooterLink>
  
            </Flex>
          </GridItem>
        </SimpleGrid>

        <Text marginTop="20" textAlign="center">
          All rights reserved &copy; A3M NextGen Pvt.Ltd {new Date().getFullYear()}
        </Text>
      </Box>
    </Box>
  );
}
