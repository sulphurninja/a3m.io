import { allProjects } from '.contentlayer/data';
import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import Container from 'components/container';
import Emoji from 'components/emoji';
import MDXComponents from 'components/mdx-components';
import ProjectCard from 'components/project-card';
import SEO from 'components/seo';

export default function ProjectPage() {
  return (
    <Container>
      <SEO title="Projects" />
      <Box py="vGutter">
        <Box>
          <Heading as="h1" size="3xl" marginBottom="6" color="white">
            Projects
          </Heading>
          <Stack fontSize="lg" maxW="60ch" spacing="4">
            <Text>
              Our team's ability to communicate effectively offer valuable insights throughout the project building process making the end-user experience just perfect.
            </Text>
            <Text>
              We're super-passionate about building your dreams with <b>next generation tech</b> that help businesses ship products
              faster and bridges the gap between an idea and a business.
            </Text>
            <Text>Below are few projects we've worked on :</Text>
          </Stack>
        </Box>

        <Box marginTop="vGutter">
          <Stack spacing="20">
            {allProjects.map((project) => (
              <ProjectCard key={project.title} data={project} />
            ))}
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
