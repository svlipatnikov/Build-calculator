import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AddCircleOutline, RemoveCircleOutlineRounded } from '@material-ui/icons';
import { Accordion, AccordionDetails, AccordionSummary, Button } from '@material-ui/core';

const CustomAccordion = props => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const toggle = (e, expanded) => setExpanded(expanded);

  return (
    <Accordion onChange={toggle} className={props.className}>
      <AccordionSummary>
        <Button 
          startIcon={expanded
            ? <RemoveCircleOutlineRounded color="primary" className={classes.accordionButton} />
            : <AddCircleOutline color="primary" className={classes.accordionButton} />
          }>
          {props.title}
        </Button>
      </AccordionSummary>
      <AccordionDetails>
        {props.children}
      </AccordionDetails>
    </Accordion>
  );
};

const useStyles = makeStyles(() => ({
  accordionButton: {
    fontSize: '30px !important',
  }
}))

export default CustomAccordion;