import React from "react";
import styled from "styled-components";
import logo from "../assets/images/restaurant.jpg";
import { AiFillStar } from "react-icons/ai";
import { Business } from "../api-service/mock-business";
interface Props {
    businessData: Business;
}
const Card = ({ businessData }: Props) => {
    console.log(businessData);
    return (
        <CardElement>
            <ImageContainer>
                <Img src={logo}></Img>
            </ImageContainer>
            <TextContainer>
                <TitleContainer>
                    <Name>
                        Name<span> $$</span>
                    </Name>
                    <IconContainer>
                        <Icon />
                        <span>5</span>
                    </IconContainer>
                </TitleContainer>

                <Type>Pubs</Type>
                <Address>Moniuszki Stanisława, Oleśnica</Address>
            </TextContainer>
        </CardElement>
    );
};

export default Card;

const CardElement = styled.div`
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.yellow};
    border: 1px solid;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 80%;
`;
const TextContainer = styled.div`
width:100%;
height 20%;
padding:1em;
align-items:center;

`;

const Name = styled.h2`
    margin: 0;
    display: inline;
`;
const IconContainer = styled.div`
    margin: 0;
    display: flex;
    text-align: end;
    font-size: 2em;
    align-items: center;
`;
const Type = styled.p`
    margin: 0;
`;
const Address = styled.p`
    margin: 0;
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
