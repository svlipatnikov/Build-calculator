/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AddCircleOutline, RemoveCircleOutlineRounded } from '@material-ui/icons';
import { Accordion, AccordionDetails, AccordionSummary, Button } from '@material-ui/core';

const CustomAccordion = ({ title, children, className }) => {
  const classes = useStyles();
  const [isAccordionExpanded, setIsAccordionExpanded] = useState(false);

  const handleAccordionChange = (e, expanded) => setIsAccordionExpanded(expanded);

  return (
    <Accordion onChange={handleAccordionChange} className={className}>
      <AccordionSummary>
        <Button
          startIcon={isAccordionExpanded
            ? <RemoveCircleOutlineRounded color="primary" className={classes.accordionButton} />
            : <AddCircleOutline color="primary" className={classes.accordionButton} />}
        >
          {title}
        </Button>
      </AccordionSummary>
      <AccordionDetails>
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

const useStyles = makeStyles(() => ({
  accordionButton: {
    fontSize: '30px !important',
  },
}));

export default CustomAccordion;
