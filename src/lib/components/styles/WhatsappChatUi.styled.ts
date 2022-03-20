import styled from "styled-components";

export const SmartphoneDesign = styled.div`
height: ${({ theme }) => theme.size + '%' || '50%'};
width: ${({ theme }) => theme.size * 0.3 + '%' || '15%'};
position: relative;
margin: auto;
border: 16px black solid;
border-top-width: 60px;
border-bottom-width: 60px;
border-radius: 36px;
@media (max-width: 768px) {
  width: ${({ theme }) => theme.size * 0.9 + '%' || '15%'};
}

*:before {
  content: '';
  display: block;
  width: 60px;
  height: 5px;
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #333;
  border-radius: 10px;
}

*:after {
  content: '';
  display: block;
  width: 35px;
  height: 35px;
  position: absolute;
  left: 50%;
  bottom: -65px;
  transform: translate(-50%, -50%);
  background: #333;
  border-radius: 50%;
}
`

export const StyledWhatsapp = styled.div`
direction: rtl;
height: 100%;
width: 100%;
background-image: url('https://res.cloudinary.com/dmjmaixrd/image/upload/v1645302935/bg_rxsblf.png');
display: flex;
flex-direction: column;
justify-content: space-between;
`
