import React, { useState, Fragment, } from "react";
import clsx from "clsx";
import {
    BrowserRouter as Router,
    Route,
    Link,
    useLocation
} from "react-router-dom";
import { createBrowserHistory } from "history";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import CloseIcon from '@material-ui/icons/Close';
import SOMA from '../Assets/imgs/soma_logo.png';
import SOMA2 from '../Assets/imgs/soma2.png';
import SOMAL from '../Assets/imgs/LogoNav.png';
// import form from '../../assets/molecula/form.png';

// import FacebookIcon from '@material-ui/icons/Facebook';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

// import Home from "../../Layouts/Home";
// import Plants from "../../Layouts/Plants";
// import Asociation from "../../Layouts/Asociation";
// import Mesa from "../../Layouts/Mesa";
// import Mision from "../../Layouts/Mision";
// import VentasPublico from "../../Layouts/VentasPublico";
// import Produccion from "../../Layouts/Produccion";
// import Exportacion from "../../Layouts/Exportacion";
// import Hibridos from "../../Layouts/Hibridos";
// import Usados from "../../Layouts/Usados";
// import Nacionales from "../../Layouts/Nacionales";
// import Internacionales from "../../Layouts/Internacionales";
// import BoletinPrensa from "../../Layouts/BoletinPrensa";
// import BoletinHibridos from "../../Layouts/BoletinHibridos";
// import ArchivoCuadros from "../../Layouts/ArchivoCuadros";

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { TextareaAutosize, TextField, Typography } from '@material-ui/core';

const drawerWidth = '100%';
const drawerWidthresponsive = '30%';

const history = createBrowserHistory();


console.log(history.location.pathname)

