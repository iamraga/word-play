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
                <ContactDetails />
            </Header>
            <Content style={{padding: '40px'}}>
                <WordPlay />
            </Content>
            <Footer style={{textAlign: 'center', backgroundColor: '#dadada'}}>
                Check out the source here
            </Footer>
        </Layout>
    )
}

export default Index;