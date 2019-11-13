import React, { Component } from 'react';
import { Row, Col, Typography, Button, Icon } from 'antd'; 
import { getQuestions, getAnswers } from '../words';
import SortableLetters from '../components/SortableLetters';
import StatusBar from '../components/StatusBar';
import EndGame from '../components/EndGame';
import ResultPage from '../components/ResultPage';

const { Text, Title } = Typography;

export default class GameCenter extends Component {

    constructor(props) {
        super(props);

        this.initialState = {
            currentQn: {},
            round: 0,
            questions: [],
            answers: [],
            currentSortedItems: [],
            level: this.props.level,
            correct: 0,
            wrong: 0,
            hintsUsed: 0,
            noOfAttempts: 0,
            isStarted: false,
            isResultPage: false
        }
        this.state = this.initialState;

        this.onGameBegin = this.onGameBegin.bind(this);
        this.showHint = this.showHint.bind(this);
        this.skip = this.skip.bind(this);
        this.endGame = this.endGame.bind(this);
        this.validateWord = this.validateWord.bind(this);
        this.setLettersAfterSort = this.setLettersAfterSort.bind(this);
        this.newGame = this.newGame.bind(this);
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
        this.props.disableOtherLevels(true);
        this.setState({
            isStarted: true,
            round,
            currentQn: this.state.questions[round-1],
            currentSortedItems: this.state.questions[round-1].word.split('')
        });
    }

    showHint(event) {
        let hintVal = 'showHint' + event.target.value;
        let { currentQn } = this.state;
        currentQn[hintVal] = true;
        this.setState({
            hintsUsed: this.state.hintsUsed + 1,
            currentQn
        });
    }

    setLettersAfterSort(letters) {
        this.setState({
            currentSortedItems: letters
        });
    }

    validateWord(event) {
        let letters = this.state.currentSortedItems.join('');
        let isAnswerRight = this.state.answers[this.state.round - 1] === letters;
        let isLastWord = this.state.round >= this.state.questions.length;
        if(isAnswerRight) {
            let correct = this.state.correct + 1;
            this.setState({
                correct
            });
            document.getElementById("gameDiv").classList.add("rightAnswer");
        }
        else {
            let noOfAttempts = this.state.noOfAttempts + 1;
            this.setState({
                noOfAttempts,
            });
            if(!isAnswerRight && noOfAttempts >= 3) {
                this.setState({wrong: this.state.wrong + 1});
            }
            document.getElementById("letterBlocks").classList.add("wrongAnswer");
        }
        setTimeout(() => {
            document.getElementById("gameDiv").classList.remove("rightAnswer");
            document.getElementById("letterBlocks").classList.remove("wrongAnswer");
            if((isAnswerRight && !isLastWord) || (!isAnswerRight && this.state.noOfAttempts >= 3 && !isLastWord)) {
                let round = this.state.round + 1;
                let currentQn = this.state.questions[round-1];
                this.setState({
                    round, 
                    currentQn,
                    currentSortedItems: currentQn.word.split(''),
                    noOfAttempts: 0
                });
            }
            else if(isLastWord && this.state.noOfAttempts >= 3) {
                this.setState({isResultPage: true});
            }
        }, 600);
    }

    skip(event) {
        let round = this.state.round + 1;
        let currentQn = this.state.questions[round-1];
        let wrong = this.state.wrong + 1;
        this.setState({
            wrong,
            round,
            currentQn,
            currentSortedItems: currentQn.word.split(''),
            noOfAttempts: 0
        });
    }

    endGame() {
        const questions = getQuestions(this.state.level);
        const answers = getAnswers(this.state.level);
        this.props.disableOtherLevels(false);
        this.setState({
            ...this.initialState,
            questions,
            answers
        });
    }

    newGame() {
        this.setState(this.initialState);
        this.props.disableOtherLevels(false);
    }

