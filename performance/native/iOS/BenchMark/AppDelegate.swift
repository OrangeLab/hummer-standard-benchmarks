//
//  AppDelegate.swift
//  BenchMark
//
//  Created by didi on 2021/3/3.
//

import UIKit

@main
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // Override point for customization after application launch.
        
        let timeInterval: TimeInterval = Date().timeIntervalSince1970
        let millisecond = CLongLong(round(timeInterval*1000))
        print("####### start ######## %ld",millisecond)
        self.window = UIWindow.init(frame: UIScreen.main.bounds)
        let vc = DragBenchMark .init()
        let nav = UINavigationController.init(rootViewController: vc);
        nav.navigationBar.isTranslucent = false;
        self.window?.rootViewController = nav
        self.window?.makeKeyAndVisible()
        return true
    }


}

