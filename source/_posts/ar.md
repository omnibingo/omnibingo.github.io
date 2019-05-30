---
title: AR、MR 设计资源导航 | v1.0     
date: 2019-04-29 20:20:24
tags: AR/MR
toc: true
thumbnail: http://cdn.1ouo1.com/kkxly.png
meta: true
---

## 前言干话

稍扯两句。2017 年春天，我和三个兄弟去青海完成[踏板车环湖](https://www.bilibili.com/video/av50051890)，全程高原急行军导致车子在行程末端的恶劣天气下出现各种问题，几乎难以前行，情况危险。最后大家摸索出一个奇怪的办法：就是不断把「坏」车换给 Bingo 骑，因为坏车到他手里，基本又能恢复运行顺畅走一阵。遂由此第一次得到了「机器对话者」的戏称。

我挺喜欢这个「戏称」的，甚至他们后面笑着用这个词来戏谑，我竟然油然而生出了自豪感...在我理解，「机器对话者」讲求能敏锐感知你眼前事件或物件的各方面状态。比如面对高原化油器踏板车熄火动力亏欠，需要根据声音、振动、运行状态来决定如何调整节气风门、怠速油门线或只是在合适时候开合适油门让车重新走热走顺；再比如面对设备故障如何通过报错、问题表现来迅速解决问题；最后对一般的事、物和人也一样，就如论语论「仁」，最基本的是先要「敏感」，才能避免「麻木不仁」。

当然，足够的学习、熟悉和练习，才能充分打开敏感力。作为即将到来的「下一个计算平台」，AR 值得我们重点关注，它也将作为这个站的一块重要部分（今后可以通过：[AR.talk2.it ](https://ar.talk2.it)快速访问）不断迭代。
<!-- more -->

## 必要提示
为了方便内容更有效查阅，建议使用右下角的![](http://cdn.1ouo1.com/xfgeu.png)目录工具快速定位阅读。

部分内容可能需要科学上网才能顺畅查看。关于科学上网就不单独成文说明了，方法不少，我们也试过很多，但终归发现「找对服务，付点小钱」可能才是最便宜的方法。

> 目前我们使用的是[枫叶主机](https://www.fenghost.io/aff.php?aff=8383)，通过[这个链接](https://www.fenghost.io/aff.php?aff=8383)进入使用，您不会有服务价格上的变化，但我们可能可以收到一点点佣金，感谢。

另外「机器对话者」中的成文内容会一贯遵照：确保准确性的前提下，能用中文说明白的（包括品牌名称）会统一使用中文的规矩。如遇到未形成公认的官方中文翻译的软硬件产品名称、短语时，则会为确保阅读体验和准确性而保留原非中文内容。

## 基础知识点

### 什么是 AR（Augmented Reality，增强现实）？
[维基百科词条](https://zh.wikipedia.org/wiki/%E6%93%B4%E5%A2%9E%E5%AF%A6%E5%A2%83)

> 简言之，就是通过摄像组件里影像的位置、角度精算加上图像分析，使得屏幕组件中的「虚拟世界」能与「现实世界」场景进行结合和交互的技术。

### 什么是 VR（Virtual Reality，虚拟现实）？
[维基百科词条](https://zh.wikipedia.org/wiki/%E8%99%9A%E6%8B%9F%E7%8E%B0%E5%AE%9E)

> 简言之，就是通过计算机模拟出一个三维虚拟世界，并且给予用户视觉等感受的模拟，让用户身临其境地，即时、无限制地沉浸式观察三维虚拟空间内的事物。并且在虚拟现实中，根据用户的位置和行为反馈，计算机将通过运算，把精准的三维虚拟世界影像传回用户，使用户产生临场感。

### 什么是 MR（Mixed Reality，混合现实）？
[维基百科词条](https://zh.wikipedia.org/wiki/%E6%B7%B7%E5%90%88%E7%8E%B0%E5%AE%9E)

> 简言之，就是结合 AR 和 VR 技术，创造出新的可视化场景和环境的技术。注意，AR 和 MR 的区分界限不明显，关系不太大，建议不必太纠结。

## 相关资源
### 各家的官方文档

[微软混合现实设计文档](https://docs.microsoft.com/en-us/windows/mixed-reality/design)

> 主要针对微软自家的 HoloLens 和沉浸式耳机设备。**这里以及后面提及的非中文文档，我们会评估一下内容决定是否亲手来做一下白话翻译。**如果有需求，也可以[邮件来 push 我们](mailto:b@talk2.it)。

[谷歌增强现实设计指南](https://designguidelines.withgoogle.com/ar-design/augmented-reality-design-guidelines/introduction.html)

> 这里有一份对于[之前一个版本的非官方翻译](http://www.woshipm.com/pd/1195054.html)，可以先看看。

[Google Glass（谷歌眼镜）设计文档](https://developers.google.com/glass/design/principles)

> 至少在民用领域，谷歌已经放弃了眼镜这条线，趁早还是仔细研读一下暂时不算过时的先驱文档吧。

[iOS 人机界面设计指南中的 AR 部分](https://developer.apple.com/design/human-interface-guidelines/ios/system-capabilities/augmented-reality/)

> 这里有一份[非官方翻译](https://zhuanlan.zhihu.com/p/29039144)，可以先看看。

[META 增强现实用户界面指南](https://metavision.com/user-interface-guidelines/)

> 主要面向 Meta2 产品。

[Google Assistant（谷歌助手）开发设计指南](https://developers.google.com/actions/design/)

> 其中的对话设计部分在[这里](https://designguidelines.withgoogle.com/conversation/)。

[微软 Fluent Design System](https://www.microsoft.com/design/fluent/)

> 对于微软的 HoloLens 和混合显示设备有较深影响。可以先看看这个[分析文](https://www.zhihu.com/question/59724483/answer/168191216)，还有[这个](https://zhuanlan.zhihu.com/p/26877591)。

[Magic Leap 空间计算技术开发设计指南](https://creator.magicleap.com/learn/guides/design-spatial-computing)

> 目前有一份非官方的中文翻译，稍后整理放出。

### 优秀的设计文章

*注意，该文章部分在后续版本中可能存在较大变更，目前内容仅供参考。意思是好文章好多，我们一边收集一边更新。*

[HoloLens 设计模式](http://8ninths.com/hololens-design-patterns/)

> 著名 AR/VR 团队 8ninths 比较早的文章，但还值得一看。

[Design Principles for Augmented Reality](https://blog.prototypr.io/design-principles-for-augmented-reality-32fb6ef8394e)

> 关于 AR 适用场景思考的文章。

[Five Ways Apple’s ARKit Will Change Your World](https://medium.com/@StrangerHQ/five-ways-apples-arkit-will-change-your-world-9ce8beb3ae46)

> 相对更具体地以 ARKit 为入口做了应用场景举例。

[Designing for Virtual Reality: designers talking about their biggest challenges](https://uxdesign.cc/designing-for-virtual-reality-interviews-ba7b5076bff)

> 两位探索在技术前沿的设计师谈 VR 设计现状、挑战和远景。

[Everything You Need to Know About AR in 5 Minutes](https://medium.com/swlh/everything-you-need-to-know-about-ar-in-5-minutes-8d33b5a8f2e5)

> AR 的过去和现状。下面两个比较重要的图单独贴出来：

![](http://cdn.1ouo1.com/7u29l.jpg)
> 「AR 行业玩家一览」

![](http://cdn.1ouo1.com/o3vb4.png)
> 「AR/VR 行业主要投资方一览」

[From Product Design to Virtual Reality](https://medium.com/google-design/from-product-design-to-virtual-reality-be46fa793e9b)

> 讲述了一些 VR 设计中遇到的基础概念和相关工具。

[Weelco — Virtual Reality app UX Design Study](https://medium.com/u-zor-media/weelco-virtual-reality-app-ux-design-study-f946e6d32e0f)

> 从一个项目负责人的角度讲述了一个 VR 上的 UI 设计案例

### 视频

[Best practices to design AR applications (Google I/O 2018](https://www.youtube.com/watch?v=bNJJCREZgVM)

> 来自 Google IO 2018。

[Rapid prototyping Google Glass - Tom Chi](https://www.youtube.com/watch?v=d5_h1VuwD6g)

> 早些时候的 Google Glass 快速原型分享。

[TED - The Dawn of the Age of Holograms - Alex Kipman](https://www.youtube.com/watch?v=jGOE8q1mH3M)

> TED 上关于 HoloLens 的未来应用畅想。

[What's New with Project Tango - Google I/O 2016](https://www.youtube.com/watch?v=yvgPrZNp4So)

> 关于 Project Tango 的特性分享。

[VR Interface Design Pre-Visualisation Methods](https://www.youtube.com/watch?v=id86HeV-Vb8&t=2s)

> 关于 VR 交互范式的探索。

[VR Design Process - Google I/O 2016](https://www.youtube.com/watch?v=-mcXAMDch7s)

> 关于 VR 新设计流程的分享。

[Daydream Labs: Lessons Learned from VR Prototyping - Google I/O 2016](https://www.youtube.com/watch?v=lGUmTQgbiAY)

> 构建 VR 原型相关的经验分享。

### 幻灯片

[Designing for Wearables](https://www.slideshare.net/slideshow/embed_code/key/pW6w6e3yBJ3WzK)

[Designing Outstanding Augmented Reality Experiences](https://www.slideshare.net/slideshow/embed_code/key/npcHXFGUAAmAPx)

[Rapid Prototyping For Augmented Reality](https://www.slideshare.net/slideshow/embed_code/key/3Ud0Op5woCitAj)

[Augmented Reality: The Next 20 Years](https://www.slideshare.net/slideshow/embed_code/key/ke6w1BQwW359UT)

[Empathic Glasses: Sharing Remote Gaze and Emotion](https://www.slideshare.net/slideshow/embed_code/key/qwbhu2z0AtgNJy)

[Building AR and VR Experiences](https://www.slideshare.net/slideshow/embed_code/key/Smu2qTm2L6Jpu)

[8ninths HoloLens Design Patterns](https://www.slideshare.net/8ninths/8ninths-hololens-design-patterns)

## 硬件产品

这里主要介绍 AR 显示设备，可能有一些是辅助交互的硬件。

### 双目（双屏）眼镜或头盔

[HoloLens](https://www.microsoft.com/zh-cn/hololens)

> HoloLens 1 已经是较为成熟的 AR 智能眼镜，完成度高。虽然视场角（FOV, Field Of View）较小，但即时定位与地图构建（SLAM, Simultaneous Localization And Mapping）很棒。内容方面支持原生的全息应用（Holographic App），拓展可支持通用 windows 平台应用（UWP, Universal Windows Platform，就是 Metro 风格的那个应用）。MWC 2019 上 HoloLens 2 发布了。

[Trimble XR10](http://go.trimble.com/XR10-Product-Interest.html)

> 由 Trimble 公司基于 HoloLens 定制的 AR 眼镜，支持头盔佩戴。

[Epson Moverio](https://epson.com/moverio-augmented-reality-smart-glasses)

> 已经迭了 3 代，硬件上屡有突破。但软件上几乎就是原生安卓（Android），操作较为不便。

[Meta](https://www.metavision.com/)

> 2015 年 2300 万美元 A 轮，2016 年 5000 万美元 B 轮。
> 从业者眼中 HoloLens、Magic Leap 的竞争者（HoloLens 微型投影机成像，Meta 光学镜片反射，Magic Leap 视网膜投影） 。

[Lumus](https://lumusvision.com/)

> 擅长做光学镜片，有几款开发版眼镜。

[Sony Smart Eye glass](https://developer.sony.com/develop/smarteyeglass-sed-e1)

> 已停产。大法目前转做 AR [解决方案](https://developer.sony.com/develop/lmx-001-holographic-waveguide-display/)。

[DAQRI](https://daqri.com/products/smart-glasses/)

> 主要面向企业用户。

[GlassUp](https://www.glassup.com/)

> 意大利的工业用途 AR 眼镜。

[联想晨星 AR 眼镜](https://www.lenovo-mr.com/)

> 目前已有 G1、G2 两代产品。

[影创科技](http://www.shadowcreator.com)

> 拥有可量产 AR 头盔的上海企业。

[宝马 MINI Augmentd Vision 眼镜](https://www.cio.com/article/2917194/bmw-does-in-car-augmented-reality.html)

> 2015 年发布后后来貌似就没啥声音了。

[微软 MR 设备](https://mixedreality.microsoftcrmportals.com/)

> 不是已有的 AR 设备，但都属于微软的 MR 平台，目前为邀请制登录，值得留意。

[Magic Leap](https://www.magicleap.com/)

> 目前已发布第一代产品 Magic Leap One。

[ROKID GLASS](https://glass.rokid.com/)

> 留个位置，到时详说。

[Magic Leap Project North Star](https://developer.leapmotion.com/northstar)

> Magic Leap 在 [YouTube](https://www.youtube.com/user/leapmotion) 上发布过一些演示该产品的 [Demo](https://www.youtube.com/watch?v=7m6J8W6Ib4w)。目前[项目](https://github.com/leapmotion/ProjectNorthStar/tree/master/Mechanical)已部分[开源](http://blog.leapmotion.com/north-star-open-source/)。

[nreal](https://www.nreal.ai)

> 小米 AIoT 开发者大会展示亮相过的国内团队太若科技的产品。

[悉见 X1](http://xiijan.com/)

> 国内北京的团队。

[Totem](http://vrvana.com/index.html)

> 成像方式是通过摄像头采集外部图像显示到内部屏幕中，已被苹果收购。

### 单目（单屏）眼镜或头盔

[Google Glass](https://developers.google.com)

> 2012 年发布，里程碑式产品。不温不火好一阵后，2017 年以企业版开发方式复活。

[Opinvent](http://www.optinvent.com/)

> 做了几款工业用单目眼镜。

[Vuzix](https://www.vuzix.com)

> 最新的 Vuzix Blase 拿了 CES2019 Innovation Award（创新奖）。

[RealWear HMT-1](https://www.realwear.com)

> 面向工业用设备的加拿大公司产品。

[联想 New Glass](http://www.lenovo-ar.com/ahss/glass_introd)

> 工业用，貌似没什么消息了已经。

[North Focals](https://www.bynorth.com/focals)

> 成像方式比较特殊，直接投影在镜片，后来购买了 Intel Vaunt AR 眼镜的相关技术。

[MAD Gaze](http://madgaze.com/)

> 香港的团队，X5 产品有内地的[视频评测](https://www.bilibili.com/video/av33626646?from=search&seid=5655967945015383697)（请怀着鼓励眼光在家长陪同下观看）

### AR 盒子

[HoloKit](https://holokit.io/)

> 纸板和手机的结合，VR 有 Cardboard，AR 有 HoloKit。

[ZapBox](https://www.zappar.com/zapbox/)

> 额外还配有耳机、遥控器等外设。

[Aryzon](https://www.aryzon.com/)

> 来自荷兰的纸盒作品。

[Mira Prism](https://www.mirareality.com/)

> 面向工业场景的（非纸质）盒子。

[Seebright](https://seebright.com)

> 第二代盒子拥有触摸控制。

[联想 Mirage AR headset](https://www.lenovo.com/us/en/jedichallenges)

> 提供了控制装置（那把光剑）和定位追踪的外设，但依然靠手机来显示和运算。

### 手机

Google Project Tango
*里程碑式的，但已被放弃的产品，会写出来，但就不附带链接了，后同。*

> Tango 由其实源于摩托罗拉移动原来的研发团队。产品有专门的传感器摄像头，定位与地图构建（SLAM）也很不错，但因为已经有了 [ARCore](https://developers.google.com/ar/)...

[iPhone X](https://www.apple.com/cn/iphone/)

> 标志性的[「动话表情」](https://support.apple.com/zh-cn/HT208190)和 [ARKit](https://developer.apple.com/arkit/)。

[华为手机（包括荣耀系）中高端产品线](https://consumer.huawei.com/cn/)

> 具备 TOF 相机，可提供骨骼跟踪、手势识别、测距[等功能](https://developer.huawei.com/consumer/cn/devservice/doc/31504)。

[高通 Extended Reality](https://www.qualcomm.com/invention/extended-reality)

> 高通推出的一整套 XR（扩展现实）解决方案。

### 投影仪

[MIT Sixth Sense（第六感）](http://www.pranavmistry.com/projects/sixthsense/)

> 本质是支持手势交互的 AR 设备，2009 年 [TED](https://www.ted.com/talks/pattie_maes_demos_the_sixth_sense/up-next) 上，创始人演示了初版项目。

[Sony Xperia Touch](https://www.sonymobile.com/global-en/products/smart-products/xperia-touch/)

> 交互体验新颖，但续航、性能还待提升的一代大法产品。

[Hololamp](http://hololamp.tech)

> 来自英国团队的产品。

[Lightform](https://lightform.com/)

> 来自三藩市团队的产品。

[网易影见](https://ar.163.com/yingjian)

> 来自网易的 AR 投影仪，支持手势交互和 3D 物体识别。

[HTC VIVE AR lamp](https://www.behance.net/gallery/76239929/HTC-VIVE-AR-lamp)

> 面向家居场景的投影灯。

### 车载 HUD（Head Up Display，抬头显示器）设备

[WayRay Navion](https://wayray.com)

> 投影在设备的透明面板上，有 AR 导航和手势控制功能。

### 交互硬件

[Leap Motion](https://www.leapmotion.com/)

> 支持多平台和硬件的流行手势交互硬件。

[Google Project Soli](https://atap.google.com/soli/)

> 专注手指的微交互，可以当做 Leap Motion 的补充。

[SMI Eye Tracking](https://www.smivision.com/)

> 专注眼球追踪设备的团队 SensoMotoric Instruments，以被苹果收购。

### 场景扫描重建设备

[Kinect](https://developer.microsoft.com/en-us/windows/kinect)

> 目前已停产。部分技术沿用到了 HoloLens、Windows Hello 生物识别等项目中。

[Azure Kinect DK](https://azure.microsoft.com/en-us/services/kinect-dk/)

> 面向开发者和企业用户的外设和开发工具包。核心传感器套件与 Hololens2 所使用的相同。

[Structure Sensor](https://structure.io/)

> 可搭配全平台使用的传感器套件。

### 只能拍摄的眼镜

[Spectacles](https://www.spectacles.com/)

> Snapchat 家的产品。

[TONOT](https://tonot.com/home)

> 跟 Spectacles 套路搓不多，跟腾讯微视有联名。


##  AR 应用场景

### 远程协作

*这类功能代表了目前 AR 设备最典型的工业使用场景。

Skype on HoloLens

> 原 Skype 在 HoloLens 上的版本，音视频通话功能外，支持实时空中绘制、调整图片等。现目前官方页面已被停止运营，转到了还在邀请筹备中的[「混合现实开发者计划」](https://mixedreality.microsoftcrmportals.com/en-US/SignIn?ReturnUrl=%2Fen-US%2F)。

[Microsoft Remote Assist](https://dynamics.microsoft.com/en-us/mixed-reality/remote-assist/)

> 与 Skype 类似，支持音视频对话外的空中标注、编辑图片。该应用已加入 [Microsoft Dynamics 365 全家桶套餐](https://dynamics.microsoft.com/en-us/)，可在 HoloLens 中下载。 

[Microsoft Layout](https://dynamics.microsoft.com/en-us/mixed-reality/layout/)

> 主要专注室内外空间设计时的协助场景，可多人实时共享空间协作。该应用已加入 [Microsoft Dynamics 365 全家桶套餐](https://dynamics.microsoft.com/en-us/)。

[Vuforia Chalk](https://chalk.vuforia.com/)

> 提供 AR 实时标注等功能的远程协助产品。

[TeamViewer Pilot](https://www.teamviewer.com/en-us/solutions/augmented-reality-remote-support/#1545045594346-6e099dd2-cfca)

> 经典协作远程控制应用 TeamViewer 也提供了 AR 产品。

### 检修和维护

*一般面向商业客户，尤以重工业为主。普遍是深入工作流定制开发，以提升效率降低风险，此类别下暂时不再多作区分说明*

[Atheer](https://www.atheerair.com/)

[Upskill](https://upskill.io/)

[Scope AR](https://www.scopear.com/)

[Ubimax](https://www.ubimax.com/en/)

[PENTAR](https://www.pentar.nl/)

### 互动营销

[支付宝 AR 平台](https://render.alipay.com/p/s/real/index)

> 超级流量入口。

[blippAR](https://www.blippar.com/)

> 来自英国的 AR 服务商。

### 影音社交

[Snapchat](https://www.snapchat.com/)

> 基于人脸检测先做了一些娱乐效果，如「吐彩虹」，目前已具备即时定位与地图构建（SLAM）、手势识别等，后期又推出[扫描（Scan）](https://techcrunch.com/2019/04/04/snapchat-scan-platform/)功能，可识别地标建筑、数学题等。

[Animoji](https://support.apple.com/en-us/HT208190)

> 苹果利用 iPhone X 设备上的深感摄像头识别用户面部信息，并匹配生成动态表情符号的功能。 

[美图秀秀](https://mt.meipai.com/)

> 图片经过人脸识别后叠加上 AR 美化效果。

[网易戏精](https://xijing.netease.com/)

> 网易旗下结合 AR 的创意短视频社区。

## AR 开发套件（Software Development Kit，SDK）

### 通用 AR 开发套件

[ARToolKit](https://github.com/artoolkit)

> 移动 AR 技术的鼻祖级开发套件。

[Vuforia](https://developer.vuforia.com/)

> 很流行的 AR 开发套件，后被高通卖给 PTC。

[Apple ARKit](https://developer.apple.com/arkit/)

> WWDC 2017 发布后，已面向 iOS 12 更新到 ARKit 2 ，支持多人共享 AR、AR 内容保存、物体检测等功能。

[Google ARCore](https://developers.google.com/ar/)

> 面向 Android 设备的新（淘汰了 Project Tango） AR 开发工具，功能对标 ARKit。

[商汤 Sense AR](https://www.sensetime.com/Service/sensear_platform.html)

> 有一定的积累，有 [SenseMoji](https://www.sensetime.com/Service/Phone_SenseMoji.html) 功能。

[网易洞见](https://ar.163.com/dongjian)
[腾讯 TAR](https://tar.qq.com/sdk)
[百度 AR](https://ar.baidu.com/)
[阿里巴巴 AR](https://open-ar.bot.tmall.com/?spm=a312e.ar_portal.0.0.46cb2416DVVvdU)

> 国内巨头们的 AR 往往游戏、内容、营销方面都有布局。

[京东天工](https://ar.jd.com/arpages/platform.html)

> 主要在电商场景结合。

[Wikitude](https://www.wikitude.com/)

> 功能领先，但在国内主流程度不及 Vuforia。

[Catchoom](https://catchoom.com)

> 专注零售领域的 AR 实现。

[Kudan](https://www.kudan.io/)

> 即时定位和地图构建（SLAM）方面做得很好，专注人工感知技术领域。

[太虚 AR](https://www.voidar.net/)

> 16 年就具备了 SLAM 能力。

[Infinity AR](https://www.infinityar.com/zh)

> 来自以色列团队的作品，2016 年被阿里巴巴投资。

[EasyAR](https://www.easyar.com/)

> 国内的开发套件，并且有基于它实现的 AR 解决方案[「视+」](http://www.sightp.com/case/)。

### 人脸 AR 开发套件

[ModiFace](http://modiface.com/)

> 针对美妆场景输出的 AR 开发套件。

[相芯科技](https://www.faceunity.com)

> 有表情生成、动态贴纸、美颜、手势识别等开发套件。

### 网页 AR

[WebXR Viewer](https://github.com/mozilla-mobile/webxr-ios)

> 基于 [ARKit](https://developer.apple.com/arkit/) 构建的，通过超链接跳转的方式实现 AR 浏览的查看器。

### 行业标准

[OpenXR](https://www.khronos.org/openxr)

> 旨在简化 AR、VR 开发，是应用覆盖更广的开放式标准。

## 设计工具

### 内容创作平台

[Vuforia Studio](https://www.ptc.com/en/products/augmented-reality/vuforia-studio)

> 面向工业企业级的设计环境。

[Lens Studio](https://lensstudio.snapchat.com/)

> 为 Snapchat 制作 AR 效果。

[Facebook Spark AR Studio](https://sparkar.facebook.com/ar-studio)

> 强调了 AR 与位置和运动跟踪的结合。另外脸书还提供了一套 [VR 原型设计模板](https://facebook.design/vr-template)。

[Amazon Sumerian](https://aws.amazon.com/cn/sumerian/)

> 突出了商业场景里虚拟人物和虚拟空间的设定。

[WakingApp AR Studio](https://www.wakingapp.com/)

> 以色列的 AR 内容快速创建平台。

[微软 3D 画图工具](https://www.microsoft.com/en-us/p/paint-3d/9nblggh5fv99?activetab=pivot:overviewtab)

> 配套的还有微软的 [3D 查看器](https://www.microsoft.com/en-us/p/3d-viewer/9nblggh42ths?activetab=pivot:overviewtab)，和 [Remix 3D](https://www.remix3d.com/discover?section=34b78f58881242e4ab611e4ab5ffaa78) 作品社区。

[wiARframe](https://www.wiarframe.com/)

> 专注服务 AR 的原型设计场景。

[抖音特效开放平台](https://effect.douyin.com/site/home)

> 制作和发布抖音系产品中的 AR 特效。

### 软件工具

[Ottifox](https://ottifox.com/)

> 创建在浏览器中运行的 VR 和 AR 原型。

[GrayBoxVR](http://grayboxvr.com/)

> 让用户在虚拟现实工作空间内，设计和开发。

[Unity 3D](https://unity.com/cn)

> 流行的 AR、VR 设备应用开发套件，也是一个专业的游戏引擎。

[Vizrt](https://www.vizrt.com/)

> 主要用于电视转播场景，可以在直播画面中叠加 AR 素材。

[Adobe After Effect](https://www.adobe.com/products/aftereffects.html)

> 强大的视频制作工具。其中的 Motion Tracking 功能可以实现 AR 效果，油管上有[相关介绍视频](https://www.youtube.com/watch?v=vIEdhlS-zYA)。

[boujou](https://www.vicon.com/products/software/boujou)

> 主流的「摄像机反求」（用于在如虚拟三维模型叠加有运动的摄像机画面中的时候）工具。

## 游戏和影视

好的游戏和影视作品在结合 AR 内容或表达未来科技时，往往会经过考究的设计，这可能会给各位的设计工作带来灵感。

### 游戏

[LevelHear](https://julianoliver.com/levelhead/)

> 空间记忆小游戏，基于 2D 识别跟踪技术。

[Fragments](https://www.microsoft.com/en-us/p/fragments/9nblggh5ggm8?activetab=pivot:overviewtab)

> 专为 HoloLens 打造的 AR 游戏，视觉效果很棒。 

[The Playroom™](https://www.playstation.com/en-us/games/the-playroom-ps4/)

> PS4 游戏主机中的一款多个 AR 游戏的合集，涉及人脸、肢体环节活动、手柄光条的识别，主要为展示 PlayStation camera 的相关功能。

[AR Games](https://www.nintendo.com/3ds/ar-cards/)

> 任天堂 3DS 掌机时代的游戏，附送有 AR 卡片作为游戏道具。

[Pokemon Go](https://www.pokemongo.com/)

> 2016 年发布以来，堪称最炙手可热的 AR 游戏。合作开发公司 Niantic 后期也开始[推出自己的 AR 平台](https://nianticlabs.com/blog/nianticrealworldplatform/)。

[Harry Potter: Wizards Unite](https://www.harrypotterwizardsunite.com/zh_hant/)

> 地理位置服务（Location Based Services，LBS）、AR、哈利波特人物结合的游戏，同样来自 Niantic。

[我的世界](https://www.minecraft.net/zh-hans/)

> 将推出 AR 版本，微软已经发了[前序视频](https://www.youtube.com/watch?v=UiX0dVXiGa8)。

[Ingress](https://www.ingress.com/)

> 基于地理位置服务的 AR 游戏，也是由 Niantic 开发。特别说明，Niantic 是谷歌内部孵化出的公司。

[看门狗](https://watchdogs.ubisoft.com/watchdogs/en-us/home/)

> 游戏界面中会叠加信息实现 AR 效果，场景还原度高。

[使命召唤：高级战争](https://www.callofduty.com/advancedwarfare)

这一期的主题在结束了「现代战争」之后，转换到了未来世界，具备 AR 等各种炫酷特效。

### 影视

[黑镜](https://www.netflix.com/sg-zh/title/70264888)

> 讲了很多表现高科技未来世界中，人的生活会受到怎样影响的独立故事。

[刀剑神域](http://www.swordart-online.net/)

> 日本动漫作品，现代的主人公进入到一款叫「SAO」的游戏中，里面的用户界面和交互值得一看。B 站中也有[片源](https://www.bilibili.com/bangumi/media/md24755609/?from=search&seid=10368825349467024884)。

[HYPER-reality](https://www.youtube.com/watch?v=YJg02ivYzSs)

> 一部短片，片中表现了 AR 技术已普及的未来世界的样子。