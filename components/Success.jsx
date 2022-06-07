import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Message() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    return (
        <Box textAlign="center" py={10} px={6}>
            <CheckCircleIcon boxSize="50px" color="green.500" />
            <Heading as="h2" size="xl" mt={6} mb={2}>
                Applicant could be hired
            </Heading>
            <Text color="gray.500">
                According to our model, the params given could put on track it
                for a further recognition interview.
            </Text>
            <Button
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
                Submit
            </Button>
        </Box>
    );
}
