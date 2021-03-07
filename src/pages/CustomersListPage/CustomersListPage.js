import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import CustomerCard from './CustomerCard/CustomerCard';

const clients = [
    { id: 1, name: 'Клиентов Клиент Клиентович', info: 'Инфо клиенте' },
    { id: 2, name: 'Клиентов Клиент Клиентович', info: 'Инфо клиенте' },
    { id: 3, name: 'Клиентов Клиент Клиентович', info: 'Инфо клиенте' },
    { id: 4, name: 'Клиентов Клиент Клиентович', info: 'Инфо клиенте' },
    { id: 5, name: 'Клиентов Клиент Клиентович', info: 'Инфо клиенте' },
    { id: 6, name: 'Клиентов Клиент Клиентович', info: 'Инфо клиенте' },
    { id: 7, name: 'Клиентов Клиент Клиентович', info: 'Инфо клиенте' },
];

export default function Clietns() {
    return (
        <Container maxWidth="lg">
            <Typography variant="h4" color="textPrimary" align="center">
                Клиенты
            </Typography>

            <Grid container spacing={3}>
                {clients.map((client) => (
                    <Grid key={client.id} item xs={12} sm={6} md={4} lg={3}>
                        <CustomerCard client={client} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
