import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { Business } from "../api-service/mock-business";
import breakpoints from "../assets/breakpoints/breakpoints";

interface Props {
    businessData: Business;
}
const Card = ({ businessData }: Props) => {
    console.log(businessData);
    const { name, location, rating, categories, image_url } = businessData;
    return (
        <CardElement>
            <ImageContainer>
                <Img src={image_url}></Img>
            </ImageContainer>
            <TextContainer>
                <TitleContainer>
                    <Name>
                        {name}
                        <span>
                            {categories[0].title.includes("Fast Food")
                                ? " $"
                                : " $$"}
                        </span>
                    </Name>
                    <IconContainer>
                        <Icon />
                        <span>{rating > 0 ? rating : null}</span>
                    </IconContainer>
                </TitleContainer>
                <InfoContainer>
                    <Type>{categories[0].title}</Type>
                    <Address>
                        {location.address1}, {location.city}
                    </Address>
                </InfoContainer>
            </TextContainer>
        </CardElement>
    );
};

export default Card;

const CardElement = styled.div`
    width: 100%;
    height: 280px;
    background: ${({ theme }) => theme.colors.yellow};
    border: 1px solid;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px 0px;
    @media only screen and ${breakpoints.device.xxs} {
        height: 280px;
    }
    @media only screen and ${breakpoints.device.xl} {
        height: 340px;
    }
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 70%;
`;
const TextContainer = styled.div`
width:100%;
height 30%;
padding:1em;
align-items:center;
`;

const Name = styled.h2`
    margin: 0;
    display: inline;
    font-size: ${({ theme }) => theme.fontSize.m};
    max-width: 200px;
    @media only screen and ${breakpoints.device.xxs} {
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media only screen and ${breakpoints.device.xl} {
        font-size: ${({ theme }) => theme.fontSize.xl};
    }
`;
const IconContainer = styled.div`
    margin: 0;
    display: flex;
    font-size: 2em;
    align-items: center;

    font-size: ${({ theme }) => theme.fontSize.xl};
`;
const Type = styled.p`
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.m};
    @media only screen and ${breakpoints.device.xl} {
        font-size: ${({ theme }) => theme.fontSize.l};
    }
`;
const Address = styled.p`
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.m};

    @media only screen and ${breakpoints.device.xl} {
        font-size: ${({ theme }) => theme.fontSize.l};
    }
`;
const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Icon = styled(AiFillStar)`
    width: 100%;
    height: 100%;
    display: block;
`;
const InfoContainer = styled.div`
    width: 100%;
`;
