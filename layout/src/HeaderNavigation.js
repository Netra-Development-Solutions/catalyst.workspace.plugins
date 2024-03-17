import * as React from 'react';
import AppBar from 'ui_component_hub/AppBar';
import Box from 'ui_component_hub/Box';
import Toolbar from 'ui_component_hub/Toolbar';
import IconButton from 'ui_component_hub/IconButton';
import Typography from 'ui_component_hub/Typography';
import Menu from 'ui_component_hub/Menu';
import Container from 'ui_component_hub/Container';
import Avatar from 'ui_component_hub/Avatar';
import Button from 'ui_component_hub/Button';
import Tooltip from 'ui_component_hub/Tooltip';
import MenuItem from 'ui_component_hub/MenuItem';
import MenuIcon from 'ui_component_hub/icons/Menu';
import LocalFireDepartmentSharpIcon from 'ui_component_hub/icons/LocalFireDepartmentSharp';
import ExpandMoreIcon from 'ui_component_hub/icons/ExpandMore';

function ResponsiveHeaderNavigation({navigationLinks, userProfileLinks, mainLogoLink}) {
    const [visibleOptions, setVisibleOptions] = React.useState(navigationLinks || []);
    const [hiddenOptions, setHiddenOptions] = React.useState([]);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorElMore, setAnchorElMore] = React.useState(null);
    const [processing, setProcessing] = React.useState(true);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleOpenMoreMenu = (event) => {
        setAnchorElMore(event.currentTarget);
    }

    const handleCloseMoreMenu = () => {
        setAnchorElMore(null);
    }

    React.useEffect(() => {
        // This effect is used to recalculate options on initial load
        const handleLoad = () => {
            const toolbarWidth = document.getElementById('toolbar').offsetWidth;
            const navbarTitleWidth = document.getElementById('navbar-title').offsetWidth;
            const navbarProfileWidth = document.getElementById('navbar-profile').offsetWidth;
            const navbarMoreButtonWidth = document.getElementById('navbar-more-button')?.offsetWidth || 0;
            var remainingWidth = toolbarWidth - navbarTitleWidth - navbarMoreButtonWidth - navbarProfileWidth - 32;
            
            const newVisibleOptions = [];
            const newHiddenOptions = [];
            for (var i in navigationLinks) {
                const option = navigationLinks[i];
                const optionWidth = getWidth(option.key);
                if (remainingWidth > optionWidth) {
                    remainingWidth -= optionWidth;
                    newVisibleOptions.push(option);
                } else {
                    remainingWidth = 0;
                    newHiddenOptions.push(option);
                }
            }

            if (newVisibleOptions.length >= visibleOptions.length) {
                setProcessing(false);
                return;
            };
            setVisibleOptions(newVisibleOptions);
            setHiddenOptions(newHiddenOptions);
        };

        handleLoad();

        window.addEventListener('resize', handleLoad);
    }, [visibleOptions]);

    const getWidth = (element) => {
        return document.getElementById(`navbar-${element}`)?.offsetWidth || 0;
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters id="toolbar">
                    <Box sx={{
                        display: { xs: 'none', md: 'flex' },
                        flexGrow: 1,
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}
                    id='navbar-title'>
                        <LocalFireDepartmentSharpIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href={mainLogoLink || "#home"}
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: '"Roboto Slab", serif',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                            >
                            CATALYST
                        </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {(navigationLinks || []).map((page) => (
                                <MenuItem key={page.key} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page.displayText}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <LocalFireDepartmentSharpIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href={mainLogoLink || "#home"}
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: '"Roboto Slab", serif',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        CATALYST
                    </Typography>
                    <Box sx={processing 
                        ? { flexGrow: 1, display: { xs: 'none', md: 'flex' }, mr: 2, ml: 2, opacity: 0}
                        : { flexGrow: 1, display: { xs: 'none', md: 'flex' }, mr: 2, ml: 2 }
                        } id="navbar">
                        {visibleOptions.map((page) => (
                            <Button
                                key={page.key}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                id={`navbar-${page.key}`}
                            >
                                {page.displayText}
                            </Button>
                        ))}
                        {(hiddenOptions.length >= 1 || processing) &&
                            <Button
                                onClick={handleOpenMoreMenu}
                                sx={{ my: 2, color: 'white' }}
                                id={`navbar-more-button`}
                                endIcon={<ExpandMoreIcon />}
                                variant='outlined'
                                color="secondary"
                            >
                                More
                            </Button>
                        }
                    </Box>
                    {hiddenOptions.length >= 1 && 
                        <Menu
                            id="menu-appbar-more"
                            anchorEl={anchorElMore}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElMore)}
                            onClose={handleCloseMoreMenu}
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                            }}
                            >
                            {(hiddenOptions || []).map((page) => (
                                <MenuItem key={page.key} onClick={handleCloseMoreMenu}>
                                    <Typography textAlign="center">{page.displayText}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    }
                    <Box sx={{ flexGrow: 0 }} id="navbar-profile">
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Naman Khater" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1-6V28kFPh67sxCosVVOqkOsqbLklVqJ6dg&s" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {(userProfileLinks || []).map((setting) => (
                                <MenuItem key={setting.key} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting.displayText}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveHeaderNavigation;
