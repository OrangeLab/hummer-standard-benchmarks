import 'package:flutter/material.dart';

class AnimApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Animation Performance',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primarySwatch: Colors.blue,
        // This makes the visual density adapt to the platform that you run
        // the app on. For desktop platforms, the controls will be smaller and
        // closer together (more dense) than on mobile platforms.
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: MyHomePage(title: 'Animation Performance'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage>
    with SingleTickerProviderStateMixin {
  AnimationController controller;
  AnimationController controller2;

  initState() {
    super.initState();
    controller = new AnimationController(
        duration: const Duration(seconds: 1), vsync: this);
    controller.repeat(reverse: true);
  }

  @override
  dispose() {
    controller.dispose();
    controller2.dispose();
    super.dispose();
  }

  Widget buildItem() {
    return Container(
      width: 34,
      height: 34,
      color: Color(0xFF15D0B4),
      margin: EdgeInsets.symmetric(horizontal: 6.0, vertical: 6.0),
    );
  }

  Widget buildAnimItem(index) {
    index = index % 5;
    if (index == 0) {
      return makeSlideAnim();
    } else if (index == 1) {
      return makeRotationAnim();
    } else if (index == 2) {
      return makeScaleAnim();
    } else if (index == 3) {
      return makeFadeAnim();
    } else if (index == 4) {
      return makeBackgroundColorAnim();
    }
    return makeSlideAnim();
  }

  Widget makeSlideAnim() {
    return SlideTransition(
      position: Tween(begin: Offset(0.0, 0.0), end: Offset(0.6, 0.0))
          .animate(controller),
      child: buildItem(),
    );
  }

  Widget makeRotationAnim() {
    return RotationTransition(
      turns: Tween(begin: 0.0, end: 1.0).animate(controller),
      child: buildItem(),
    );
  }

  Widget makeScaleAnim() {
    return ScaleTransition(
      scale: Tween(begin: 0.5, end: 1.5).animate(controller),
      child: buildItem(),
    );
  }

  Widget makeFadeAnim() {
    return FadeTransition(
      opacity: Tween(begin: 1.0, end: 0.2).animate(controller),
      child: buildItem(),
    );
  }

  Widget makeBackgroundColorAnim() {
    return BackgroundColorAnim(
      animation: ColorTween(begin: Color(0xFF4A90E2), end: Color(0xFFF1CA19))
          .animate(controller),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Container(
        padding: EdgeInsets.symmetric(vertical: 8.0),
        child: SingleChildScrollView(
          child: Wrap(
            children: List.generate(500, (index) {
              return buildAnimItem(index);
            }),
          ),
        ),
      ),
    );
  }
}

class BackgroundColorAnim extends AnimatedWidget {
  BackgroundColorAnim({Key key, Animation<Color> animation})
      : super(key: key, listenable: animation);

  Widget build(BuildContext context) {
    final Animation<Color> animation = listenable;
    return Container(
      width: 34,
      height: 34,
      color: animation.value,
      margin: EdgeInsets.symmetric(horizontal: 6.0, vertical: 6.0),
    );
  }
}
