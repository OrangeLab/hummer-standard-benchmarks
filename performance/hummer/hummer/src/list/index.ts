import { Hummer, View, Text, List } from '@hummer/hummer-front'
import { Color } from '../common/CommonColor'
import { BackgroundColorAnim, OpacityAnim, PositionAnim, RotationZAnim, ScaleAnim } from '../common/CommonAnim'

const ITEM_COUNT = 1000;

class RootView extends View {
    constructor() {
        super();
        this.style = {
            width: '100%',
            height: '100%',
        }

        let listView = new List();
        listView.style = {
            width: '100%',
            height: '100%',
            mode: "list",
            lineSpacing: 10,
            itemSpacing: 5,
            topSpacing: 5,
            leftSpacing: 5,
            rightSpacing: 5,
            bottomSpacing: 5,
        };

        listView.onCreate = type => {
            return new ItemLayout();
        };
        listView.onUpdate = (position, cell) => {
            if (cell instanceof ItemLayout) {
                cell.refresh(position);
            }
        };

        this.appendChild(listView);

        listView.refresh(ITEM_COUNT);
    }
}

class ItemLayout extends View {
    private item1: ItemCell;
    private item2: ItemCell;
    private item3: ItemCell;
    private item4: ItemCell;
    private item5: ItemCell;

    constructor() {
        super();
        this.style = {
            flexDirection: 'row',
            width: '100%',
            height: 48,
            margin: 4,
            backgroundColor: Color.hm_green + '22',
            alignItems: 'center',
        };

        this.item1 = new ItemCell();
        this.item2 = new ItemCell();
        this.item3 = new ItemCell();
        this.item4 = new ItemCell();
        this.item5 = new ItemCell();

        this.appendChild(this.item1);
        this.appendChild(this.item2);
        this.appendChild(this.item3);
        this.appendChild(this.item4);
        this.appendChild(this.item5);
    }

    refresh(position) {
        this.item1.refresh(position);
        this.item2.refresh(position);
        this.item3.refresh(position);
        this.item4.refresh(position);
        this.item5.refresh(position);
    }
}

class ItemCell extends Text {
    constructor() {
        super();
        this.style = {
            width: 34,
            height: 34,
            backgroundColor: Color.hm_green,
            textAlign: 'center',
            marginLeft: 16,
            marginRight: 16,
        };
    }

    refresh(position) {
        this.text = position.toString();
    }
}

Hummer.render(new RootView());