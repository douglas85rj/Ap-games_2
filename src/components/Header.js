import styled from "styled-components"

export default function Header (){

  return(
      <StyledHeader>
      <HeaderDiv>
          <HeaderImg 
          src="https://www.imagemhost.com.br/images/2023/03/04/19936447.jpg" 
          alt="Foto de perfil do Douglas" />
      </HeaderDiv>
    </StyledHeader>

  )
}

const StyledHeader = styled.header`
padding-top: 32px;
    height: calc(120px + 32px);
`;

const HeaderDiv = styled.div`
width: 120px;
margin: auto;
background-image: linear-gradient(90deg, #9572FC 0%, #43E7AD 50.52%, #E2D45C 100%);
border-radius: 50%;
display: flex;
padding: 4px;
transition: transform .3s;
&:hover {
  transform: scale(1.1);
}
`;
const HeaderImg = styled.img`
  width: 100%;
    border-radius: 50%;

`;
