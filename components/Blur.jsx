import { useBreakpointValue, Icon } from '@chakra-ui/react';

export const Blur = (props) => (
    <Icon
        width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
        zIndex={useBreakpointValue({ base: -1, md: -1, lg: -1 })}
        height="560px"
        viewBox="0 0 528 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <circle cx="71" cy="61" r="111" fill="#60A5FA" />
        <circle cx="244" cy="106" r="139" fill="#3B82F6" />
        <circle cy="291" r="139" fill="#2563EB" />
        <circle cx="80.5" cy="189.5" r="101.5" fill="#22D3EE" />
        <circle cx="196.5" cy="317.5" r="101.5" fill="#06B6D4" />
        <circle cx="70.5" cy="458.5" r="101.5" fill="#0891B2" />
        <circle cx="426.5" cy="-0.5" r="101.5" fill="#93C5FD" />
    </Icon>
);
