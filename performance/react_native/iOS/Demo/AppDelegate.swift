//
//  AppDelegate.swift
//  Demo
//
//  Created by didi on 2021/1/8.
//

import UIKit
import React

@main
class AppDelegate: UIResponder, UIApplicationDelegate {


    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // Override point for customization after application launch.

        self.window = UIWindow.init(frame: UIScreen.main.bounds)
        let vc = ViewController.init()
        let path = Bundle.main.path(forResource: "main", ofType: "jsbundle")
        let rctView:RCTRootView = .init(bundleURL: URL.init(string: path!)!, moduleName: "AwesomeProject", initialProperties: nil, launchOptions: nil)
        vc.view = rctView
        self.window?.rootViewController = vc
        self.window?.makeKeyAndVisible()
        return true
    }



}

