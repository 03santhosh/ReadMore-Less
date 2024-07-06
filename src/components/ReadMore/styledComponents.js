import styled from 'styled-components'

export const MainContainer = styled.div`
   padding:30px;
   @media screen and (min-width:768px){
      padding:100px;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
   }
`
export const Heading = styled.h1`
   color:#1e293b;
   font-family:"Roboto";
   text-align:center;
`
export const Paragraph = styled.p`
   color:#334155;
   font-weight:500;
   font-family:"Roboto";
   text-align:center;
   line-height:0.5;
`
export const ReactHooksImg = styled.img`
   width:100%;
   height:25vh;
   margin-top:30px;
   @media screen and (min-width:768px) {
   width:50%;
   height:50vh;
   margin-top:30px;
   }
`
export const Description = styled.p`
   color:#334155;
   font-size:16px;
   font-weight:500;
   font-family:"Roboto";
   line-height:1.5;
   @media screen and (min-width:768px){
      width:50%;
      margin-top:20px;
      font-size:14px;
   }
`
export const CustomBtn = styled.button`
   background-color:#1f81ff;
   color:#ffffff;
   font-weight:500;
   font-family:"Roboto";
   padding:13px 25px;
   outline:none;
   border:none;
   cursor:pointer;
   border-radius:5px;
   @media screen and (min-width:768px){
      margin-top:30px;
   }
`
