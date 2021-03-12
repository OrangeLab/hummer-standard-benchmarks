//
//  ViewController.m
//  iOS
//
//  Created by didi on 2021/3/11.
//

#import "ViewController.h"
#import <WeexSDK.h>

@interface ViewController ()

@property (nonatomic, strong) UIView *weexView;
@property (nonatomic, strong) WXSDKInstance *instance;
@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    _instance = [[WXSDKInstance alloc] init];
    _instance.viewController = self;
    _instance.frame = self.view.frame;
    __weak typeof(self) weakSelf = self;
    _instance.onCreate = ^(UIView *view) {
        [weakSelf.weexView removeFromSuperview];
        weakSelf.weexView = view;
        [weakSelf.view addSubview:view];
    };
    _instance.onFailed = ^(NSError *error) {
        //process failure, you could open an h5 web page instead or just show the error.
    };
    _instance.renderFinish = ^ (UIView *view) {
        //process renderFinish
        NSLog(@"######## renderFinish ");
    };
    NSURL *url = [[NSBundle mainBundle] URLForResource:@"components/drag" withExtension:@"js"];
    [_instance renderWithURL:url options:@{@"bundleUrl":[url absoluteString]} data:nil];
}


@end
