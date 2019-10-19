import React, { Component } from 'react';
import { sortable } from 'react-sortable';

class SortableItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li {...this.props}>
                {this.props.children}
            </li>
        )
    }
}

export default sortable(SortableItem);