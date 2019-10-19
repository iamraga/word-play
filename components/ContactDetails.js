import React from 'react';
import { Icon } from 'antd';

export default function ContactDetails() {
    return (
        <div className="contact">
            <span>Made with <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" style={{padding: '0px 5px'}} /> By <b>Ragavendhar</b></span>
            <div className="social">
                <a href="https://github.com/iamraga" target="_blank"><Icon type="github" /></a>
                <a href="https://www.linkedin.com/in/ragavendhar-t" target="_blank"><Icon type="linkedin" /></a>
                <a href="https://twitter.com/RagavendharT" target="_blank"><Icon type="twitter" /></a>
            </div>
        </div>
    )
}
