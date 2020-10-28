import 'package:flutter/material.dart';
import 'package:frontend/pages/dashboard_page.dart';
import 'package:frontend/routes.dart';
import 'pages/dashboard_page.dart';
//import 'package:frontend/pages/profile_page.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      debugShowCheckedModeBanner: false,
      initialRoute: Dashboard.dashboardId,
      routes: routes,
    );
  }
}
