import 'package:flutter/material.dart';
import 'package:flutter_app/animation.dart';
import 'package:flutter_app/scroller.dart';
import 'package:flutter_app/list.dart';
import 'package:flutter_app/drag.dart';

class HomeApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Performance',
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
      home: MyHomePage(title: 'Flutter Performance'),
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

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    void onScrollerClick() {
      Navigator.push(context, MaterialPageRoute<void>(
        builder: (BuildContext context) {
          return ScrollerApp();
        },
      ));
    }

    void onListClick() {
      Navigator.push(context, MaterialPageRoute<void>(
        builder: (BuildContext context) {
          return ListApp();
        },
      ));
    }

    void onAnimClick() {
      // Navigator.pushNamed(context, '/a');
      Navigator.push(context, MaterialPageRoute<void>(
        builder: (BuildContext context) {
          return AnimApp();
        },
      ));
    }

    void onDragClick() {
      Navigator.push(context, MaterialPageRoute<void>(
        builder: (BuildContext context) {
          return DragApp();
        },
      ));
    }

    Row buildItemRow(String label, Function onTap) {
      return Row(
        mainAxisSize: MainAxisSize.min,
        mainAxisAlignment: MainAxisAlignment.start,
        children: [
          new Expanded(
            child: GestureDetector(
              onTap: onTap,
              child: Container(
                alignment: Alignment.center,
                height: 48,
                margin: EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
                decoration: new BoxDecoration(
                  color: Color(0xFF15D0B4),
                  borderRadius: new BorderRadius.circular((6.0)),
                ),
                child: Text(
                  label,
                  style: TextStyle(
                    fontSize: 12.0,
                    fontWeight: FontWeight.w400,
                    color: Colors.black87,
                  ),
                ),
              ),
            ),
          )
        ],
      );
    }

    return Scaffold(
      appBar: AppBar(
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Text(widget.title),
      ),
      body: Container(
        padding: EdgeInsets.symmetric(vertical: 8.0),
        child: Column(
          // Center is a layout widget. It takes a single child and positions it
          // in the middle of the parent.
          children: <Widget>[
            buildItemRow('列表基准测试（Scroller）', onScrollerClick),
            buildItemRow('列表基准测试（List）', onListClick),
            buildItemRow('动画基准测试', onAnimClick),
            buildItemRow('拖拽基准测试', onDragClick),
          ],
        ),
      ),
    );
  }
}
