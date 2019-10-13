import React, { Component } from 'react';
import { Row, Col, Typography, Button, Icon } from 'antd'; 
import { getQuestions, getAnswers } from '../words';
import SortableLetters from '../components/SortableLetters';

const { Text, Title } = Typography;

export default class GameCenter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentQn: {},
            round: 0,
            questions: [],
            answers: [],
            level: this.props.level,
            correct: 0,
            wrong: 0,
            hintsUsed: 0,
            noOfAttempts: 0,
            isStarted: false
        }

        this.onGameBegin = this.onGameBegin.bind(this);
        this.toNextWord = this.toNextWord.bind(this);
    }

    componentDidMount() {
        const questions = getQuestions(this.state.level);
        const answers = getAnswers(this.state.level);
        this.setState({
            questions,
            answers
        });
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.level) {
            const questions = getQuestions(nextProps.level);
            const answers = getAnswers(nextProps.level);
            this.setState({
                questions,
                answers,
                level: nextProps.level
            });
        }
    }

    onGameBegin(event) {
        let round = (this.state.round + 1);
        console.log(this.state.level);
        this.props.disableOtherLevels("true");
        this.setState({
            isStarted: true,
            round,
            currentQn: this.state.questions[round-1]
        });
    }

    toNextWord(event) {
        let round = this.state.round + 1;
        let currentQn = this.state.questions[round-1];
        this.setState({
            round,
            currentQn,
        });
    }

    render() {

        let content;
        let disableNext = this.state.round >= this.state.questions.length;

        if(!this.state.isStarted) {
            content = (
                <div className="gameIntro">
                    <Title level={3}>Welcome to Wordplay</Title>
                    <Text code>Level : {this.state.level}</Text>
                    <Title level={4} style={{marginTop: '15px'}}>The rules are simple</Title>
                    <ul className="rules">
                        <li><Icon type="form" className="bulletin" />There will be 10 rounds</li>
                        <li><Icon type="form" className="bulletin" />The letters of a word will be given to you jumbled randomly</li>
                        <li><Icon type="form" className="bulletin" />Rearrange the letter blocks and submit to guess the right word</li>
                        <li><Icon type="form" className="bulletin" />If you're out of ideas, you can use up to 2 hints for a word</li>
                        <li><Icon type="form" className="bulletin" />Clicking on 'Give up' will mark that word as wrongly answered and will jump to the next word</li>
                        <li><Icon type="form" className="bulletin" />Kindly do not hit the refresh or back button. This will reset the game and erase your progress</li>
                    </ul>
                    <Button type="primary" size="large" shape="round" onClick={this.onGameBegin} style={{padding: '0px 75px', margin: '10px 0px'}}>Lets Begin!</Button>
                </div>
            );
        }
        else {
            let letterBlocks = this.state.currentQn.word.split('');
            
            content = (
                <div className="gameIntro">
                    <Title level={3}>Round {this.state.round}</Title>
                    <Row type="flex" justify="center" style={{padding: '60px 0px'}}>
                        <Col span={24}>
                            <SortableLetters letters={letterBlocks} currentQn={this.state.currentQn} />
                        </Col>
                    </Row>
                    <Row style={{padding: '15px 0px'}} style={{alignSelf: 'stretch'}}>
                        <Col span={10} offset={7}>
                            <Button type="primary" size="large" className="actionBtns" onClick={this.toNextWord}>
                                Validate
                            </Button>
                        </Col>
                    </Row>
                    <Row style={{padding: '20px 0px', width: '100%'}}>
                        <Col span={4} offset={7}>
                            <Button type="primary" className="actionBtns" onClick={this.skip} disabled={disableNext}>
                                <Icon type="step-forward"></Icon>
                                Skip to next word
                            </Button>
                        </Col>
                        <Col span={4} offset={2} style={{textAlign: 'end'}}>
                            <Button type="danger" className="actionBtns" onClick={this.skip} disabled={disableNext}>
                                <Icon type="close-circle"></Icon>
                                Close game
                            </Button>
                        </Col>
                    </Row>
                </div>
            );
        }

        return (
            <div className="gameDiv">
                <Row type="flex" justify="center">
                    <Col span={20}>
                        {content}
                    </Col>
                </Row>
            </div>
        )
    }
}
