import { Hummer, View, Button, Navigator, ButtonStyle } from '@hummer/hummer-front'
import { Color } from '../common/CommonColor';

class RootView extends View {
    constructor() {
        super();

        this.style = {
            width: '100%',
            height: '100%',
            alignItems: 'center',
            paddingTop: 8,
        }

        let btnStyle: ButtonStyle = {
            height: 48,
            backgroundColor: Color.hm_green,
            alignSelf: 'stretch',
            borderRadius: 6,
            marginLeft: 16,
            marginRight: 16,
            marginTop: 8,
            marginBottom: 8,
        }

        let btn1 = new Button();
        btn1.style = btnStyle;
        btn1.text = "列表基准测试（Scroller）";
        btn1.addEventListener('tap', (event) => {
            let pageInfo = {
                url: './scroller.js',
            };
            Navigator.openPage(pageInfo);
        })

        let btn2 = new Button();
        btn2.style = btnStyle;
        btn2.text = "列表基准测试（List）";
        btn2.addEventListener('tap', (event) => {
            let pageInfo = {
                url: './list.js',
            };
            Navigator.openPage(pageInfo);
        })

        let btn3 = new Button();
        btn3.style = btnStyle;
        btn3.text = "动画基准测试";
        btn3.addEventListener('tap', (event) => {
            let pageInfo = {
                url: './animation.js',
            };
            Navigator.openPage(pageInfo);
        })

        let btn4 = new Button();
        btn4.style = btnStyle;
        btn4.text = "拖拽基准测试";
        btn4.addEventListener('tap', (event) => {
            let pageInfo = {
                url: './drag.js',
            };
            Navigator.openPage(pageInfo);
        })

        this.appendChild(btn1);
        this.appendChild(btn2);
        this.appendChild(btn3);
        this.appendChild(btn4);


        let btn11 = new Button();
        btn11.style = btnStyle;
        btn11.text = "Tenon: 列表基准测试（Scroller）";
        btn11.addEventListener('tap', (event) => {
            let pageInfo = {
                url: './tenon/scroller.js',
            };
            Navigator.openPage(pageInfo);
        })

        let btn12 = new Button();
        btn12.style = btnStyle;
        btn12.text = "Tenon: 列表基准测试（List）";
        btn12.addEventListener('tap', (event) => {
            let pageInfo = {
                url: './tenon/list.js',
            };
            Navigator.openPage(pageInfo);
        })

        let btn13 = new Button();
        btn13.style = btnStyle;
        btn13.text = "Tenon: 动画基准测试";
        btn13.addEventListener('tap', (event) => {
            let pageInfo = {
                url: './tenon/animation.js',
            };
            Navigator.openPage(pageInfo);
        })

        let btn14 = new Button();
        btn14.style = btnStyle;
        btn14.text = "Tenon: 拖拽基准测试";
        btn14.addEventListener('tap', (event) => {
            let pageInfo = {
                url: './tenon/drag.js',
            };
            Navigator.openPage(pageInfo);
        })

        this.appendChild(btn11);
        this.appendChild(btn12);
        this.appendChild(btn13);
        this.appendChild(btn14);
    }
}

Hummer.render(new RootView());