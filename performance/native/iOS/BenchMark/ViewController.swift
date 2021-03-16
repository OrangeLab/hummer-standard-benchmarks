//
//  ViewController.swift
//  BenchMark
//
//  Created by didi on 2021/3/3.
//

import UIKit

class ViewController: UIViewController {
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        
        let scrollerBtn  = buttonFactory(title: "列表基准测试（Scroller）", action: #selector(scrollerAction))
        let listBtn      = buttonFactory(title: "列表基准测试（List）", action: #selector(listAction))
        let animationBtn = buttonFactory(title: "动画基准测试", action: #selector(animationAction))
        let dragBtn      = buttonFactory(title: "拖拽基准测试", action: #selector(dragAction))

        let stack = UIStackView.init(arrangedSubviews: [scrollerBtn,listBtn,animationBtn,dragBtn])
        stack.axis = .vertical
        stack.distribution = .fillEqually
        stack.frame = .init(x: 16, y: 16, width:self.view.frame.size.width-32, height: 240)
        stack.spacing = 16
        self.view.backgroundColor = .white
        self.view.addSubview(stack)
    }

    @objc func scrollerAction() {
        let nextVC = ScrollerBenchMark.init()
        self.navigationController?.pushViewController(nextVC, animated: true)
    }
    @objc func listAction() {
        let nextVC = ListBenchMark.init()
        self.navigationController?.pushViewController(nextVC, animated: true)
    }
    @objc func animationAction() {        
        let nextVC = AnimationBenchMark.init()
        self.navigationController?.pushViewController(nextVC, animated: true)

    }
    @objc func dragAction() {
        let nextVC = DragBenchMark.init()
        self.navigationController?.pushViewController(nextVC, animated: true)        
    }
    
    func buttonFactory(title:String, action:Selector) ->  UIButton{
        let btn = UIButton.init(type: .custom)
        btn.backgroundColor = .init(hexString: "#15D0B4")
        btn.addTarget(self, action: action, for: .touchUpInside)
        btn.setTitle(title, for: .normal)
        btn.layer.cornerRadius = 6
        btn.layer.masksToBounds = true
        return btn
    }

}

