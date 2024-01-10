import styled from "styled-components";

const Layout = ({ children }) => {
 return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;

const StyledLayout = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-between;
 min-height: 100vh;
 padding: 32px 22px 48px;
`;
