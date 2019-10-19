import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';

const StatusBar = (props) => {

    let [wrong, setWrong] = useState(props.wrong);
    let [correct, setCorrect] = useState(props.correct);
    let [hintsUsed, setHintsUsed] = useState(props.hintsUsed);
    let [noOfAttempts, setNoOfAttempts] = useState(props.noOfAttempts);

    useEffect(() => {
        setWrong(props.wrong);
        setCorrect(props.correct);
        setHintsUsed(props.hintsUsed);
        setNoOfAttempts(props.noOfAttempts);
    }, [props.wrong, props.correct, props.hintsUsed, props.noOfAttempts]);

    return (
        <Row className="status-bar">
            <Col span={5} offset={2}>
                Wrong : {wrong}
            </Col>
            <Col span={5}>
                Correct : {correct}
            </Col>
            <Col span={5}>
                Total Hints used : {hintsUsed}
            </Col>
            <Col span={5}>
                Number of Failed Attempts : {noOfAttempts}/3
            </Col>
        </Row>
    )
}

export default StatusBar;