import './Styles/Main.scss';
import {Button, Layout} from "antd";
import {Header} from "antd/es/layout/layout";
import HomeIcon from './Static/Images/home.png'
import SignInIcon from './Static/Images/signin.png';
import SignUpIcon from './Static/Images/signUp.png';
import {CheckOutlined} from '@ant-design/icons';
import Ellipse from './Static/Images/Ellips.png';

function App() {

    return (
        <Layout>
            <Layout>
                <Header style={{background: 'unset', display: 'grid', gridTemplateColumns: 'auto auto'}}>
                    <div className={'logo'}/>
                    <div className={'auth'}>
                        <Button><img src={SignInIcon} alt={'Sign In'}/>Войти</Button>
                        <Button><img src={SignUpIcon} alt={'Sign Up'}/>Регистрация</Button>
                    </div>
                </Header>
            </Layout>
            <Layout className={'NavLayout'}>
                <div>
                    <Button size={'large'} type={'ghost'}><img src={HomeIcon} alt={'Home Icon'}/></Button>
                </div>
                <div>
                    <Button size={'large'} type={'ghost'}>Цены </Button>
                </div>
                <div>
                    <Button size={'large'} type={'ghost'}>Новости</Button>
                </div>
                <Button size={'large'} type={'ghost'}>Помощь</Button>
            </Layout>
            <section id={'AboutUs'}>
                <div className={'ourPerm'}>
                    <div key={'1'}>
                        <div><img src={Ellipse} alt={'Ellipse'}/><CheckOutlined/></div>
                        <div></div>
                    </div>
                    <div key={'2'}>
                        <div><img src={Ellipse} alt={'Ellipse'}/><CheckOutlined/></div>
                        <div></div>
                    </div>
                    <div key={'3'}>
                        <div><img src={Ellipse} alt={'Ellipse'}/><CheckOutlined/></div>
                        <div></div>
                    </div>
                </div>
                <div className={'information'}>
                    <div></div>
                </div>
            </section>
        </Layout>
    );
}

export default App;