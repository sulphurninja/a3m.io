import {
  Box,
  Circle,
  Flex,
  Heading,
  HeadingProps,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import ChakraLogo from 'components/chakra-logo';
import Container from 'components/container';
import Emoji from 'components/emoji';
import GithubStarIcon from 'components/github-star';
import LinkItem from 'components/link-item';
import ProjectCard from 'components/project-card';
import { EmailIcon, FileIcon, LinkedInIcon, TwitterIcon } from 'components/social-icons';
import SubscribeForm from 'components/subscribe-form';
import TalkCard from 'components/talk-card';
import TestimonialCard from 'components/testimonial.card';
import ViewMore from 'components/view-more';
import chunk from 'lib/chunk';
import {
  allFeaturedProjects,
  allFeaturedTalks,
  allFeaturedTestimonials,
} from 'lib/contentlayer-utils';
import sortByPublishedDate from 'lib/sort';
import tools from 'lib/tools';
import Image from 'next/image';
import Link from 'next/link';
import siteConfig from 'site.config';

function AchievementItem({ icon, children }) {
  return (
    <HStack spacing="3">
      <Icon as={icon} fontSize="4xl" />
      <Text fontFamily="heading" fontSize="xl">
        {children}
      </Text>
    </HStack>
  );
}

function MainHeading(props: HeadingProps) {
  return (
    <Heading
      as="h1"
      width="full"
      fontFamily="heading"
      fontSize={{ base: '4rem', md: '7rem' }}
      letterSpacing="tight"
      lineHeight="1"
      userSelect="none"
      color="white"
      marginBottom="4"
      {...props}
    />
  );
}

export default function HomePage() {
  return (
    <Container>
      {/* Segun Adebayo - ui engineer & product designer  */}
      <Flex direction="column" paddingY="18">
        <MainHeading>A3M.IO</MainHeading>
        <Text
          color="red.400"
          display="block"
          fontSize="5xl"
          fontFamily="heading"
          fontWeight="bold"
          lineHeight="1.2"
          textAlign="justify"
        >
          Code that creates an <Text color="white">IMPACT.</Text> designs that leave a <Text color="white">MARK!</Text>
        </Text>

        {/* I'm passionate about... */}
        <Text
          marginTop="18"
          fontFamily="body"
          wordBreak="normal"
          maxWidth="40rem"
          
          fontSize={{ base: 'lg', md: '2xl' }}
        >
          We at A3M, work towards innovating modern solutions,
          using cutting-edge technologies &
          building tailor-made software solutions to upscale your dreams.
        </Text>

        {/* Github star and Chakra brag */}
        <Box marginTop={{ base: '8', md: '14' }} width="full">
          <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: '5', md: '10' }}>
            <AchievementItem icon={GithubStarIcon}>Client Satisfaction</AchievementItem>
            <AchievementItem icon={ChakraLogo}>On-time Delivery</AchievementItem>
          </Flex>
        </Box>
      </Flex>

      {/* I design component systems... */}
      <Flex
        paddingY="vGutter"
        gap={{ base: '5', lg: '20' }}
        justify="space-between"
        direction={{ base: 'column', lg: 'row' }}
      >
        <Box maxWidth={{ lg: '36rem' }}>
          {/* Circular Headshot */}
          <Circle
            display={{ base: 'none', lg: 'flex' }}
            position={'relative'}
            size="6.25rem"
            float="left"
            marginRight="6"
            overflow="hidden"
          >
            <Image
              alt="A3M logo"
              src="/static/images/A3M.png"
              width='100%'
              height='100%'
              objectFit="contain"
            />
          </Circle>

          <Heading
            lineHeight="1"
            fontSize={{ base: '3rem', md: '5rem', lg: '6.25rem' }}
            letterSpacing="tight"
          >
            We build technology {' '}
            <Box as="span" color="red.600">
              of the future
            </Box>
          </Heading>
        </Box>

        <Box maxWidth={{ lg: '27.5rem' }} marginTop="4">
          <Text fontSize={{ base: 'md', md: 'xl' }}>
          Our company consists of skilled professionals offering a wide range of services, from<Text fontWeight="bold"> custom-built mobile/desktop apps, games, e-commerce platforms, to landing pages.</Text> Our expertise spans multiple domains, enabling us to handle every project with skill and dexterity. Contact us to discover how we can provide <Text fontWeight="bold"> unrivaled solutions for your business!</Text>
          </Text>
          {/* Profile links */}
          <SimpleGrid columns={2} marginTop="10" spacing="10" maxWidth="16rem">
          
           
            <LinkItem icon={EmailIcon} href={siteConfig.profiles.email}>
              Email
            </LinkItem>
            
          </SimpleGrid>
        </Box>
      </Flex>
      <Heading
            lineHeight="1"
            fontSize={{ base: '3rem', md: '5rem', lg: '6.25rem' }}
            letterSpacing="tight"
          >What they say... </Heading>
      {/* Testimonials */}
      <Box as="section" aria-labelledby="heading" py="vGutter">
        <VisuallyHidden>Recommendations</VisuallyHidden>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="6">
          {chunk(allFeaturedTestimonials, 2).map((testimonials, index) => (
            <Stack key={index} spacing="6">
              {testimonials.map((data) => (
                <TestimonialCard key={data.name} data={data} />
              ))}
            </Stack>
          ))}
        </SimpleGrid>
      </Box>

      {/* Featured projects */}
      <Box as="section" py="vGutter">
        <Heading size="3xl" letterSpacing="tight">
          Our Featured Work
        </Heading>
        <Box marginTop="vGutter">
          <Stack spacing="20">
            {allFeaturedProjects.map((project) => (
              <ProjectCard key={project.title} data={project} />
            ))}
          </Stack>
        </Box>
      </Box>

      {/* Featured Talks
      <Box as="section" py="vGutter" position="relative">
        <Heading size="3xl" letterSpacing="tight" position="relative">
          Featured Talks
        </Heading>
        <Box marginTop="20" marginBottom="10">
          <Flex direction="column" gap="20">
            {allFeaturedTalks.sort(sortByPublishedDate).map((talk) => (
              <TalkCard key={talk.title} data={talk} />
            ))}
          </Flex>
        </Box>

        <Link href="/talks" passHref>
          <ViewMore>View all Talks</ViewMore>
        </Link>
      </Box> */}

      {/* Tools & Softwares */}
      <Box as="section" py="vGutter">
        <Box marginBottom="16">
          <Heading size="3xl" letterSpacing="tight">
            Frameworks &amp; Tools
          </Heading>
          <Text marginTop="5" fontSize="lg" maxWidth={{ md: '45rem' }}>
           Following are some of the cutting edge, modern technologies and frameworks, we use at A3M:
          </Text>
        </Box>

        {/* ToolList */}
        <Wrap spacing="10">
          {tools.map((tool) => (
            <WrapItem fontFamily="heading" fontSize="3xl" color="red.400" key={tool}>
              <img src={tool +'.svg'} alt={tool} />
            </WrapItem>
          ))}
        </Wrap>
      </Box>

      {/* Subscribe callout */}
      <Box as="hr" borderColor="whiteAlpha.300" />
      <SubscribeForm />
      <Box as="hr" borderColor="whiteAlpha.300" />
    </Container>
  );
}
