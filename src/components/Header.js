import React from "react";
import styled from "styled-components";


const Header = styled.div`
  padding-top: 32px;
  height: calc(120px + 32px);
 
`;

const Hdiv = styled.div`
width: 120px;
margin: auto;
background-image: linear-gradient(
  90deg,
  #9572fc 0%,
  #43e7ad 50.52%,
  #e2d45c 100%
);
border-radius: 50%;
display: flex;
padding: 4px;
transition: transform 0.3s;
`;

const Himg = styled.div`
width: 100%;
border-radius: 50%;
background-image: url("https://www.imagemhost.com.br/images/2023/03/04/19936447.jpg");
`;

export default function header() {
  return (
    
        <Header>
            <header>            
      <Hdiv>
        <Himg>
        
        </Himg>
      </Hdiv>
      </header>
      </Header>
    
  );
}
