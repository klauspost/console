import React from "react";
import Grid from "@material-ui/core/Grid";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { AppState } from "../../../../store";
import { connect } from "react-redux";
import OperatorLogo from "../../../../icons/OperatorLogo";
import ConsoleLogo from "../../../../icons/ConsoleLogo";
import { Box } from "@material-ui/core";

const styles = (theme: Theme) =>
  createStyles({
    headerContainer: {
      // position: "absolute",
      width: "100%",
      minHeight: 77,
      display: "flex",
      backgroundColor: "#fff",
      borderBottom: "2px solid",
      borderBottomColor: "#e8e8e8",
      left: 0,
    },
    label: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    labelStyle: {
      color: "#000",
      fontSize: 18,
      fontWeight: 700,
      marginLeft: 34,
      marginTop: 8,
    },
    rightMenu: {
      textAlign: "right",
    },
    logo: {
      marginLeft: 34,
      fill: theme.palette.primary.main,
      width: 120,
    },
  });

interface IPageHeader {
  classes: any;
  sidebarOpen?: boolean;
  operatorMode?: boolean;
  label: any;
  actions?: any;
}

const PageHeader = ({
  classes,
  label,
  actions,
  sidebarOpen,
  operatorMode,
}: IPageHeader) => {
  return (
    <Grid
      container
      className={classes.headerContainer}
      direction="row"
      alignItems="center"
    >
      <Box display={{ xs: "block", sm: "block", md: "none" }}>
        <Grid item xs={12} style={{ height: 10 }}>
          &nbsp;
        </Grid>
      </Box>
      <Grid item xs={12} sm={12} md={6} className={classes.label}>
        {!sidebarOpen && (
          <div className={classes.logo}>
            {operatorMode ? <OperatorLogo /> : <ConsoleLogo />}
          </div>
        )}
        <Typography variant="h4" className={classes.labelStyle}>
          {label}
        </Typography>
      </Grid>
      {actions && (
        <Grid item xs={12} sm={12} md={6} className={classes.rightMenu}>
          {actions}
        </Grid>
      )}
    </Grid>
  );
};

const mapState = (state: AppState) => ({
  sidebarOpen: state.system.sidebarOpen,
  operatorMode: state.system.operatorMode,
});

const connector = connect(mapState, null);

export default connector(withStyles(styles)(PageHeader));
