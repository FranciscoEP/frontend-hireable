/* eslint-disable react/prop-types */
import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react';
import { CheckCircleIcon, CloseIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Message = ({ isHireable, heading, paragraph }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    return (
        <Box textAlign="center" py={10} px={6}>
            {!isHireable ? (
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
            ) : (
                <CheckCircleIcon boxSize="50px" color="green.500" />
            )}
            <Heading as="h2" size="xl" mt={6} mb={2}>
                {heading}
            </Heading>
            <Text color="gray.500">{paragraph}</Text>
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
};

export default Message;
