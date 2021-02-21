import React from "react";
import {
  Button,
  AppBar,
  Box,
  InputBase,
  Toolbar,
  Grid,
} from "@material-ui/core/";
import SearchIcon from "@material-ui/icons/Search";

import { GeolocationDetail } from "../../settings.model";

import {
  createStyles,
  fade,
  Theme,
  makeStyles,
} from "@material-ui/core/styles";
import GoogleMapReact from "google-map-react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  })
);

interface GeolocationViewProps {
  bengaluru: any;
  coordinates: any;
  isEditable: boolean;
  setIsEditable: React.Dispatch<React.SetStateAction<boolean>>;
  handleApiLoaded: (map: any, maps: any) => void;
  updateGeoLocationDetail: (coordinates: GeolocationDetail) => Promise<any>;
}

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;
const GeolocationView: React.FC<GeolocationViewProps> = ({
  bengaluru,
  coordinates,
  isEditable,
  setIsEditable,
  handleApiLoaded,
  updateGeoLocationDetail,
}) => {
  const classes = useStyles();
  return (
    <>
      <Grid container justify="center">
        <Grid item xs={12} md={10}>
          <input id="pac-input" className="controls" type="text" />
          <AppBar position="static">
            <Toolbar>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </Toolbar>
          </AppBar>
          <div style={{ height: "70vh", width: "100%" }}>
            <GoogleMapReact
              defaultCenter={bengaluru}
              zoom={15}
              yesIWantToUseGoogleMapApiInternals
              draggable={isEditable}
              onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="Store Location"
              />
            </GoogleMapReact>
            <Box my={3}>
              <Grid container justify="center">
                <Grid container justify="center" xs={12} item>
                  {isEditable ? (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        const { lat, lng } = coordinates;
                        updateGeoLocationDetail({
                          geo_latitude: lat,
                          geo_longitude: lng,
                        });
                        setIsEditable(false);
                      }}
                    >
                      Save Location
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => setIsEditable(true)}
                    >
                      Edit Current Location
                    </Button>
                  )}
                </Grid>
              </Grid>
            </Box>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
export default GeolocationView;
