import React from "react";
import styled from "styled-components";
import {
    FormControl,
    InputLabel,
    Select,
    Input,
    MenuItem,
    SelectChangeEvent,
} from "@mui/material";
const Form = () => {
    const [age, setAge] = React.useState("");

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    return (
        <FormBox>
            <FormInput sx={{ m: 1 }}>
                <InputLabel htmlFor="my-input">
                    Search your favourtie restaurant!
                </InputLabel>
                <Input
                    id="outlined-required"
                    aria-describedby="my-helper-text"
                />
            </FormInput>
            <FormSelect sx={{ m: 1 }}>
                <InputLabel id="demo-simple-select-label">Filter</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    value={age}
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormSelect>
        </FormBox>
    );
};

export default Form;

const FormInput = styled(FormControl)`
    z-index: 5;
    width: 60%;
`;
const FormSelect = styled(FormControl)`
    z-index: 5;
    width: 20%;
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
    background: white;
`;
