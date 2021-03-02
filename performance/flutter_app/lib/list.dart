import 'package:flutter/material.dart';

class ListApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'List Performance',
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
      home: MyHomePage(title: 'List Performance'),
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

  initState() {
    super.initState();
    controller = new AnimationController(
        duration: const Duration(seconds: 1), vsync: this);
    controller.repeat(reverse: true);
  }

  @override
  dispose() {
    controller.dispose();
    super.dispose();
  }

  Widget buildItem(int index) {
    return Container(
      width: 30,
      height: 30,
      color: Color(0xFF15D0B4),
      margin: EdgeInsets.symmetric(horizontal: 16.0),
      alignment: Alignment.center,
      child: Text(index.toString()),
    );
  }

  Widget buildAnimItem(int columnIndex, int itemIndex) {
    itemIndex = itemIndex % 5;
    if (itemIndex == 0) {
      return makeSlideAnim(columnIndex);
    } else if (itemIndex == 1) {
      return makeRotationAnim(columnIndex);
    } else if (itemIndex == 2) {
      return makeScaleAnim(columnIndex);
    } else if (itemIndex == 3) {
      return makeFadeAnim(columnIndex);
    } else if (itemIndex == 4) {
      return makeBackgroundColorAnim(columnIndex);
    }
    return makeSlideAnim(columnIndex);
  }

  Widget makeSlideAnim(int index) {
    return SlideTransition(
      position: Tween(begin: Offset(0.0, 0.0), end: Offset(0.6, 0.0))
          .animate(controller),
      child: buildItem(index),
    );
  }

  Widget makeRotationAnim(int index) {
    return RotationTransition(
      turns: Tween(begin: 0.0, end: 1.0).animate(controller),
      child: buildItem(index),
    );
  }

  Widget makeScaleAnim(int index) {
    return ScaleTransition(
      scale: Tween(begin: 0.5, end: 1.5).animate(controller),
      child: buildItem(index),
    );
  }

  Widget makeFadeAnim(int index) {
    return FadeTransition(
      opacity: Tween(begin: 1.0, end: 0.2).animate(controller),
      child: buildItem(index),
    );
  }

  Widget makeBackgroundColorAnim(int index) {
    return BackgroundColorAnim(
      index,
      animation: ColorTween(begin: Color(0xFF4A90E2), end: Color(0xFFF1CA19))
          .animate(controller),
    );
  }

  @override
  Widget build(BuildContext context) {
    List<String> items = List<String>.generate(1000, (i) => i.toString());

    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: ListView.builder(
        itemCount: items.length,
        itemBuilder: (context, columnIndex) {
          return Container(
            height: 48,
            color: Color(0x2215D0B4),
            margin: EdgeInsets.symmetric(horizontal: 4.0, vertical: 4.0),
            child: Row(
              children: List.generate(5, (itemIndex) {
                return buildAnimItem(columnIndex, itemIndex);
              }),
            ),
          );
        },
      ),
    );
  }
}

class BackgroundColorAnim extends AnimatedWidget {
  final int index;

  BackgroundColorAnim(this.index, {Key key, Animation<Color> animation})
      : super(key: key, listenable: animation);

  Widget build(BuildContext context) {
    final Animation<Color> animation = listenable;
    return Container(
      width: 30,
      height: 30,
      color: animation.value,
      margin: EdgeInsets.symmetric(horizontal: 16.0),
      alignment: Alignment.center,
      child: Text(index.toString()),
    );
  }
}