    render() {

        let content;
        let disableNext = this.state.round >= this.state.questions.length;

        if(!this.state.isStarted) {
            content = (
                <div className="gameIntro">
                    <Title level={3}>Welcome to Wordplay</Title>
                    <Text style={{fontSize: '16px'}} code>Level : {this.state.level}</Text>
                    <Title level={4} style={{marginTop: '15px'}}>The rules are simple</Title>
                    <ul className="rules">
                        <li><Icon type="form" className="bulletin" />There will be 10 rounds</li>
                        <li><Icon type="form" className="bulletin" />The jumbled letters of a word will be given to you</li>
                        <li><Icon type="form" className="bulletin" />Rearrange the letter blocks and submit.</li>
                        <li><Icon type="form" className="bulletin" />If you're out of ideas, you can use up to 2 hints for a word</li>
                        <li><Icon type="form" className="bulletin" />The maximum number of attempts in a round is 3, failing which the round will be marked 'wrongly answered'.</li>
                        <li><Icon type="form" className="bulletin" />Clicking on 'Skip to next word' will mark that word as wrongly answered and will jump to the next word</li>
                        <li><Icon type="form" className="bulletin" />Kindly do not hit the refresh or back button. This will reset the game and erase your progress</li>
                    </ul>
                    <Button type="primary" size="large" shape="round" onClick={this.onGameBegin} style={{padding: '0px 75px', margin: '10px 0px'}}>Lets Begin!</Button>
                </div>
            );
        }
        else {
            let { currentQn } = this.state;
            let hint2 = (currentQn.showHint2) ? (
                <Col span={24}>
                    <div className="hintDiv">
                        <Text type="secondary" style={{fontSize: '16px', marginRight: '5px'}}>Hint 2 : </Text>
                        <Text style={{fontSize: '24px'}}>{currentQn.hint2}</Text>
                    </div>
                </Col>
            ) : (
                <Col span={24}>
                    <div style={{display: 'flex', justifyContent: 'center', margin: '5px 0px'}}>
                        <Button type="dashed" disabled={!currentQn.showHint1} icon="bulb" onClick={this.showHint} value='2'>Show Hint 2</Button>
                    </div>
                </Col>
            );
            let hint1 = (currentQn.showHint1) ? (
                <Col span={24}>
                    <div className="hintDiv">
                        <Text type="secondary" style={{fontSize: '16px', marginRight: '5px'}}>Hint 1 : </Text>
                        <Text>{currentQn.hint1}</Text>
                    </div>
                </Col>
            ) : (
                <Col span={24}>
                    <div style={{display: 'flex', justifyContent: 'center', margin: '5px 0px'}}>
                        <Button type="dashed" icon="bulb" onClick={this.showHint} value='1'>Show Hint 1</Button>
                    </div>
                </Col>
            );
            let hints = (
                <Row className="hintsCont">
                    <Col span={24} style={{textAlign: 'center', fontSize: '20px'}} >
                        <Text strong style={{marginRight: '5px'}}>Category : </Text>
                        <Text>{currentQn.category}</Text>
                    </Col>
                    {hint1}
                    {hint2}
                </Row>
            )
            
            content = (
                <div className="gameIntro">
                    <Title level={3}>Round {this.state.round} of {this.state.questions.length}</Title>
                    <StatusBar wrong={this.state.wrong} hintsUsed={this.state.hintsUsed} correct={this.state.correct} noOfAttempts={this.state.noOfAttempts} />
                    {hints}
                    <Row type="flex" justify="center" style={{padding: '50px 0px'}}>
                        <Col span={24}>
                            <SortableLetters letters={this.state.currentSortedItems} currentQn={currentQn} afterSort={this.setLettersAfterSort} />
                        </Col>
                    </Row>
                    <Row style={{padding: '15px 0px'}} style={{alignSelf: 'stretch'}}>
                        <Col span={10} offset={7}>
                            <Button type="primary" size="large" className="actionBtns" onClick={this.validateWord}>
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
                            <EndGame endGame={this.endGame} />
                        </Col>
                    </Row>
                </div>
            );
        }

        return (
            <div className="gameDiv" id="gameDiv">
                <Row type="flex" justify="center">
                    <Col span={20}>
                        {this.state.isResultPage ? (<ResultPage {...this.state} newGame={this.newGame} />) : content}
                    </Col>
                </Row>
            </div>
        )
    }
}
