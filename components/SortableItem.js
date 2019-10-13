import React, { Component } from 'react';
import { sortable } from 'react-sortable';

class SortableItem extends Component {

    constructor(props) {
        super(props);

        this.onDragLetter = this.onDragLetter.bind(this);
        this.onDropLetter = this.onDropLetter.bind(this);
    }

    onDragLetter(event) {
        console.log("dragging");
    }

    onDropLetter(event) {
        console.log("Dropped");
    }

    render() {
        return (
            <li {...this.props} onDrag={this.onDragLetter} onDrop={this.onDropLetter}>
                {this.props.children}
            </li>
        )
    }
}

export default sortable(SortableItem);