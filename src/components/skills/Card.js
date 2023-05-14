import React, { Component } from 'react';
import styles from "./skills.module.css";
import skillsData from '../../data/skillsData.json';
class Card extends Component {
    render() {
        return (
            <div className={styles.container} >
                {skillsData.map((data) => {
                    return (
                        <div key={data.id} className={styles.card}>
                            <h2 className={styles.cardTitle}>{data.title} </h2>
                            {data.desc.map((des) => {
                                return (<h4 className={styles.cardDesc}>{des}</h4>)
                            })};
                        </div>)
                })
                };
            </div>);
    }
}
export default Card; 
