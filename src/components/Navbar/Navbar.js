import React from 'react'
import { Link } from 'react-router-dom'
import stylesMain from './Navbar.module.css'
import * as ROUTES from '../../routes'
import logo from '../../icon.svg'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import { fade } from '@material-ui/core/styles/colorManipulator'
import { withStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import Search from '../MovieSearch/MovieSearch'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
})
const Navbar = (props) => {
  const { classes,searchHandler } = props
  return (
    <AppBar position="static" className={stylesMain.header}>
      <Toolbar>
       {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
          <MenuIcon/>
        </IconButton>*/}
        <Link to={ROUTES.HOME}>
          <img src={logo} alt="LogoType" className={stylesMain.header__image}/>
        </Link>
        <div className={classes.grow}/>
        <nav className={stylesMain.nav__list}>
          <Button color="inherit">
            <Link to={ROUTES.HOME}>Home Page</Link>
          </Button>
          <Button color="inherit">
            <Link to={ROUTES.COMINGSOON}>Coming soon</Link>
          </Button>
          <Button color="inherit">
            <Link to={ROUTES.NOW_PLAYING_FILMS}>Now in cinema</Link>
          </Button>
          <Button color="inherit">
            <Link to={ROUTES.TOP_RATED}>Top Rated</Link>
          </Button>
        </nav>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon/>
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            onKeyPress={searchHandler}
          />
        </div>
      </Toolbar>
    </AppBar>
  )
}
export default withStyles(styles)(Navbar)
