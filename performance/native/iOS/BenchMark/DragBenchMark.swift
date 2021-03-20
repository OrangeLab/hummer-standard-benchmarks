//
//  DragBenchMark.swift
//  BenchMark
//
//  Created by didi on 2021/3/5.
//

import UIKit

class DragBenchMark: UIViewController {
    
    var dragView : UIView?
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        let timeInterval: TimeInterval = Date().timeIntervalSince1970
        let millisecond = CLongLong(round(timeInterval*1000))
        print("####### end ######## %ld",millisecond)
    }
    override func viewDidLoad() {
        
        super.viewDidLoad()
        dragView = UIView.init(frame: .init(x: 0, y: 0, width: 100, height: 100))
        dragView?.backgroundColor = .init(hexString: "#15D0B4")
        self.view.addSubview(dragView!)
        self.view.backgroundColor = .white
        
        let pan = UIPanGestureRecognizer.init(target: self, action: #selector(move(action:)))
        dragView?.addGestureRecognizer(pan)
    }
    
    
    @objc dynamic func move(action:UIGestureRecognizer){
        
        let point = action.location(in: self.view)
        dragView?.center = point
    }
    
}



class AnimationBenchMark: UIViewController {
    
    let scroller = UIScrollView.init()
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        let timeInterval: TimeInterval = Date().timeIntervalSince1970
        let millisecond = CLongLong(round(timeInterval*1000))
        print("####### end ######## %ld",millisecond)
    }
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        scroller.frame = self.view.bounds
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        let line = 500 / 8;

        // Do any additional setup after loading the view.
        let width = self.view.frame.size.width
        scroller.contentSize = .init(width: Int(width)-8, height: line*48)

        let stack = UIStackView.init()
        stack.axis = .vertical
        stack.distribution = .equalSpacing
        stack.frame = CGRect.init(x: 6, y: 0, width:Int(self.view.frame.size.width)-16, height: line*48)
        stack.spacing = 4
        self.view.backgroundColor = .white
        self.view.addSubview(scroller)
        scroller.addSubview(stack)
        
        let ans = [CAKeyframeAnimation.translate(),
                   CAKeyframeAnimation.rotation(),
                   CAKeyframeAnimation.scale(),
                   CAKeyframeAnimation.alpha(),
                   CAKeyframeAnimation.backgroundColor()]
        
        var x = 0;
        var y = 0;
        let lineSpace = 20;
        let vSpace = 10;
        var i = 0;
        let max = self.view.frame.size.width-16;
        for _ in 0...500 {
            let v = UIView.init()
            v.frame = CGRect.init(x: x, y: y, width: 34, height: 34);
            v.backgroundColor = .init(hexString: "#15D0B4")
            v.layer.add(ans[i%5], forKey: String(i))
            scroller.addSubview(v)
            i += 1;
            x += (34 + lineSpace)
            
            if x > Int(max-34) {
                x = 0;
                y += 34 + vSpace
            }
        }
        scroller.contentSize = .init(width: Int(width)-8, height: y)

//        var i = 0;
//        for _ in 0...line {
//
//            let rowContainer = UIStackView.init()
//            rowContainer.axis = .horizontal
//            rowContainer.distribution = .equalSpacing
//            rowContainer.alignment = .center
//            rowContainer.frame = CGRect.init(x: 0, y: 0, width:stack.frame.size.width, height: 40)
//            for _ in 0...7 {
//
//                let v = UIView.init()
//                v.backgroundColor = .init(hexString: "#15D0B4")
//                let width = NSLayoutConstraint.init(item: v, attribute:.width, relatedBy: .equal, toItem: nil, attribute: .width, multiplier: 0, constant: 34)
//                let height = NSLayoutConstraint.init(item: v, attribute:.height, relatedBy: .equal, toItem: nil, attribute: .height, multiplier: 0, constant: 34)
//                width.priority = .defaultHigh
//                height.priority = .defaultHigh
//                v.addConstraint(width)
//                v.addConstraint(height)
//                v.translatesAutoresizingMaskIntoConstraints = false;
//                rowContainer.addArrangedSubview(v)
//                v.layer.add(ans[i%5], forKey: String(i))
//                i += 1;
//            }
//            stack.addArrangedSubview(rowContainer)
//        }
    }
}
