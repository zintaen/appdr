import React from 'react';
import { LabelCpn } from './Label.styled';

export const Label = ({ children, ...props }) => <LabelCpn {...props}>{children}</LabelCpn>;
