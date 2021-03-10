/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React from 'react';
import { withTheme } from '@material-ui/core/styles';
import { Accordion, AccordionDetails, AccordionSummary, Button } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';
import './CustomAccordion.scss';

const CustomAccordion = ({ className, title, children }) => (
  <Accordion className={`accordion ${className}`}>
    <AccordionSummary>
      <Button startIcon={<AddCircleOutline color="primary" />} className="accordion-button">
        {title}
      </Button>
    </AccordionSummary>
    <AccordionDetails>{children}</AccordionDetails>
  </Accordion>
);

export default withTheme(CustomAccordion);
