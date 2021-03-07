import React from 'react';
import { useHistory } from 'react-router';
import { Typography, CardContent, Card, CardActionArea } from '@material-ui/core';

const CustomerCard = ({ client }) => {
    const history = useHistory();

    if (client === undefined) return null;

    return (
        <Card>
            <CardActionArea onClick={() => history.push(`/customers/${client.id}`)}>
                <CardContent>
                    <Typography variant="h5" component="h2" color="textPrimary" gutterBottom>
                        {client.name}
                    </Typography>

                    <Typography color="textSecondary">{client.info}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CustomerCard;
