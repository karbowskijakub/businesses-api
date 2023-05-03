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
    const { setBusinessesName, setLocation, location } =
        useContext(BusinessContext);

    const handleBusinessChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = event.target.value;
        if (categories.includes(value as CategoryType)) {
            setBusinessesName(value as CategoryType);
        }
    };

    const handleOptionChange = (event: SelectChangeEvent) => {
        const selectedOption = event.target.value as string;
        switch (selectedOption) {
            case "Białystok":
                setLocation("Białystok");
                break;
            case "Bydgoszcz":
                setLocation("Bydgoszcz");
                break;
            case "Gdańsk":
                setLocation("Gdańsk");
                break;
            case "Katowice":
                setLocation("Katowice");
                break;
            case "Kraków":
                setLocation("Kraków");
                break;
            case "Łódź":
                setLocation("Łódź");
                break;
            case "Lublin":
                setLocation("Lublin");
                break;
            case "Poznań":
                setLocation("Poznań");
                break;
            case "Szczecin":
                setLocation("Szczecin");
                break;
            case "Warszawa":
                setLocation("Warszawa");
                break;
            default:
                setLocation("");
        }
    };

    return (
        <FormBox>
            <FormInput sx={{ m: 1 }}>
                <Label htmlFor="my-input">Search businesses!</Label>
                <InputForm
                    id="outlined-required"
                    aria-describedby="my-helper-text"
                    onChange={handleBusinessChange}
                />
            </FormInput>
            <FormSelect sx={{ m: 1 }}>
                <InputLabel id="demo-simple-select-label">Near</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    label="Near"
                    value={location}
                    onChange={handleOptionChange}
                >
                    <MenuItem value="Białystok">Białystok</MenuItem>
                    <MenuItem value="Bydgoszcz">Bydgoszcz</MenuItem>
                    <MenuItem value="Gdańsk">Gdańsk</MenuItem>
                    <MenuItem value="Katowice">Katowice</MenuItem>
                    <MenuItem value="Kraków">Kraków</MenuItem>
                    <MenuItem value="Łódź">Łódź</MenuItem>
                    <MenuItem value="Lublin">Lublin</MenuItem>
                    <MenuItem value="Poznań">Poznań</MenuItem>
                    <MenuItem value="Szczecin">Szczecin</MenuItem>
                    <MenuItem value="Warszawa">Warszawa</MenuItem>
                </Select>
            </FormSelect>
        </FormBox>
    );
};

export default Form;

const InputForm = styled(Input)``;

const FormInput = styled(FormControl)`
    z-index: 5;
    width: 90%;
    @media only screen and ${breakpoints.device.xs} {
        width: 60%;
    }

    & label.Mui-focused {
        color: ${({ theme }) => theme.colors.black};
    }

    & .MuiInput-underline::before {
        border-color: ${({ theme }) => theme.colors.black};
    }
    & .MuiInput-underline::after {
        border-color: ${({ theme }) => theme.colors.black};
    }
`;
const FormSelect = styled(FormControl)`
    z-index: 5;
    width: 90%;
    @media only screen and ${breakpoints.device.xs} {
        width: 30%;
    }
    & label.Mui-focused {
        color: ${({ theme }) => theme.colors.black};
    }
    & .MuiOutlinedInput-notchedOutline {
        border-color: ${({ theme }) => theme.colors.black};
    }
    & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: ${({ theme }) => theme.colors.black};
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
