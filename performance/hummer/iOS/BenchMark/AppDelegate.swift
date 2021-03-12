//
//  AppDelegate.swift
//  BenchMark
//
//  Created by didi on 2021/3/3.
//

import UIKit
import Hummer

@main
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // Override point for customization after application launch.
        
        Hummer.startEngine(nil);
//        let path = Bundle.main.path(forResource: "/dist/drag", ofType: "js")
        let path = Bundle.main.path(forResource: "/tenon-dist/scroller", ofType: "js")
        let file = URL.init(fileURLWithPath: path!);
        self.window = UIWindow.init(frame: UIScreen.main.bounds)
        let vc = ViewController.init(url: file.absoluteString, params: nil)
        let nav = UINavigationController.init(rootViewController: vc!);
        nav.navigationBar.isTranslucent = false;
        self.window?.rootViewController = nav
        self.window?.makeKeyAndVisible()
        return true
    }

    
    

}

