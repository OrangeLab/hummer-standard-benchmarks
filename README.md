# Hummer Standard Benchmarks

此项目是一个用于测试各家跨端开发框架 App 各项 benchmark 数据指标的一个示例工程集合，包括了基于五种不同的跨端开发框架开发的示例 APP 工程项目（**Native**、**Hummer**、**Tenon**、**ReactNative** 和 **Flutter**），每个项目都包含了 **Android** 和 **iOS** 两端，并分别对以下两大方面做了对比基准测试：

## [一、包大小对比测试](package_size)
我们分别对基于五种不同的跨端开发框架开发的示例 APP 工程项目（**Native**、**Hummer**、**Tenon**、**ReactNative** 和 **Flutter**），在单架构模式下（**Android: armeabi-v7a**、**iOS: arm64**），编译生成的 **Release** 包做了包大小的对比测试，以下是具体测试版本和测试结果。

### 测试版本
- **Hummer(Android):** 'com.didi.hummer:hummer:0.3.18'
- **Hummer(iOS):** 0.2.3
- **ReactNative:** 'com.facebook.react:react-native:0.63.4'
- **Weex:** 'com.taobao.android:weex_sdk:0.26.0'
- **Flutter:** 1.22.6

### 测试代码
[/package_size](package_size)

### 测试结果
| 平台 | Native | Hummer | ReactNative | Weex | Flutter |
| ---- | ---- | ---- | ---- | ---- | ---- |
| Android | 2.5M | 4.2M | 8.5M | 6.9M | 5.2M |
| iOS | 0.097M | 0.697M | 1.2M | 0.997M | 5.9M |

## [二、各项性能指标基准测试](performance)
我们分别对基于五种不同的跨端开发框架开发的示例 APP 工程项目（**Native**、**Hummer**、**Tenon**、**ReactNative** 和 **Flutter**），针对四种不同的测试用例（见下面用例介绍），对四组不同维度的性能指标（**首屏渲染时间**、**CPU**、**内存和帧率**），分别做了各自的 benchmark 性能测试，并且保存了相关测试数据。

### 用例介绍
- **用例1：** 列表基准测试（Scroller）。列表中500行视图，每一行视图中包含5个子视图，测试快速滚动整个列表时的性能。
- **用例2：** 列表视图基准测试（List）。列表中1000行视图，每一行视图中包含5个子视图，测试快速滚动整个列表时的性能。
- **用例3：** 动画基准测试。500个视图，每个视图分别做5种动画中的其中1种，测试所有动画同时执行时的性能。
- **用例4：** 拖拽基准测试。测试在屏幕范围内拖拽一个视图时的性能。

### 测试机型
### Android
- **系统：** Android 10
- **型号：** vivo X27 Pro - V1836A
- **vivo ROM：** Funtouch OS_10  PD1836_A_6.20.1
#### iOS
- **系统：** iOS 14.4
- **型号：** iPhoneX

### 测试版本
- **Hummer(Android):** 'com.didi.hummer:hummer:0.3.18'
- **Hummer(iOS):** 0.2.3
- **Tenon:** 1.2.1
- **Weex:** 'com.taobao.android:weex_sdk:0.26.0'
- **ReactNative:** 'com.facebook.react:react-native:0.63.4'
- **Flutter:** 1.22.6

### 用例代码
[/performance](performance)

### 用例页面
下面是以 Native 用例为例做的页面截图，其他 App 开发框架的用例运行页面效果均与 Native 用例相同。

