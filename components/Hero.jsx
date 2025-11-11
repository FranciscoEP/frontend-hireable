import React from 'react';
import { Stack, Heading, Text } from '@chakra-ui/react';

const Hero = () => (
    <Stack spacing={{ base: 10, md: 20, lg: 30, xl: 40 }}>
        <Heading
            lineHeight={1.1}
            fontSize={{
                base: '3xl',
                sm: '4xl',
                md: '5xl',
                lg: '6xl',
            }}
            color="slate.800"
        >
            Candidates hiring app{' '}
            <Text
                as="span"
                bgGradient="linear(to-r, coolBlue.400, cyan.400)"
                bgClip="text"
            >
                by
            </Text>{' '}
            Francisco EP
        </Heading>
    </Stack>
);

export default Hero;
