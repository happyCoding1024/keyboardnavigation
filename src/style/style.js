import styled from 'styled-components';

export const KbdNavWrapper = styled.div`
  position: relative;
  margin: 0;
  text-align: center;
  min-width: 630px;
  box-shadow: 0 0 4px 0 #ccc;
  background: linear-gradient(to right, #fff8f8 0%, #fffeef 50%,#fbfdff 70%, #f5f4f9 100%);
  display: inline-block;
  padding: 0 10px;
`;

export const KbdNavdesc = styled.div`
  font-size: 14px;
  line-height: 21px;
  h1 {
    margin: 5px 0;
    font-size: 18px;
  }
  p {
    color: #555;
  }
`;

export const KbdNav = styled.div`
  display: inline-block;
  border-radius: 10px;
  margin-bottom: 18px;
  kbd{
    display: inline-block;
    border: 1px solid red;
    width: 4em;
    height: 4em;
    text-transform: uppercase;
    position: relative;
  
  }
  kbd>button{
    position: absolute;
    right: 0;
    bottom: 0;
    display: none;
    transition: all 0.3s;
    border-radius: 2px;
    padding: 1px 1px;
    font-size: 12px;
  }
  kbd:hover>button{
    display: inline-block;
  }
  kbd>button:hover{
    background: rgb(237, 172, 226);
    color: #eee;
  }
  &>div:nth-child(2){
    margin-left: -30px;
  
  }
  &>div:nth-child(3){
    margin-left: -112px;
  }

  .kbd{
    margin: 4px;
    padding: 0;
    border: 1px solid #ccc;
    width: 51px;
    height: 39px;

    background: linear-gradient(to bottom,#fff 0%,#fff1ff 40%,#fffcfc 100%);
    border-radius: 7px;

    box-shadow: 0 6px 1px 0 #767d81;
    color: #767D81;
    font-family: Helvetical;


    vertical-align: top;
    position: relative;
  }
  &>div{
    margin: 10px 0;
  }
  
  kbd img{
    width: 13px;
    height: 13px;
    position: absolute;
    left: 5px;
    bottom: 2px;
  }
  kbd .text{
    position: absolute;
    left: 7px;
    top: 4px;
  }
`;

