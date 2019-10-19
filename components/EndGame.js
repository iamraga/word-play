import React, { Component } from 'react'
import { Button, Icon, Modal } from 'antd';

const { confirm } = Modal;

export default class EndGame extends Component {
    
    constructor(props) {
        super(props);
        this.showEndConfirm = this.showEndConfirm.bind(this);
    }

    showEndConfirm(event) {
        confirm({
            title: "Are you sure you want to end this game?",
            content: "Ending this game will erase and reset your progress",
            okText: "End Game",
            okType: "danger",
            cancelText: "Cancel",
            onOk: () => {
                this.props.endGame();
            },
            
        })
    }
    
    
    render() {
        return (
            <Button type="danger" className="actionBtns" onClick={this.showEndConfirm}>
                <Icon type="close-circle"></Icon>
                End game
            </Button>
        )
    }
}