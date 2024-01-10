import styled from "styled-components";
import icoSettings from "../../assets/icon-settings.svg";
import { useState } from "react";
import { UseTimerContext } from "../../context/timerContext";
import Divider from "../Divider";
import Form from "./Form";
import closeImg from "../../assets/icon-close.svg";

const Settings = ({
 fontFamilyType,
 setFontFamilyType,
 selectedTheme,
 setSelectedTheme,
}) => {
 const [showModal, setShowModal] = useState(false);
 const { stopCountingDownHandler } = UseTimerContext();

 const showModalHandler = () => {
  setShowModal(true);
  stopCountingDownHandler();
 };
 const closeModalHandler = () => setShowModal(false);
 return (
  <>
   {showModal && (
    <>
     <Modal onClick={closeModalHandler} />
     <SettingsPanel>
      <h2>Settings</h2>
      <Divider />
      <Form
       fontFamilyType={fontFamilyType}
       setFontFamilyType={setFontFamilyType}
       selectedTheme={selectedTheme}
       setSelectedTheme={setSelectedTheme}
       onCloseModal={closeModalHandler}
      />
      <CloseImg
       src={closeImg}
       alt=""
       onClick={closeModalHandler}
      />
     </SettingsPanel>
    </>
   )}
   <SettingsButton
    src={icoSettings}
    alt=""
    type="button"
    onClick={showModalHandler}
   />
  </>
 );
};

export default Settings;

const SettingsButton = styled.img`
 cursor: pointer;
 margin-top: 50px;
`;

const Modal = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 width: 100vw;
 height: 100vh;
 background-color: rgba(10, 12, 28, 0.5);
 z-index: 1;
 max-height: 100vh;
`;

const SettingsPanel = styled.div`
 background-color: #fff;
 position: absolute;
 top: 50%;
 left: 24px;
 right: 24px;
 border-radius: 15px;
 z-index: 2;

 transform: translateY(-50%);
 h2 {
  padding: 24px 24px 4px;
  font-size: 2rem;
 }

 @media screen and (min-width: ${({ theme }) => theme.width.sm}px) {
  left: 50%;
  transform: translate(-50%, -50%);
  width: 540px;
  h2 {
   font-size: 2.8rem;
  }
 }
`;

const CloseImg = styled.img`
 position: absolute;
 top: 29px;
 right: 24px;
 cursor: pointer;
`;
