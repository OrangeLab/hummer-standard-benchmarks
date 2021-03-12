//
//  Animation.swift
//  BenchMark
//
//  Created by didi on 2021/3/4.
//

import UIKit

enum AnimationType:String {
    
    case translate = "transform.translation.x"
    case rotation  = "transform.rotation.z"
    case scale = "transform.scale"
    case alpha = "opacity"
    case backgroundColor = "backgroundColor"
}

extension CAKeyframeAnimation {
    
    // Hex String -> UIColor
    convenience init(type: AnimationType) {
        self.init()
        self.keyPath = type.rawValue
        self.keyTimes = [0,0.5,1]
        self.duration = 2
        self.repeatCount = MAXFLOAT
    }
    
    static func translate() -> CAKeyframeAnimation {
        let animation = CAKeyframeAnimation.init(type: .translate)
        animation.values = [0,20,0]
        return animation
    }

    static func rotation() -> CAKeyframeAnimation {
        let animation = CAKeyframeAnimation.init(type: .rotation)
        animation.values = [0,Double.pi*2,0]
        return animation
    }
    static func scale() -> CAKeyframeAnimation {
        let animation = CAKeyframeAnimation.init(type: .scale)
        animation.values = [1,1.4,0.6,1]
        animation.keyTimes = [0,0.33,0.66,1]
        return animation
    }
    static func alpha() -> CAKeyframeAnimation {
        let animation = CAKeyframeAnimation.init(type: .alpha)
        animation.values = [1,0.2,1]
        return animation
    }
    static func backgroundColor() -> CAKeyframeAnimation {
        let animation = CAKeyframeAnimation.init(type: .backgroundColor)
        animation.values = [UIColor.init(hexString: "#4A90E2").cgColor,
                            UIColor.init(hexString: "#8484FF").cgColor,
                            UIColor.init(hexString: "#F1CA19").cgColor,
                            UIColor.init(hexString: "#4A90E2").cgColor]
                            
        animation.keyTimes = [0,0.33,0.66,1]            
        return animation
    }

}
