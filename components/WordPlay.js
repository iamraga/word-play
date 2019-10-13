import React, { Component } from 'react';
import { Radio } from 'antd';
import GameCenter from '../components/GameCenter';

export default class WordPlay extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            level: 'easy',
            isGameStarted: false
        }

        this.onLevelChange = this.onLevelChange.bind(this);
        this.disableOtherLevels = this.disableOtherLevels.bind(this);
    }

    onLevelChange(event) {
        this.setState({ level: event.target.value });
    }

    disableOtherLevels(isGameStarted) {
        this.setState({isGameStarted});
    }

    render() {
        let { isGameStarted, level } = this.state;

        return (
            <div className="level-select">
                <div style={{margin: '20px 0px', fontSize: '16px'}}>Rearrange the letter blocks to guess the actual word</div>
                <Radio.Group size="large" onChange={this.onLevelChange} defaultValue={this.state.level} style={{marginBottom: '10px'}}>
                    <Radio.Button value='easy' disabled={isGameStarted && level !== 'easy'} >Easy (6 letters)</Radio.Button>
                    <Radio.Button value='medium' disabled={isGameStarted && level !== 'medium'}>Medium (8 letters)</Radio.Button>
                    <Radio.Button value='hard' disabled={isGameStarted && level !== 'hard'}>Hard (10 letters)</Radio.Button>
                </Radio.Group>
                <GameCenter level={this.state.level} disableOtherLevels={this.disableOtherLevels} />
            </div>
        )
    }
}
