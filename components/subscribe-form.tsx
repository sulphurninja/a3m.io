import { Alert, Box, chakra, DarkMode, Flex, Heading, Spinner, Text } from '@chakra-ui/react';
import { useSubscribeForm } from 'lib/use-subscribe-form';

function Feedback({ state, message, count }) {
  if (state === 'error') {
    return (
      <DarkMode>
        <Alert role="status" status="error" rounded="md" variant="left-accent" color="white" mt="5">
          {message}
        </Alert>
      </DarkMode>
    );
  }

  if (state === 'success') {
    return (
      <DarkMode>
        <Alert
          role="status"
          status="success"
          rounded="md"
          variant="left-accent"
          color="white"
          mt="5"
        >
          {message}
        </Alert>
      </DarkMode>
    );
  }

  return (
    <Text mt="5">
      {count === 0
        ? 'Be the first subscriber'
        : `${count} ${count === 1 ? 'subscriber' : 'subscribers'}`}
    </Text>
  );
}

export default function SubscribeForm() {
  const form = useSubscribeForm();
  return (
    <Box maxWidth="42rem" py="vGutter">
      <Heading marginBottom="4" size="2xl" letterSpacing="tight">
        Keep in touch
      </Heading>

      <Text maxW="32rem" fontSize="lg">
        Subscribe to our newsletter for latest updates about projects and technologies
      </Text>

      <form
        onSubmit={async (event) => {
          event.preventDefault();
          await form.submit();
        }}
      >
        <Flex gap="4" marginTop="8" direction={{ base: 'column', md: 'row' }}>
          <chakra.input
            required
            ref={form.inputRef}
            flex="1"
            paddingX="6"
            autoComplete="email"
            paddingY="5"
            name="email"
            aria-label="Enter your email address"
            bg="gray.800"
            rounded="lg"
            placeholder="info@a3m.io"
            _placeholder={{ color: 'whiteAlpha.400' }}
          />
          <chakra.button
            minW="10.8rem"
            type="submit"
            aria-label="Enter your email address"
            fontWeight="bold"
            letterSpacing="wide"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            textTransform="uppercase"
            color="white"
            paddingX="10"
            paddingY="5"
            rounded="lg"
            transition="background 0.2s ease-in-out"
            bg="red.400"
            _hover={{ bg: 'red.700' }}
            _active={{ bg: 'red.800' }}
          >
            {form.state === 'loading' ? <Spinner size="md" /> : 'Subscribe'}
          </chakra.button>
        </Flex>
      </form>
      <Feedback state={form.state} message={form.message} count={form.data?.count ?? 0} />
    </Box>
  );
}
