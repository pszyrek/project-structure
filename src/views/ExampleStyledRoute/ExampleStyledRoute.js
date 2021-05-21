import React from "react";

import { ReusableComponent } from "src/components";

import { Root } from "./ui";

const ExampleStyledRoute = () => {
  return (
    <Root>
      <div>Example div with</div>
      <ReusableComponent name="Piotr" />
    </Root>
  );
};

export default ExampleStyledRoute;
