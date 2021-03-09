import React from 'react';
import { Button, Container, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';

import TableCustomers from './TableCustomers';

const CustomerPage = () => {
    const classes = useStyles();

    return (
        <main>
            <Container maxWidth="lg">
                <div className={classes.mainNav}>
                    <Typography variant="h3" color="textPrimary" align="center">
                        <Button className={classes.btnArrow}>
                            <ArrowBackIcon fontSize="large" className={classes.arrowBack} />
                        </Button>
                        Карточка клиента
                    </Typography>
                </div>
                <div className={classes.mainCanculation}>
                    <Button variant="contained" color="primary">
                        Создать расчет
                    </Button>
                </div>
                <div className={classes.mainTable}>
                    <TableCustomers />
                </div>
            </Container>
        </main>
    );
};

export default CustomerPage;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    mainCanculation: {
        marginTop: theme.spacing(5),
    },
    mainTable: {
        marginTop: theme.spacing(5),
    },
    mainNav: {
        position: 'relative',
    },
    btnArrow: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
}));
