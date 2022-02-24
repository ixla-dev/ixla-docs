import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Built-in Automation',
    Svg: require('../../static/img/icons/workflow.svg').default,
    description: (
      <>
        The system takes care of the Laser Personalization Process letting you focus on other aspect of the integration
      </>
    ),
  },
  {
    title: 'Easy Database Integration',
    Svg: require('../../static/img/icons/db.svg').default,
    description: (
      <>
        Personalization data can be fed into the system via shared database tables
      </>
    ),
  },
  {
    title: 'Build your own Tools',
    Svg: require('../../static/img/icons/rest-api.svg').default,
    description: (
      <>
        We expose a broad set of REST APIs for easy setup, automation, monitoring and control
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
