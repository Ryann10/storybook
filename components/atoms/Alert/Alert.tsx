/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { Tokens, Colors } from '../../tokens';

const getTokensByType = (type: string) => {
  let colorPalette;

  switch (type) {
    case 'warning':
      colorPalette = Colors.orange;
      break;
    case 'error':
      colorPalette = Colors.red;
      break;
    case 'info':
    default:
      colorPalette = Colors.blue;
      break;
  }

  return {
    backgroundColor: colorPalette[10],
    borderColor: colorPalette[30],
    fontColor: colorPalette[100],
  };
};

const AlertContainer = styled.div<AlertProps>(({ type: theme }) => ({
  backgroundColor: `${getTokensByType(theme).backgroundColor}`,
  borderColor: `${getTokensByType(theme).borderColor}`,
  borderRadius: Tokens.borderRadiusNormal,
  borderStyle: Tokens.borderStyle,
  borderWidth: Tokens.borderWidth,
  color: `${getTokensByType(theme).fontColor}`,
  fontSize: Tokens.smallFontSize,
  lineHeight: Tokens.lineHeight,
  padding: Tokens.alertPadding,
}));

interface AlertProps {
  children: React.ReactNode;
  type: 'info' | 'warning' | 'error';
}

const Alert = ({ type, children }: AlertProps) => (
    <AlertContainer type={type}>
      { children }
    </AlertContainer>
);

export default Alert;
