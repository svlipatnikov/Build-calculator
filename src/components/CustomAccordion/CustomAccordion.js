import React from 'react';
import { withTheme } from '@material-ui/core/styles';
import { Accordion, AccordionDetails, AccordionSummary, Button } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';
import './CustomAccordion.scss';

const CustomAccordion = props => (
  <Accordion className={`accordion ${props.className}`}>
    <AccordionSummary>
      <Button startIcon={<AddCircleOutline color="primary" />} className="accordion-button">
        {props.title}
      </Button>
    </AccordionSummary>
    <AccordionDetails>
      {props.children}
    </AccordionDetails>
  </Accordion>
);

export default withTheme(CustomAccordion);