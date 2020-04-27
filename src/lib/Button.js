import React from "react";
import styled from "styled-components/macro";

const TheButton = styled.button`
  background: #6200ee;
  margin-bottom: 20px;
  padding: 2px 25px;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;

  cursor: pointer;
  box-shadow: 0px 5px 5px #c6c6c6;
  display: flex;
  align-items: center;

  color: #fff;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 20px;
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
`;

export const Button = ({ icon, text, className }) => (
  <TheButton className={className} type="button" value="Click Me!">
    {icon && <Icon src={icon} />}
    {text && <Text>{text}</Text>}
  </TheButton>
);
