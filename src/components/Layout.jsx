import styled from "styled-components";

const Layout = ({ children }) => {
 return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;

const StyledLayout = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 padding: 32px 22px 48px;
`;
