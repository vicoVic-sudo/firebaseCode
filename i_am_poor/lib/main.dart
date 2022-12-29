import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    home: Scaffold(
      backgroundColor: Colors.indigo[200],
      appBar: AppBar(
        backgroundColor: Colors.indigo[300],
        title: Center(
          child: Text('I am poor'),
        ),
      ),
      body: Center(
        child: Image(
          image: AssetImage('assets/images/coal.png')
        )
      )
    ),
  ));
}
