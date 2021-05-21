import React from "react";

import { ReusableComponent } from "src/components";

import styles from "./ExampleScssRoute.module.scss";

const ExampleScssRoute = () => {
  return (
    <div className={styles.root}>
      <div>Example div with</div>
      <ReusableComponent name="Tomek" />
    </div>
  );
};

export default ExampleScssRoute;
