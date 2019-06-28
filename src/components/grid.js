import styled from 'styled-components';

const calcFlex = (size) => {
  switch (size) {
    case 1:
      return '0 0 8.333333%';
    case 2:
      return '0 0 16.666667%';
    case 3:
      return '0 0 25%';
    case 4:
      return '0 0 33.333333%';
    case 5:
      return '0 0 41.666667%';
    case 6:
      return '0 0 50%';
    case 7:
      return '0 0 58.333333%';
    case 8:
      return '0 0 66.666667%';
    case 9:
      return '0 0 75%';
    case 10:
      return '0 0 83.333333%';
    case 11:
      return '0 0 91.666667%';
    default:
    case 12:
      return '0 0 100%';
  }
};

const Column = styled.div`
  box-sizing: border-box;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 100%;
  overflow: hidden;
  word-break: break-all;
  @media (min-width: 480px) {
    flex: ${(props) => calcFlex(props.sm)};
  };
  @media (min-width: 768px) {
    flex: ${(props) => calcFlex(props.md)};
  };
  @media (min-width: 992px) {
    flex: ${(props) => calcFlex(props.lg)};
  };
  @media (min-width: 1200px) {
    flex: ${(props) => calcFlex(props.xl)};
  };
`;

const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
`;


export { Column, Row };
