import React from "react";
/* import { Card } from "./lib/Card.js"; */
import { Button } from "./lib/Button.js";
/* Macro gives nicer classnames */
import styled from "styled-components/macro";

/* const ThinnerCard = styled(Card)`
  width: 400px;
`; */
const TextButton = styled(Button)`
  background-color: #f1f1f1;
  border: none;
  color: #6200ee;
  box-shadow: none;
`;

const BorderButton = styled(Button)`
  background-color: #f1f1f1;
  border: 2px solid #c3c3c3;
  color: #6200ee;
  box-shadow: none;
`;

export const App = () => {
  return (
    <AppContainer>
      <Button text="Click me!" />
      <Button
        icon="https://image.flaticon.com/icons/svg/1077/1077035.svg"
        text="Click me!"
      />
      <BorderButton text="Click me!"></BorderButton>
      <TextButton text="Click me!"></TextButton>
      {/*   <ThinnerCard
        coverImage="https://www.fillmurray.com/500/300"
        thumbnailUrl="https://www.fillmurray.com/100/100"
        title="Title"
        secondaryText="Secondary text"
      >
        <p>Child content here!</p>
      </ThinnerCard>

      <Card title="Only title" secondaryText="Secondary text" />

      <Card>
        <h3>Hello from children</h3>
      </Card> */}
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: 500px;
`;
