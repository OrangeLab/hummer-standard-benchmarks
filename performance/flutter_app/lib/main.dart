import 'package:flutter/material.dart';
import 'package:flutter_app/home.dart';
import 'package:flutter_app/animation.dart';

void main() {
  // runApp(HomeApp());
  runApp(MaterialApp(
    home: HomeApp(), // becomes the route named '/'
    routes: <String, WidgetBuilder>{
      '/a': (BuildContext context) => AnimApp(),
      // '/b': (BuildContext context) => AnimApp(),
      // '/b': (BuildContext context) => MyPage(title: 'page B'),
      // '/c': (BuildContext context) => MyPage(title: 'page C'),
    },
  ));
}
