import { allProjects } from '.contentlayer/data';
import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import Container from 'components/container';
import Emoji from 'components/emoji';
import MDXComponents from 'components/mdx-components';
import ProjectCard from 'components/project-card';
import SEO from 'components/seo';

export default function Privacy() {
    return (
        <Container >
            <SEO title="Projects" />
            <Box marginTop="-30px" py="vGutter ">
                <Box>
                    <Heading as="h1" size="3xl" marginBottom="6" color="white">
                        Privacy Policy
                    </Heading>
                    <Text>
                        At A3M, we value your privacy and understand the importance of protecting your personal information. This privacy policy outlines the types of information we collect, how we use and protect that information, and your rights regarding your personal data.

                        <h1 style={{ fontSize: "30px" }}><strong>Information we collect</strong></h1>

                        We may collect personal information from you when you use our website, services, or interact with our team. This information may include your name, email address, phone number, address, and other contact information. We may also collect information about your device and internet connection, such as IP address, browser type, and operating system.

                        <h1 style={{ fontSize: "30px" }}><strong>How we use your information</strong></h1>

                        We use your personal information to provide our services to you, respond to your inquiries, and communicate with you about our services. We may also use your information for marketing purposes, such as sending you newsletters and promotional emails.

                        We do not sell or share your personal information with third parties, except as necessary to provide our services to you or as required by law. We may use third-party service providers to assist us in providing our services, but we ensure that they comply with the same privacy standards as us.

                        <h1 style={{ fontSize: "30px" }}><strong>Data Security</strong></h1>

                        We take the security of your personal information seriously and take reasonable steps to protect it from unauthorized access, disclosure, or misuse. We use appropriate technical and organizational measures to safeguard your data.

                        <h1 style={{ fontSize: "30px" }}><strong>Your Rights</strong></h1>

                        You have the right to access, update, or delete your personal information at any time. You may also have the right to object to or restrict our use of your information or to request that we transfer your information to another party. To exercise any of these rights, please contact us using the information provided below.

                        <h1 style={{ fontSize: "30px" }}><strong>Changes to this policy</strong></h1>

                        We may update this privacy policy from time to time to reflect changes in our practices or applicable laws. We encourage you to review this policy periodically to stay informed of our privacy practices.
                        <p>
                            <h1 style={{ fontSize: "30px" }}><strong>Contact Us</strong></h1>

                            If you have any questions or concerns about our privacy policy or how we handle your personal information, please contact us at mail@a3m.io .
                        </p>
                    </Text>



                </Box>

               
            </Box>
        </Container>
    );
}
