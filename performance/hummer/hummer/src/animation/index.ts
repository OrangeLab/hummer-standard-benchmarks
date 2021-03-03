import { Hummer, View, Scroller, BasicAnimation, KeyframeAnimation } from '@hummer/hummer-front'
import { Color } from '../common/CommonColor'
import { BackgroundColorAnim, OpacityAnim, PositionAnim, RotationZAnim, ScaleAnim } from '../common/CommonAnim'

class RootView extends Scroller {
  constructor() {
    super();
    this.style = {
      width: '100%',
      height: '100%',
    }

    let array = new Array();
    array.push(new PositionAnim());
    array.push(new RotationZAnim());
    array.push(new ScaleAnim());
    array.push(new OpacityAnim());
    array.push(new BackgroundColorAnim());

    let layout = new View();
    layout.style = {
      width: '100%',
      height: '100%',
      flexWrap: 'wrap',
      flexDirection: 'row',
    }

    for (let i = 0; i < 1000; i++) {
      let item = new View();
      item.style = {
        width: 34,
        height: 34,
        backgroundColor: Color.hm_green,
        margin: 6,
      }
      layout.appendChild(item);

      let t = i % 5;
      item.addAnimation(array[t], "" + i);
    }

    this.appendChild(layout);
  }
}

Hummer.render(new RootView());