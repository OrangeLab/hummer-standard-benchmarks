import { Hummer, View, Text, Scroller } from '@hummer/hummer-front'
import { Color } from '../common/CommonColor'
import { BackgroundColorAnim, OpacityAnim, PositionAnim, RotationZAnim, ScaleAnim } from '../common/CommonAnim'

class RootView extends View {
    constructor() {
        super();
        this.style = {
            width: '100%',
            height: '100%',
        }

        let scroller = new Scroller();
        scroller.style = {
            width: '100%',
            height: '100%',
        }

        for (let i = 0; i < 200; i++) {
            scroller.appendChild(new ItemLayout(i));
        }

        this.appendChild(scroller)
    }
}

class ItemLayout extends View {
    constructor(index) {
        super();
        this.style = {
            flexDirection: 'row',
            width: '100%',
            height: 48,
            margin: 4,
            backgroundColor: Color.hm_green + '22',
            alignItems: 'center',
        };

        let item1 = new ItemCell(index);
        let item2 = new ItemCell(index);
        let item3 = new ItemCell(index);
        let item4 = new ItemCell(index);
        let item5 = new ItemCell(index);
        item1.addAnimation(new PositionAnim(), 'item1');
        item2.addAnimation(new RotationZAnim(), 'item2');
        item3.addAnimation(new ScaleAnim(), 'item3');
        item4.addAnimation(new OpacityAnim(), 'item4');
        item5.addAnimation(new BackgroundColorAnim(), 'item5');

        this.appendChild(item1);
        this.appendChild(item2);
        this.appendChild(item3);
        this.appendChild(item4);
        this.appendChild(item5);
    }
}

class ItemCell extends Text {
    constructor(index) {
        super();
        this.text = "" + index;
        this.style = {
            width: 30,
            height: 30,
            backgroundColor: Color.hm_green,
            textAlign: 'center',
            marginLeft: 16,
            marginRight: 16,
        };
    }
}

Hummer.render(new RootView());