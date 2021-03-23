import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userSelector from 'redux/selectors/userSelector';
import sendRequest from 'api';
import { setUserInfo } from 'redux/actions/userInfoAction';
import { snakeStringObjectToCamelStringObject } from 'help/camelSnakeConverter';
import { Avatar, Box, Typography } from '@material-ui/core';
import mediaBaseUrl from 'api/mediaBaseUrl';
import { isAuthenticatedSelector } from 'redux/selectors/appStateSelector';

const User = () => {
  const { username, firstName, lastName, secondName, photo } = useSelector(userSelector);
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated && !username) {
      sendRequest('/myprofile/', 'GET').then((userData) => {
        if (userData) dispatch(setUserInfo(snakeStringObjectToCamelStringObject(userData)));
      });
    }
  }, [dispatch, isAuthenticated, username]);

  return (
    <Box ml={2} pl={2} display="flex" alignItems="center" borderLeft={1}>
      <Avatar src={`${mediaBaseUrl}${photo}`} />

      <Box ml={1}>
        <Typography component="div">
          <Box lineHeight={1.2}>{lastName}</Box>
          <Box lineHeight={1.2}>{`${firstName} ${secondName}`}</Box>
          <Box lineHeight={1.2} color="#b2b2b2">
            {username}
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default User;