| 首页 | 用例1 | 用例2 | 用例3 | 用例4 |
| ---- | ---- | ---- | ---- | ---- |
| ![首页](https://pt-starimg.didistatic.com/static/starimg/img/bP1lmtIUhJ1617200790427.jpg) | ![用例1](https://pt-starimg.didistatic.com/static/starimg/img/i8mATdAG001617200903932.gif) | ![用例2](https://pt-starimg.didistatic.com/static/starimg/img/2kQHIOw60b1617200923921.gif) | ![用例3](https://pt-starimg.didistatic.com/static/starimg/img/Y7cYhEepQ61617200937730.gif) | ![用例4](https://pt-starimg.didistatic.com/static/starimg/img/zbv6NnJuSK1617200948418.gif) |

### 测试结果
无论是 Android 端还是 iOS 端，Hummer 和 Tenon 的整体表现，基本都很接近原生性能，足以见得 Hummer 的强大之处。

#### Android
| 用例1 (Scroller) | Native | Hummer | Tenon | ReactNative | Weex | Flutter |
|-|-|-|-|-|-|-|
| 页面渲染时间(首次, ms) | 741 | 1835 | 2617 | 1664 | <font color="#f00000"><b>2834</b></font> | <font color="#00a000"><b>862</b></font> |
| 页面渲染时间(非首次, ms) | 590 | 1560 | 2182 | 1508 | <font color="#f00000"><b>2579</b></font> | <font color="#00a000"><b>568</b></font> |
| CPU(%) | 7.53 | 10.72 | 10.69 | 11.7 | 10.11 | 9.94 |
| 内存(M) | 114.89 | <font color="#00a000"><b>133.45</b></font> | 137.94 | 167.8 | 178.5 | <font color="#f00000"><b>210.17</b></font> |
| 帧率(fps) | 58 | 50 | 51 | 47 | 49 | <font color="#f00000"><b>31</b></font> |

| 用例2 (List) | Native | Hummer | Tenon | ReactNative | Weex | Flutter |
|-|-|-|-|-|-|-|
| 页面渲染时间(首次, ms) | 334 | <font color="#00a000"><b>387</b></font> | 559 | 545 | <font color="#f00000"><b>3477</b></font> | 535 |
| 页面渲染时间(非首次, ms) | 170 | <font color="#00a000"><b>215</b></font> | 335 | 368 | <font color="#f00000"><b>3238</b></font> | <font color="#00a000"><b>215</b></font> |
| CPU(%) | 4.07 | <font color="#00a000"><b>4.85</b></font> | 6.85 | <font color="#f00000"><b>14.43</b></font> | 5.08 | 10.44 |
| 内存(M) | 58.14 | <font color="#00a000"><b>64.62</b></font> | 70.48 | 173.89 | <font color="#f00000"><b>224.08</b></font> | 152.38 |
| 帧率(fps) | 60 | 60 | 60 | 58 | 60 | 59 |

| 用例3 (动画) | Native | Hummer | Tenon | ReactNative | Weex | Flutter |
|-|-|-|-|-|-|-|
| 页面渲染时间(首次, ms) | 345 | 641 | 1044 | 778 | <font color="#f00000"><b>1881</b></font> | <font color="#00a000"><b>538</b></font> |
| 页面渲染时间(非首次, ms) | 195 | 385 | 730 | 636 | <font color="#f00000"><b>1394</b></font> | <font color="#00a000"><b>224</b></font> |
| CPU(%) | 14.27 | <font color="#00a000"><b>15.48</b></font> | 15.3 | <font color="#f00000"><b>33.31</b></font> | 17.22 | 18.58 |
| 内存(M) | 86.9 | <font color="#00a000"><b>88.97</b></font> | 102.53 | 118.75 | 102.56 | <font color="#f00000"><b>172.28</b></font> |
| 帧率(fps) | 30 | 30 | 30 | 31 | 29 | 30 |

| 用例4 (拖拽) | Native | Hummer | Tenon | ReactNative | Weex | Flutter |
|-|-|-|-|-|-|-|
| 页面渲染时间(首次, ms) | 253 | <font color="#00a000"><b>310</b></font> | 342 | 425 | 396 | <font color="#f00000"><b>514</b></font> |
| 页面渲染时间(非首次, ms) | 168 | <font color="#00a000"><b>175</b></font> | 183 | <font color="#f00000"><b>287</b></font> | 185 | 213 |
| CPU(%) | 3.03 | 5.19 | 6 | 7.51 | 5.96 | 6.94 |
| 内存(M) | 55.55 | <font color="#00a000"><b>63.16</b></font> | 66.5 | 102.17 | 66.57 | <font color="#f00000"><b>142.21</b></font> |
| 帧率(fps) | 60 | 60 | 59 | 60 | 60 | 60 |


#### iOS
| 用例1 (Scroller) | Native | Hummer | Tenon | ReactNative | Weex | Flutter |
|-|-|-|-|-|-|-|
| 页面渲染时间(ms) | 1727 | 1970 | 2249 | <font color="#f00000"><b>2358</b></font> | 1694 | <font color="#00a000"><b>806</b></font> |
| CPU(%) | 1.73 | 2 | 2 | 5.45 | 3.18 | <font color="#f00000"><b>8.18</b></font> |
| 内存(M) | 116 | 149 | 156.27 | <font color="#f00000"><b>177.27</b></font> | 144 | <font color="#00a000"><b>125.18</b></font> |
| 卡顿率(ms/s) | 1.667 | 1.667 | 1.668 | 1.678 | 1.668 | <font color="#00a000"><b>0</b></font> |

| 用例2 (List) | Native | Hummer | Tenon | ReactNative | Weex | Flutter |
|-|-|-|-|-|-|-|
| 页面渲染时间(ms) | 469 | <font color="#00a000"><b>545</b></font> | 684 | 975 | <font color="#f00000"><b>4141</b></font> | 608 |
| CPU(%) | 3.36 | <font color="#00a000"><b>5.64</b></font> | 5.82 | <font color="#f00000"><b>18.45</b></font> | 9.91 | 8.27 |
| 内存(M) | 9.36 | <font color="#00a000"><b>21.18</b></font> | 23.55 | 88.36 | 91.55 | 91.82 |
| 卡顿率(ms/s) | 0 | <font color="#00a000"><b>0</b></font> | 4.16 | <font color="#f00000"><b>7.59</b></font> | 3.419 | 2.902 |

| 用例3 (动画) | Native | Hummer | Tenon | ReactNative | Weex | Flutter |
|-|-|-|-|-|-|-|
| 页面渲染时间(ms) | 773 | 905 | 1131 | 1353 | <font color="#f00000"><b>1535</b></font> | <font color="#00a000"><b>655</b></font> |
| CPU(%) | 1.55 | 2 | 1.91 | <font color="#f00000"><b>30.55</b></font> | 6.73 | 8.45 |
| 内存(M) | 6 | <font color="#00a000"><b>13</b></font> | 17.27 | 26 | 56.73 | <font color="#f00000"><b>81.73</b></font> |
| 卡顿率(ms/s) | 0 | 0 | 0 | 0 | 0 | 0 |

| 用例4 (拖拽) | Native | Hummer | Tenon | ReactNative | Weex | Flutter |
|-|-|-|-|-|-|-|
| 页面渲染时间(ms) | 539 | 563 | 578 | <font color="#f00000"><b>922</b></font> | 545 | 708 |
| CPU(%) | 2 | 5.55 | 6.18 | 7.55 | 7.18 | 5 |
| 内存(M) | 5 | 10 | 12 | 14 | 16 | <font color="#f00000"><b>54</b></font> |
| 卡顿率(ms/s) | 0 | 0 | 0 | 0 | 0 | 0 |
