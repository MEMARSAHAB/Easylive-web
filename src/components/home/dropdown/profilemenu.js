import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import logo from "../../../assets/images/tolet8.png";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles({
  profilebutton: {
    borderRadius: 40,
    color: "black",
    marginTop: 5,
    marginLeft: 15,
    background: "linear-gradient(45deg, #fffffffb 100%, #fffffffb 100%)",
    height: 48,
    width: 100,
    "& .MuiButton-iconSizeMedium > *:first-child": {
      fontSize: "30px",
    },
  },
  menuitem: {
    fontSize: "20px",
  },
  ddpopper: {
    maxWidth: "200px",
    right: "50px",
    borderRadius: 40,
  },
  starticon: {
    fontSize: "40px",
  },
});

export default function ProfileDropdown() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <Button
          className={classes.profilebutton}
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          variant="contained"
          startIcon={<AccountCircleIcon />}
          endIcon={<MenuIcon />}
        ></Button>

        <Popper
          className={classes.ddpopper}
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "start bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem
                      className={classes.menuitem}
                      onClick={handleClose}
                    >
                      Profile
                    </MenuItem>
                    <MenuItem
                      className={classes.menuitem}
                      onClick={handleClose}
                    >
                      My account
                    </MenuItem>
                    <MenuItem
                      className={classes.menuitem}
                      onClick={handleClose}
                    >
                      Logout
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
