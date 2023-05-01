import React, { useContext } from "react";
import styled from "styled-components";
import {
    FormControl,
    InputLabel,
    Select,
    Input,
    MenuItem,
    SelectChangeEvent,
} from "@mui/material";
import breakpoints from "../assets/breakpoints/breakpoints";
import { CategoryType, categories } from "../api-service/useSearchBusinesses";
import { BusinessContext } from "../providers/BusinessContext";

const Form = () => {
    const { setBusinessesName } = useContext(BusinessContext);

    const [age, setAge] = React.useState("");

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    const handleBusinessChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = event.target.value;
        if (categories.includes(value as CategoryType)) {
            setBusinessesName(value as CategoryType);
        }
    };
    return (
        <FormBox>
            <FormInput sx={{ m: 1 }}>
                <Label htmlFor="my-input">Search businesses!</Label>
                <Input
                    id="outlined-required"
                    aria-describedby="my-helper-text"
                    onChange={handleBusinessChange}
                />
            </FormInput>
            <FormSelect sx={{ m: 1 }}>
                <InputLabel id="demo-simple-select-label">Near</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    value={age}
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Białystok</MenuItem>
                    <MenuItem value={20}>Bydgoszcz</MenuItem>
                    <MenuItem value={30}>Gdańsk</MenuItem>
                    <MenuItem value={40}>Katowice</MenuItem>
                    <MenuItem value={50}>Kraków</MenuItem>
                    <MenuItem value={60}>Łódź</MenuItem>
                    <MenuItem value={70}>Lublin</MenuItem>
                    <MenuItem value={80}>Poznań</MenuItem>
                    <MenuItem value={90}>Szczecin</MenuItem>
                    <MenuItem value={100}>Warszawa</MenuItem>
                </Select>
            </FormSelect>
        </FormBox>
    );
};

export default Form;

const FormInput = styled(FormControl)`
    z-index: 5;
    width: 90%;
    @media only screen and ${breakpoints.device.xs} {
        width: 60%;
    }
`;
const FormSelect = styled(FormControl)`
    z-index: 5;
    width: 90%;
    @media only screen and ${breakpoints.device.xs} {
        width: 30%;
    }
`;

const FormBox = styled.div`
    height: 3em;
    border-radius: 5px;
    outline: none;
    width: 1000px;
    height: 30%;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    flex-direction: column;
    @media only screen and ${breakpoints.device.xs} {
        flex-direction: row;
    }
`;
const Label = styled(InputLabel)`
    font-size: ${({ theme }) => theme.fontSize.l};
`;
