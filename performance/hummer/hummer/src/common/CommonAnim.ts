
import { BasicAnimation, KeyframeAnimation } from '@hummer/hummer-front'
import { Color } from '../common/CommonColor'

export class PositionAnim extends BasicAnimation {
    constructor() {
        super("position");
        this.value = { x: 20, y: 0 };
        this.repeatCount = -1;
        this.duration = 2;
        this.easing = 'linear';
    }
}

export class RotationZAnim extends BasicAnimation {
    constructor() {
        super("rotationZ");
        this.value = 360;
        this.repeatCount = -1;
        this.duration = 2;
        this.easing = 'linear';
    }
}

export class ScaleAnim extends KeyframeAnimation {
    constructor() {
        super("scale");
        this.keyframes = [{
            percent: 0,
            value: 1,
        }, {
            percent: 0.33,
            value: 1.4,
        }, {
            percent: 0.66,
            value: 0.6,
        }, {
            percent: 1,
            value: 1,
        }];
        this.repeatCount = -1;
        this.duration = 2;
        this.easing = 'linear';
    }
}

export class OpacityAnim extends KeyframeAnimation {
    constructor() {
        super("opacity");
        this.keyframes = [{
            percent: 0,
            value: 1,
        }, {
            percent: 0.5,
            value: 0.2,
        }, {
            percent: 1,
            value: 1,
        }];
        this.repeatCount = -1;
        this.duration = 2;
        this.easing = 'linear';
    }
}

export class BackgroundColorAnim extends KeyframeAnimation {
    constructor() {
        super("backgroundColor");
        this.keyframes = [{
            percent: 0,
            value: Color.hm_blue,
        }, {
            percent: 0.33,
            value: Color.hm_purple,
        }, {
            percent: 0.66,
            value: Color.hm_orange,
        }, {
            percent: 1,
            value: Color.hm_blue,
        }];
        this.repeatCount = -1;
        this.duration = 2;
        this.easing = 'linear';
    }
}