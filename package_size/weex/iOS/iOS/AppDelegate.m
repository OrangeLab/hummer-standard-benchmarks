//
//  AppDelegate.m
//  iOS
//
//  Created by didi on 2021/3/11.
//

#import "AppDelegate.h"
#import <WeexSDK.h>

@interface AppDelegate ()

@end

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    NSLog(@"######## didFinishLaunchingWithOptions ");
    // App configuration
    [WXAppConfiguration setAppGroup:@"Your app group"];
    [WXAppConfiguration setAppName:@"Your app name"];
    [WXAppConfiguration setAppVersion:@"Your app version"];

    //Initialize WeexSDK
    [WXSDKEngine initSDKEnvironment];

    return YES;
}


#pragma mark - UISceneSession lifecycle


- (UISceneConfiguration *)application:(UIApplication *)application configurationForConnectingSceneSession:(UISceneSession *)connectingSceneSession options:(UISceneConnectionOptions *)options {
    // Called when a new scene session is being created.
    // Use this method to select a configuration to create the new scene with.
    return [[UISceneConfiguration alloc] initWithName:@"Default Configuration" sessionRole:connectingSceneSession.role];
}


- (void)application:(UIApplication *)application didDiscardSceneSessions:(NSSet<UISceneSession *> *)sceneSessions {
    // Called when the user discards a scene session.
    // If any sessions were discarded while the application was not running, this will be called shortly after application:didFinishLaunchingWithOptions.
    // Use this method to release any resources that were specific to the discarded scenes, as they will not return.
}


@end
