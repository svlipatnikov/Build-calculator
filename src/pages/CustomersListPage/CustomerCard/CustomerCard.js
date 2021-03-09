import React from 'react';
import { useHistory } from 'react-router';
import { Typography, CardContent, Card, CardActionArea } from '@material-ui/core';

const CustomerCard = ({ id, name, info }) => {
  const history = useHistory();

  if (!id || !name) return null;

  const handleClick = () => {
    history.push(`/customers/${id}`);
  };

  return (
    <Card>
      <CardActionArea onClick={handleClick}>
        <CardContent>
          <Typography variant="h5" component="h2" color="textPrimary" gutterBottom>
            {name}
          </Typography>

          <Typography color="textSecondary">{info}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CustomerCard;
