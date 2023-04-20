import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  ul {
    list-style: none;
  }
  
  body {
    background-image: url(./bg.jpg);
    background-position: top center;
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-color: #121214;
  }
  
  body * {
    font-family: 'Inter', sans-serif;
    line-height: 160%;
  }
  
    
  main {
    max-width: 580px;
    width: 90%;
    margin: 32px auto;
  
    display: grid;
    gap: 24px;
  }
  
  section {
    color: white;
    background-image: linear-gradient(90deg, #9572FC 0%, #43E7AD 50.52%, #E2D45C 100%);
    padding-top: 4px;
    border-radius: 10px;
  }
  
  section div {
    background-color: #2A2634;
    padding: 32px;
    padding-top: 24px;
    border-radius: 8px;
  }
  
  section h2 {
    letter-spacing: -0.47px;
  }
  
  section p {
    letter-spacing: -0.18px;
    color: #A1A1AA;
  }
  
  section ul {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  
    margin-top: 24px;
  }
  
  section ul li {
    transition: transform .3s;
  }
  
  section ul li:hover {
    transform: scale(1.1)
  }
  
  .games-list img {
    width: 90px;
    border-radius: 8px;
  }
  
  .channel-list img {
    border-radius: 50%; 
    width: 70px;
    border: 1px solid #443E54;
  }
  
  /* animation */
  
  header div {
    animation: fromTop .7s .2s backwards;
  }
  
  main section {
    animation: fromBottom .7s backwards;
  }
  
  main section:nth-child(1) {
    animation-delay: 0;
  }
  
  main section:nth-child(2) {
    animation-delay: .3s;
  }
  
  main section:nth-child(3) {
    animation-delay: .6s;
  }
  
  @keyframes fromTop {
    from {
        opacity: 0;
        transform: translateY(-30px)
    }
  
    to {
        opacity: 1;
        transform: translateY(0)
    }
  }
  
  @keyframes fromBottom {
    from {
        opacity: 0;
        transform: translateY(30px)
    }
  
    to {
        opacity: 1;
        transform: translateY(0)
    }
  }


`;
