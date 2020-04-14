import styled from 'styled-components';

export const KbdNavWrapper = styled.div`
position: relative;
margin: 0;
text-align: center;
min-width: 630px;
box-shadow: 0 0 4px 0 #ccc;
background: #fffcf1;
display: inline-block;
`;

export const KbdNavdesc = styled.div`
  font-size: 14px;
  line-height: 21px;
  h1 {
    margin-bottom: 4px;
    font-size: 18px;
  }
`;

export const KbdNav = styled.div`
  display: inline-block;
  background: rgba(255,255,255,0.7);
  border-radius: 10px;
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
  /*美化按键*/
  .kbd{
    margin: 0;
    padding: 0;
    border:0;
    width: 51px;
    height: 36px;

    /*线性渐变:0-70白色,70-100,fff-f3f3f3渐变*/
    background: linear-gradient(to bottom,#fffcfc 0%,#fffcfc 70%, #fafafa 100%);
    border-radius: 7px;

    box-shadow: 0 5px 0 0 #767d81;
    color: #767D81;
    font-family: Helvetical;


    vertical-align: top;
    position: relative;
  }
  .kbd_wrapper{
    display: inline-block;
    vertical-align: top;

    width: 51px;
    height: 41px;
    border-radius: 7px;
    margin: 0 5px;

    box-shadow: 0 4px 3px 0 #3C3C3D,0 0 1px 0 #3C3C3D;
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
  .kbd_wrapper:hover {
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  }
  
  @keyframes shake{
    10%, 90% {
        transform: translate3d(-1px, 0, 0);
    }
    20%, 80% {
        transform: translate3d(2px, 0, 0);
    }
    
    30%, 50%, 70% {
        transform: translate3d(-4px, 0, 0);
    }
    40%, 60% {
        transform: translate3d(4px, 0, 0);
    }
  }
`;

