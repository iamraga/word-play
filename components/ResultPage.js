import React from 'react';
import { Row, Col, Typography, Icon, Button } from 'antd';

const { Title, Text, Paragraph } = Typography;

const ResultPage = (props) => {
    return (
        <div className="result-cont">
            <Row type="flex" justify="center">
                <Col span={24} style={{textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" style={{fontSize: '90px', marginBottom: '20px'}} />
                    <Title level={1}>Great!</Title>
                    <Title level={3} style={{marginTop: '10px'}}>You guessed {props.correct} out of {props.questions.length} words correctly!</Title>
                    <div className="statistics">
                        <Title level={4}>Complete Statistics</Title>
                        <Paragraph><Text strong>Level : </Text><Text>{props.level}</Text></Paragraph>
                        <Paragraph><Text strong>Right Answers : </Text><Text>{props.correct}</Text></Paragraph>
                        <Paragraph><Text strong>Wrong Answers : </Text><Text>{props.wrong}</Text></Paragraph>
                        <Paragraph><Text strong>Total number of hints used : </Text><Text>{props.hintsUsed}</Text></Paragraph>
                    </div>
                    <Button type="primary" size="large" shape="round" onClick={props.newGame} style={{padding: '0px 75px', margin: '15px 0px 10px 0px'}}>Start new game</Button>
                </Col>
            </Row>
        </div>
    )
}

export default ResultPage;