const styles = theme => ({
    root: {
        flexGrow: 1,
        position: 'absolute'
    },
    flex: {
        flex: 1
    },
    drawerPaper: {
        // position: "relative",
        width: drawerWidth,
        background: '#FFF',
        [theme.breakpoints.up('sm')]: {
            width: drawerWidthresponsive,
            flexShrink: 0,
        },
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    toolbarMargin: theme.mixins.toolbar,
    aboveDrawer: {
        zIndex: theme.zIndex.drawer + 1,
        background: 'transparent',
        boxShadow: 'none',
        paddingTop: 20
    },
    mainSection: {
        background: '#FFF',
        '& > div span': {
            color: theme.palette.text.gray,
            fontSize: '1.2em',
            fontWeight: 'bold'
        },
        borderBottom: `solid 1px #E0E0E0`,
        padding: '1em 1.5em'
    },
    secondarySection: {
        paddingLeft: '2em',
        '& > div span': {
            color: '#FFF',
            fontWeight: 'bold'
        }
    },
    thirdSection: {
        paddingLeft: '3em',
        '& > div span': {
            color: '#FFF',
            fontWeight: 'bold'
        }
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'space-between',
        background: '#FFF'
    },
    ul: {
        padding: 0
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
    },
    social: {
        borderTop: `solid 1px ${theme.palette.primary.main}`,
        position: 'absolute',
        bottom: 0,
        padding: '1em 0'
    },
    icons: {
        margin: '0 10px',
        fill: theme.palette.text.gray
    },
    gray: {
        color: theme.palette.text.gray
    }
})




const MyToolbar = withStyles(styles)(({ classes, title, onMenuClick, location }) => (
    <Fragment >
        <AppBar className={classes.aboveDrawer}>
            <Container maxWidth="lg">
                <Toolbar>
                    <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                        {
                            location === ('/') || location === '/iot' ?
                                <img src={SOMA2} alt="soma logo" style={{ height: 60 }} />
                                : <img src={SOMA} alt="soma logo" style={{ height: 60 }} />
                        }
                    </Link>
                    <Grid container justify="flex-end" >
                        <Grid item style={{ background: 'transparent', borderRadius: 10 }}>

                            <IconButton
                                style={{ margin: 0, background: 'white', border: 'solid 1px gray' }}
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="Menu"
                                onClick={onMenuClick}
                                fontSize="large"
                            >
                                <MenuOpenIcon style={{ fill: '#000' }} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>

        </AppBar>
        <div className={classes.toolbarMargin} />
    </Fragment>
));

const MyDrawer = withStyles(styles)(
    ({ classes, variant, open, onClose, onItemClick, handleOpen }) => (
        <Fragment >
            <Drawer
                variant={variant}
                open={open}
                onClose={onClose}
                anchor="right"
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <div
                    className={clsx({
                        [classes.toolbarMargin]: variant === "persistent"
                    })}
                />

                <Grid container className={classes.drawerHeader} style={{ padding: '2em 1em' }}>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                    <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                        <img src={SOMAL} onClick={onClose} style={{ height: 'auto' }} alt="amia logo" />
                    </Link>

                </Grid>
                <List className={classes.ul}>
                    <ListItem
                        className={classes.mainSection}
                        component={Link}
                        to="/"
                        onClick={onItemClick("Inicio")}

                    >
                        <ListItemText>
                            Inicio
                        </ListItemText>
                    </ListItem>
                    <ListItem
                        className={classes.mainSection}
                        component={Link}
                        to="/sistemas"
                        onClick={onItemClick("Inicio")}

                    >
                        <ListItemText>
                            Ingeniería en Sistemas
                        </ListItemText>
                    </ListItem>
                    <ListItem
                        className={classes.mainSection}
                        component={Link}
                        to="/desarrollo"
                        onClick={onItemClick("Inicio")}

                    >
                        <ListItemText>
                            Desarrollo de Software y Aplicaciones
                        </ListItemText>
                    </ListItem>
                    <ListItem
                        className={classes.mainSection}
                        component={Link}
                        to="/marketing"
                        onClick={onItemClick("Inicio")}

                    >
                        <ListItemText>
                            Marketing Digital
                        </ListItemText>
                    </ListItem>
                    <ListItem
                        className={classes.mainSection}
                        component={Link}
                        to="/iot"
                        onClick={onItemClick("Inicio")}

                    >
                        <ListItemText>
                            IoT
                        </ListItemText>
                    </ListItem>

                </List>
                <Grid container justify='center' alignItems='center' className={classes.social}>
                    <Grid item xs={12} >
                        <Typography variant="body2" align="center" paragraph className={classes.gray}>Unete a la conversación</Typography>
                    </Grid>
                    <Grid container justify='center' item xs={12} >
                        <span> <FacebookIcon className={classes.icons} /> </span>
                        <span> <TwitterIcon className={classes.icons} /> </span>
                        <span> <InstagramIcon className={classes.icons} /> </span>
                        <span> <PinterestIcon className={classes.icons} /> </span>
                        <span> <LinkedInIcon className={classes.icons} /> </span>
                    </Grid>
                </Grid>
            </Drawer>

        </Fragment>
    )
);

function AppBarInteraction({ classes, variant }) {
    const [drawer, setDrawer] = useState(false);
    const [title, setTitle] = useState("Home");

    const toggleDrawer = () => {
        setDrawer(!drawer);
    };

    const onItemClick = title => () => {
        setTitle(title);
        setDrawer(variant === "temporary" ? false : drawer);
        setDrawer(!drawer);
        window.scrollTo(0, 0);
        createBrowserHistory()
    };

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let { pathname } = useLocation();
    console.log(pathname)
    return (
        <div className={classes.root}>
            <MyToolbar title={title} onMenuClick={toggleDrawer} location={pathname} />
            <MyDrawer
                open={drawer}
                onClose={toggleDrawer}
                onItemClick={onItemClick}
                variant={variant}
                handleOpen={handleOpen}

            />


        </div>
    );
}

export default withStyles(styles)(AppBarInteraction);
