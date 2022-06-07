import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Error() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Box textAlign="center" py={10} px={6}>
            <Box display="inline-block">
                <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    bg="red.500"
                    rounded="50px"
                    w="55px"
                    h="55px"
                    textAlign="center"
                >
                    <CloseIcon boxSize="20px" color="white" />
                </Flex>
            </Box>
            <Heading as="h2" size="xl" mt={6} mb={2}>
                The applicant might not be qualified for the internship
            </Heading>
            <Text color="gray.500">
                Verify it's record once again but, it seems the applicant might
                not suite for the internship position we are looking for at this
                moment.
            </Text>
            <Button
                type="button"
                isLoading={isLoading}
                onClick={() => {
                    setIsLoading(true);
                    router.push('/');
                }}
                fontFamily="heading"
                mt={8}
                w="8rem"
                bgGradient="linear(to-r, red.400,pink.400)"
                color="white"
                _hover={{
                    bgGradient: 'linear(to-r, red.400,pink.400)',
                    boxShadow: 'xl',
                }}
            >
                Back
            </Button>
        </Box>
    );
}
