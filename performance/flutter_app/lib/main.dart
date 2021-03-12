import 'package:flutter/material.dart';
import 'package:flutter_app/home.dart';
import 'package:flutter_app/scroller.dart';
import 'package:flutter_app/list.dart';
import 'package:flutter_app/animation.dart';
import 'package:flutter_app/drag.dart';

void main() {
  // runApp(HomeApp());
  runApp(MaterialApp(
    // home: HomeApp(), // becomes the route named '/'
    // home: ScrollerApp(), // becomes the route named '/'
    // home: ListApp(), // becomes the route named '/'
    // home: AnimApp(), // becomes the route named '/'
    home: DragApp(), // becomes the route named '/'
    routes: <String, WidgetBuilder>{
      '/a': (BuildContext context) => AnimApp(),
      // '/b': (BuildContext context) => AnimApp(),
      // '/b': (BuildContext context) => MyPage(title: 'page B'),
      // '/c': (BuildContext context) => MyPage(title: 'page C'),
    },
  ));
}
