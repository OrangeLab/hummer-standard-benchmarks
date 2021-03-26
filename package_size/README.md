## 简介
此目录下包含了五种不同的 APP 开发框架的工程项目（**Native**、**Hummer**、**Tenon**、**ReactNative** 和 **Flutter**），在单架构模式下（**Android: armeabi-v7a**、**iOS: arm64**），分别对这五个工程项目编译生成的 **Release** 包做了包大小的对比，以下是具体测试版本和测试结果。

## 测试版本
- **Hummer(Android):** 'com.didi.hummer:hummer:0.3.18'
- **Hummer(iOS):** 0.2.3
- **ReactNative:** 'com.facebook.react:react-native:0.63.4'
- **Weex:** 'com.taobao.android:weex_sdk:0.26.0'
- **Flutter:** 1.22.6

## 测试结果
| 平台 | Native | Hummer | ReactNative | Weex | Flutter |
| ---- | ---- | ---- | ---- | ---- | ---- |
| Android | 2.5M | 4.2M | 8.5M | 6.9M | 5.2M |
| iOS | 0.097M | 0.697M | 1.2M | 0.997M | 5.9M |


