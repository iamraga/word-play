import React from 'react';
import { Layout } from 'antd';
import '../style.css';
import ContactDetails from '../components/ContactDetails';
import WordPlay from '../components/WordPlay';

const { Header, Footer, Content } = Layout;

function Index() {
    return (
        <Layout>
            <Header className="header">
                <div className="title">WORDPLAY</div>
            </Header>
            <Content style={{padding: '40px'}}>
                <WordPlay />
            </Content>
            <Footer style={{textAlign: 'center', backgroundColor: '#dadada', boxShadow: '0px -3px 10px -8px #000'}}>
                <ContactDetails />
                <a href="https://github.com/iamraga/word-play" target="_blank" style={{color: '#000'}}>Check out the source code here</a>
            </Footer>
        </Layout>
    )
}

export default Index;