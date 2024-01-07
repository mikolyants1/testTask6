import styled, { IStyledComponent } from "styled-components";
import { BaseObject } from "styled-components/dist/types";

export const FlexBlock:IStyledComponent<"web",BaseObject> = styled.div`
 width:90%;
 display:flex;
 justify-content:space-between;
 @media (max-width:700px) {
  display:block;
 }
`
export const FlexInputBlock:IStyledComponent<'web',BaseObject> = styled.div`
width:45%;
display:flex;
justify-content:center;
align-items:center;

@media(max-width:700px){
  width:100%;
  margin:5px auto 5px auto
}
`