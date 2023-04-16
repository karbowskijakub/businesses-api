import React from "react";
import styled from "styled-components";

const Header = () => {
    return (
        <Container>
            <Form></Form>
        </Container>
    );
};

export default Header;

const Container = styled.header`
    width: 100%;
    height: 600px;
    background: ${({ theme }) => theme.colors.blue};
`;
const Form = styled.form``;
