import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider, ThemeContext } from "@emotion/react";
import { AppBar, Box, CssBaseline, IconButton, PaletteMode, ThemeProvider, Toolbar, Typography, createTheme, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { Courses } from "./Courses/Courses";
import { useTranslation } from "react-i18next";
import { Direction, Locale } from "./Lib/Localization";
import { ConfigurationContext, ConfigurationData } from "./ConfigurationContext";
import { getLocale, getReactLocale } from "./Lib/helpers";
import { Localization, enUS, faIR } from "@mui/material/locale";
import { Calendar, TimeZone } from "./Lib/DateTime";
import { DarkModeOutlined, LanguageOutlined, LightModeOutlined } from '@mui/icons-material';

// Create rtl cache
const rtlCache = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const ltrCache = createCache({
    key: 'mui',
});

document.dir = 'rtl'

export function App() {
    const { t, i18n } = useTranslation();

    const initialThemeMode: PaletteMode = useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light'
    const getInitialLocale: Locale = ({ calendar: 'Persian', zone: 'Asia/Tehran', code: getLocale(faIR), direction: document.dir as Direction })
    const defaultConfiguration: ConfigurationData = {
        locale: getInitialLocale,
        themeMode: initialThemeMode,
        theme: createTheme(
            {
                palette: {
                    mode: initialThemeMode,
                },
                direction: getInitialLocale.direction
            },
            getReactLocale(i18n)
        )
    }

    const [configuration, setConfiguration] = useState<ConfigurationData>(defaultConfiguration)

    const updateTheme = (mode: PaletteMode, direction: 'rtl' | 'ltr', locale: Localization) => {
        setConfiguration({
            ...configuration,
            themeMode: mode,
            theme: createTheme(
                {
                    palette: {
                        mode: mode,
                    },
                    direction: direction
                },
                locale
            )
        })
        document.dir = direction
    }
    const updateLocale = (calendar: Calendar, direction: 'rtl' | 'ltr', reactLocale: Localization) => {
        const conf = {
            ...configuration,
            locale: {
                ...configuration.locale,
                direction,
                code: getLocale(reactLocale),
                calendar,
            },
            themeMode: configuration.theme.palette.mode,
            theme: createTheme(
                {
                    palette: {
                        mode: configuration.theme.palette.mode,
                    },
                    direction: direction
                },
                reactLocale
            )
        }
        setConfiguration(conf)
        i18n.changeLanguage(getLocale(reactLocale))
        document.dir = direction
    }
    const updateTimeZone = (zone: TimeZone) => {
        setConfiguration(
            {
                ...configuration,
                locale: {
                    ...configuration.locale,
                    zone: zone
                }
            });
    }

    const matches = useMediaQuery(configuration.theme.breakpoints.down('sm'));

    return (
        <>
            <ConfigurationContext.Provider value={{ get: configuration, set: { updateTheme, updateLocale, updateTimeZone } }}>
                <CacheProvider value={configuration.locale.direction === 'rtl' ? rtlCache : ltrCache}>
                    <ThemeProvider theme={configuration.theme}>
                        <CssBaseline enableColorScheme />

                        <AppBar position='relative'>
                            <Toolbar variant="dense">
                                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                                    {/* Title */}
                                    {t('Curriculum')}
                                </Typography>

                                <IconButton size='medium' color='inherit' onClick={() => updateLocale(configuration.locale.calendar, configuration.locale.direction === 'ltr' ? 'rtl' : 'ltr', getReactLocale(configuration.locale.code) === enUS ? faIR : enUS)}>
                                    <LanguageOutlined />
                                </IconButton>

                                <IconButton size='medium' color='inherit' onClick={() => updateTheme(configuration.theme.palette.mode == 'dark' ? 'light' : 'dark', configuration.locale.direction, getReactLocale(configuration.locale.code))}>
                                    {configuration.theme.palette.mode == 'light' ? <LightModeOutlined fontSize='inherit' /> : <DarkModeOutlined fontSize='inherit' />}
                                </IconButton>
                            </Toolbar>
                        </AppBar>

                        {
                            matches
                                ?
                                <Box width={'700px'}>
                                    <Courses />
                                </Box>
                                :
                                <Box>
                                    <Courses />
                                </Box>
                        }
                    </ThemeProvider>
                </CacheProvider>
            </ConfigurationContext.Provider>
        </>
    )
}
