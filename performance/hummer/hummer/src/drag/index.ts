import { Hummer, View, PanEvent } from '@hummer/hummer-front'
import { Color } from '../common/CommonColor'

class RootView extends View {
    constructor() {
        super();
        this.style = {
            width: '100%',
            height: '100%',
        }

        let v = new View();
        v.style = {
            position: 'absolute',
            width: 100,
            height: 100,
            backgroundColor: Color.hm_green,
        }

        let offsetX = 0;
        let offsetY = 0;

        v.addEventListener('pan', (event: PanEvent) => {
            if (event.state == 2) {
                offsetX += event.translation.deltaX;
                offsetY += event.translation.deltaY;

                v.style = {
                    left: offsetX,
                    top: offsetY,
                }
            }
        })

        this.appendChild(v);
    }
}

Hummer.render(new RootView());
