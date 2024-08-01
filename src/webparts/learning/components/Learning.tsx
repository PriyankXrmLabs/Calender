import * as React from 'react';
import styles from './Learning.module.scss';
import type { ILearningProps } from './ILearningProps';
//import Hello from './Hello';
import Calendar from './Calendar';
import Heading from './Heading';

export default class Learning extends React.Component<ILearningProps, {}> {
  public render(): React.ReactElement<ILearningProps> {
    

    return (
      <section className={`${styles.learning}`}>
        <Heading Name={this.props.Name}></Heading>
        {/*
        <p className={`${styles.Heading}`}>Calendar</p>
        <Hello user = 'Shilpa'></Hello>
        <h2></h2>*/}
        <Calendar headerColor={this.props.headerColor} gridColor={this.props.gridColor} todayColor={this.props.todayColor}></Calendar>
          
      </section>
    );
  }
}
