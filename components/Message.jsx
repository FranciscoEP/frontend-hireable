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
                        bg="steel.600"
                        rounded="50px"
                        w="55px"
                        h="55px"
                        textAlign="center"
                    >
                        <CloseIcon boxSize="20px" color="white" />
                    </Flex>
                </Box>
            ) : (
                <CheckCircleIcon boxSize="50px" color="cyan.500" />
            )}
            <Heading as="h2" size="xl" mt={6} mb={2} color="slate.800">
                {heading}
            </Heading>
            <Text color="slate.600">{paragraph}</Text>
            <Button
                isLoading={isLoading}
                onClick={() => {
                    setIsLoading(true);
                    router.push('/');
                }}
                fontFamily="heading"
                mt={8}
                w="8rem"
                bgGradient="linear(to-r, coolBlue.500, cyan.500)"
                color="white"
                _hover={{
                    bgGradient: 'linear(to-r, coolBlue.600, cyan.600)',
                    boxShadow: 'xl',
                    transform: 'translateY(-2px)',
                }}
                _active={{
                    transform: 'translateY(0)',
                }}
                transition="all 0.2s"
            >
                Back
            </Button>
        </Box>
    );
};

export default Message;
