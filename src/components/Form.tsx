import React from "react";
import styled from "styled-components";
const Form = () => {
    return (
        <FormBox>
            <FormInput>
                <Input
                    type="text"
                    id="search"
                    placeholder="Search your favourite restaurant!"
                ></Input>
            </FormInput>
            <FormSelect>
                <Select name="Filter" id="filter">
                    <Option value="">Filter</Option>
                    <Option value="">Popularity</Option>
                    <Option value="">Low price</Option>
                    <Option value="">High price</Option>
                </Select>
            </FormSelect>
        </FormBox>
    );
};

export default Form;

const FormInput = styled.form`
    z-index: 5;
    width: 80%;
    margin: 0 0.5em;
`;
const FormSelect = styled.form`
    z-index: 5;
    width: 20%;
    margin: 0 0.5em;
`;
const Input = styled.input`
    width: 100%;
    border-radius: 5px;
    border: none;
    height: 4em;
    outline: none;
    ::placeholder {
        padding: 0.5em;
    }
`;
const Select = styled.select`
    height: 4em;
    border-radius: 5px;
    outline: none;
    width: 100%;
`;
const FormBox = styled.div`
    height: 3em;
    border-radius: 5px;
    outline: none;
    width: 1000px;
    height: 20%;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Option = styled.option``;
