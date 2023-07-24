import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Getting Started",
    Svg: require("@site/static/img/undraw_browser_stats.svg").default,
    description: <>Learn how to get started using LightningBot.</>,
  },
  {
    title: "Commands",
    Svg: require("@site/static/img/undraw_accept_tasks.svg").default,
    description: (
      <>
        Learn about the commands available in LightningBot and how to use them
        to their full potential.
      </>
    ),
  },
  {
    title: "Features",
    Svg: require("@site/static/img/undraw_apps.svg").default,
    description: (
      <>Learn how to use all of the features available in LightningBot.</>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
