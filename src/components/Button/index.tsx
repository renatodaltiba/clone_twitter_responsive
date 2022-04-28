import styled from "styled-components";

interface Props {
  outline?: boolean;
}

export default styled.button<Props>`
  background: ${props => (props.outline ? 'transparent' : 'var(--twitter)')};
  color: ${props => props.outline ? 'var(--twitter)' : 'var(--white)'};

  border: ${props => props.outline ? '1px solid var(--twitter)' : 'none'};

  padding: 16px;
  border-radius: 25px;

  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  outline: 0;

  &:hover {
    background: ${props => props.outline ? 'var(--twitter-dark-hover)' : 'var(--twitter-light-hover)'};
  }
`