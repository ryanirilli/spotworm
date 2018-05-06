import * as styledComponents from 'styled-components';

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

export interface IThemeInterface {
  primaryColor: string;
  baseUnit: number;
}

export const theme = {
  primaryColor: '#f5614c',
  baseUnit: 4
};

export default styled;
export { css, injectGlobal, keyframes, ThemeProvider };
