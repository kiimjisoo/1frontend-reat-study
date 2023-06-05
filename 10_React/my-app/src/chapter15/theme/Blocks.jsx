import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem;
  /* background-color: lightgray; */
  /* 테마 사용해보기 */
  background-color: ${props => props.theme.grayBg};
`;

const Block = styled.div`
  padding: ${props => props.padding};
  border: 1px solid black;
  border-radius: 1rem;
  background-color: ${props => props.backgroundColor};
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const Box = styled.button`
  width: ${props => props.width || '150px'};
  height: ${props => props.height || '50px'};
  background-color: ${props => props.theme.cyan};
  border: 1px solid ${props => props.theme.gray600};
  border-radius: 10px;
  &:hover {
    background-color: ${props => props.theme.orange};
  }

  ${props =>
    props.invert && 
    css`
      background: ${props => props.theme.indigo};
      color: #1a1a1a;
      &:hover {
        background: #1a1a;
        color: white;
      }
    `
  }
`;

const Button = styled.button`
  width: 100px;
  height: 100px;
  background-color: ${props => props.Dark ? 'blue' : 'gray'};
`;

const blockItems = [
  {
    label: '1',
    padding: '1rem',
    backgroundColor: 'red',
  },
  {
    label: '2',
    padding: '3rem',
    backgroundColor: 'green',
  },
  {
    label: '3',
    padding: '2rem',
    backgroundColor: 'blue',
  },
];


function Blocks(props) {
  return (
    <Wrapper>
      <Box width="200px">박스</Box>

      <Box invert>바박스</Box>

      <Button Dark={false}>박스2</Button>

      {blockItems.map((blockItem) => {
        return (
          <Block
            key={blockItem.label}
            padding={blockItem.padding}
            backgroundColor={blockItem.backgroundColor}
          >
            {blockItem.label}
          </Block>
        );
      })}
    </Wrapper>
  )
};

export default Blocks;