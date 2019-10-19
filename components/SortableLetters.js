import React, { Component } from 'react';
import SortableItem from './SortableItem';

export default class SortableLetters extends Component {
    constructor(props) {
        super(props);

        this.state = {
            letters: this.props.letters,
            currentQn: this.props.currentQn
        }

        this.onSortItems = this.onSortItems.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            letters: nextProps.letters,
            currentQn: nextProps.currentQn
        });
    }

    onSortItems(items) {
        this.setState({letters: items});
        this.props.afterSort(this.state.letters);
    }

    render() {

        let blocks = this.state.letters.map((letter, i) => (
            <SortableItem
                key={i}
                items={this.state.letters}
                onSortItems={this.onSortItems}
                sortId={i}
                >
                <div className="sortItem">{letter}</div>
            </SortableItem>
        ));

        return (
            <ul className="letterBlocks">
                {blocks}
            </ul>
        )
    }
}
