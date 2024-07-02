import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Einfach zu benutzen',
    description: (
      <>
        Die JobDone Plattform wurde mit dem Ziel entwickelt, die Dienstplanung, Zeiterfassung und Kommunikation in einer intuitiven und benutzerfreundlichen Oberfläche zu vereinen.
      </>
    ),
  },
  {
    title: 'Konzentriere dich auf das Wesentliche',
    description: (
      <>
        Mit der JobDone Plattform kannst du dich auf die wirklich wichtigen Aufgaben konzentrieren. Nutze die umfangreichen Funktionen zur Zeiterfassung und Planung, um deine Effizienz zu steigern.
      </>
    ),
  },
  {
    title: 'Modern und Innovativ',
    description: (
      <>
        Die JobDone Plattform kombiniert moderne Technologien für eine nahtlose Benutzererfahrung. Erlebe die Vorteile einer hochmodernen Plattform für Dienstplanung und Kommunikation.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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