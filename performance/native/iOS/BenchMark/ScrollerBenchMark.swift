//
//  ScrollerBenchMark.swift
//  BenchMark
//
//  Created by didi on 2021/3/4.
//

import UIKit

class AnimationRowView: UIView {
    var stack:UIStackView?
    var text1:UILabel?
    var text2:UILabel?
    var text3:UILabel?
    var text4:UILabel?
    var text5:UILabel?
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        text1 = textFactory(nil,nil)
        text2 = textFactory(nil,nil)
        text3 = textFactory(nil,nil)
        text4 = textFactory(nil,nil)
        text5 = textFactory(nil,nil)

        stack = UIStackView.init(arrangedSubviews: [text1!, text2!, text3!, text4!, text5!])
        stack?.axis = .horizontal
        stack?.distribution = .equalCentering
        stack?.alignment = .center
        self.backgroundColor = .init(hexString: "#15D0B4", alpha: 0.2)
        self.addSubview(stack!)
    }
    
    convenience init(_ index:Int) {
        self.init(frame:.zero)
        setIndex(index: index)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    func setIndex(index:Int){
        
        let key = String(index);
        text1?.text = String(index);
//        text1?.layer.add(CAKeyframeAnimation.translate(), forKey: key)
        
        text2?.text = String(index);
//        text2?.layer.add(CAKeyframeAnimation.rotation(), forKey: key)

        text3?.text = String(index);
//        text3?.layer.add(CAKeyframeAnimation.scale(), forKey: key)

        text4?.text = String(index);
//        text4?.layer.add(CAKeyframeAnimation.alpha(), forKey: key)

        text5?.text = String(index);
//        text5?.layer.add(CAKeyframeAnimation.backgroundColor(), forKey: key)
    }
    

    
    override func layoutSubviews() {
        super.layoutSubviews()
        stack?.frame = self.bounds
    }
    
    
    private func textFactory(_ content:String?,_ animation:CAKeyframeAnimation?) -> UILabel {
        let text = UILabel.init()
        text.layer.backgroundColor = UIColor.init(hexString: "#15D0B4").cgColor
        text.font = .systemFont(ofSize: 16)
        text.textAlignment = .center
        text.text = content
        let width = NSLayoutConstraint.init(item: text, attribute:.width, relatedBy: .equal, toItem: nil, attribute: .width, multiplier: 0, constant: 30)
        let height = NSLayoutConstraint.init(item: text, attribute:.height, relatedBy: .equal, toItem: nil, attribute: .height, multiplier: 0, constant: 30)
        
        width.priority = .defaultHigh
        height.priority = .defaultHigh

        text.addConstraint(width)
        text.addConstraint(height)
        text.translatesAutoresizingMaskIntoConstraints = false;
        if let animation = animation {
            text.layer.add(animation, forKey: content)
        }
        return text
    }
}

class ScrollerBenchMark: UIViewController {
    let scroller = UIScrollView.init()
    
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        scroller.frame = self.view.bounds
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        let timeInterval: TimeInterval = Date().timeIntervalSince1970
        let millisecond = CLongLong(round(timeInterval*1000))
        print("####### end ######## %ld",millisecond)
    }
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
        let width = self.view.frame.size.width
        scroller.contentSize = .init(width: width-8, height: 500*48 + 500*8)
        
        let stack = UIStackView.init()
        stack.axis = .vertical
        stack.distribution = .fillEqually
        stack.frame = CGRect.init(x: 16, y: 0, width:self.view.frame.size.width-32, height: 500*48 + 500*8)
        stack.spacing = 8
        self.view.backgroundColor = .white
        self.view.addSubview(scroller)
        scroller.addSubview(stack)

        for index in 0...500 {
            
            let row = AnimationRowView.init(index);
            stack.addArrangedSubview(row)
        }
    }
}


class ListBenchMark: UIViewController {
    let list = UITableView.init(frame: .zero, style: .plain)
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        let timeInterval: TimeInterval = Date().timeIntervalSince1970
        let millisecond = CLongLong(round(timeInterval*1000))
        print("####### end ######## %ld",millisecond)
    }
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        list.frame = self.view.bounds
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        
        self.view.backgroundColor = .white
        list.dataSource = self        
        list.register(ListRowCell.self, forCellReuseIdentifier: "cell")
        self.view.addSubview(list)
    }
}

extension ListBenchMark : UITableViewDataSource {
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 500
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath) as! ListRowCell
        cell.setIndex(index: indexPath.row)
        return cell
    }
    
    private func tableView(_ tableView: UITableView, heightForHeaderInSection section: Int) -> CGFloat {
        return 8
    }
    
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 48
    }
    
}

class ListRowCell: UITableViewCell {
    var view : AnimationRowView?
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        view = AnimationRowView.init()
        self.contentView.addSubview(view!)
    }
    
    func setIndex(index:Int){
        view?.setIndex(index: index)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func layoutSubviews() {
        super.layoutSubviews()
        view?.frame = self.contentView.bounds
    }
}
