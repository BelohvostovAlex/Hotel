import styled from 'styled-components';

export const StyledHero = styled.header`
padding-top: 114px;
min-height: 60vh;
background: url(${props => props.img});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
display: flex;
justify-content: center;
align-items: center; 
margin-bottom: 50px`