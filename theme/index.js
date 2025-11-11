import { extendTheme } from '@chakra-ui/react';

// Paleta de colores fríos (azules, grises, cyan)
const coolTheme = extendTheme({
    colors: {
        brand: {
            50: '#E6F7FF',
            100: '#BAE7FF',
            200: '#91D5FF',
            300: '#69C0FF',
            400: '#40A9FF',
            500: '#1890FF',
            600: '#096DD9',
            700: '#0050B3',
            800: '#003A8C',
            900: '#002766',
        },
        coolBlue: {
            50: '#EFF6FF',
            100: '#DBEAFE',
            200: '#BFDBFE',
            300: '#93C5FD',
            400: '#60A5FA',
            500: '#3B82F6',
            600: '#2563EB',
            700: '#1D4ED8',
            800: '#1E40AF',
            900: '#1E3A8A',
        },
        slate: {
            50: '#F8FAFC',
            100: '#F1F5F9',
            200: '#E2E8F0',
            300: '#CBD5E1',
            400: '#94A3B8',
            500: '#64748B',
            600: '#475569',
            700: '#334155',
            800: '#1E293B',
            900: '#0F172A',
        },
        cyan: {
            50: '#ECFEFF',
            100: '#CFFAFE',
            200: '#A5F3FC',
            300: '#67E8F9',
            400: '#22D3EE',
            500: '#06B6D4',
            600: '#0891B2',
            700: '#0E7490',
            800: '#155E75',
            900: '#164E63',
        },
        steel: {
            50: '#F0F4F8',
            100: '#D9E2EC',
            200: '#BCCCDC',
            300: '#9FB3C8',
            400: '#829AB1',
            500: '#627D98',
            600: '#486581',
            700: '#334E68',
            800: '#243B53',
            900: '#102A43',
        },
    },
    styles: {
        global: {
            body: {
                bg: 'slate.50',
                color: 'slate.800',
            },
        },
    },
});

export default coolTheme;
