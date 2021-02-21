import React from "react";
import {
    Paper,
    Container,
    Button,
    Grid,
    makeStyles,
    Card,
    Theme,
    createStyles,
} from "@material-ui/core";

import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { MyBidInterface } from "./marketwatch.models";


interface MyBidInterfaceProps {
    mybids: MyBidInterface[];
    history: any;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: theme.spacing(1, 1),
            background: "#F4F4F4",
            borderRadius: "0",
            padding: "1em",
        },
        flex: {
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            margin: theme.spacing(1, 0),
        },
        flexbet: {
            display: "flex",
            justifyContent: "space-between",
        },
        flexcol: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
        sflex: {
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
        },
        card: {
            padding: theme.spacing(3, 0, 3, 3),
            margin: theme.spacing(3),
        },
        heading: {
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "25px",
            lineHeight: "24px",
            letterSpacing: "0.15px",
            color: "rgba(0, 0, 0, 0.87)",
        },
        dtime: {
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "20px",
            letterSpacing: "0.15px",
            color: "#000000",
        },
        address: {
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "22px",
            lineHeight: "23px",
            letterSpacing: "0.15px",
            color: "#888888",
        },
        t_ime: {
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "20px",
            lineHeight: "24px",
            letterSpacing: "0.15px",
            color: "#727272",
        },
    })
);
const MarketWatchView: React.FC<MyBidInterfaceProps> = ({ mybids, history, }) => {
    const classes = useStyles();

    return (
        <>
            <Container fixed>
                <Paper
                    style={{ marginTop: "1rem", height: "100vh" }}
                    className="rounded"
                >
                    <Grid container>
                        <Grid item xs={2}>
                            <Button size="large" href="#">
                                <KeyboardBackspaceIcon />
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                                size="large"
                                variant="outlined"
                                href="#"
                                style={{ marginTop: "1rem" }}
                            >
                                SELECT
      </Button>
                            <Button
                                size="large"
                                variant="outlined"
                                href="#"
                                style={{ marginTop: "1rem", marginLeft: "5%" }}
                            >
                                CANCEL
      </Button>
                        </Grid>
                        <Grid container item xs={4}>
                            <Button
                                size="large"
                                variant="outlined"
                                href="#"
                                style={{ marginTop: "1rem" }}
                            >
                                CANCEL ALL
      </Button>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        style={{ margin: "0 auto", marginTop: "1rem", width: "95%" }}
                    >
                        <Grid item xs={12}>
                            <Card
                                className={classes.card}
                                style={{ borderRadius: "1rem", height: "80vh" }}
                            >
                                {mybids.map((value: any, index: number) => {
                                    return (
                                        <Paper
                                            key={index}
                                            className={classes.root}
                                            style={{ marginRight: "2rem" }}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                }}
                                            >
                                                <div>
                                                    <span className={classes.heading}>
                                                        {value.bid_product}
                                                    </span>
                                                    <div style={{ width: "159px", height: "46px" }}>
                                                        <span className={classes.address}>
                                                            Cross, Street Kucha Mahajani
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className={classes.address}>
                                                    <span
                                                        style={{
                                                            marginTop: "15%",
                                                            display: "inline-block",
                                                        }}
                                                    >
                                                        {value.bid_user}
                                                    </span>
                                                </div>
                                                <div>
                                                    <div
                                                        style={{
                                                            width: "196px",
                                                            height: "24px",
                                                            marginTop: "1em",
                                                            display: "block",
                                                        }}
                                                    >
                                                        <span className={classes.t_ime}>
                                                            {value.bid_price}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Paper>
                                    );
                                })}
                            </Card>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>

        </>
    );
};
export default MarketWatchView;