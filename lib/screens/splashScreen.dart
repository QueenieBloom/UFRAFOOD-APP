// ignore_for_file: file_names

import 'dart:async';
import 'dart:math';
import 'package:flutter/material.dart';
import 'auth_page.dart';

class SplashScreen extends StatelessWidget {
  const SplashScreen({Key? key}) : super(key: key);

    @override
  Widget build(BuildContext context) {
    Future.delayed(const Duration(seconds: 4), () {
      // Navegue para a próxima tela após o atraso de 2 segundos
      Navigator.of(context).pushReplacement(MaterialPageRoute(builder: (_) => const AuthPage()));
    });

    return Scaffold(
      body: Container(
        width: MediaQuery.of(context).size.width,
        height: MediaQuery.of(context).size.height,
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topLeft, // Começa no canto superior esquerdo
            end: Alignment.bottomRight, // Termina no canto inferior direito
            transform:
                GradientRotation(-100 * (pi / 180)), // -45 graus em radianos
            colors: [
              Color.fromARGB(255, 97, 245, 102),
              Color(0xFFC0FF72),
              Color.fromARGB(255, 124, 224, 2),                          
            ],
          ),
        ),
        child: Center(
          child:
              Image.asset("assets/images/logo.png"), // caminho para a sua logo
        ),
      ),
    );
  }
}

@override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: Future.delayed(const Duration(seconds: 2)), // Atraso de 2 segundos
      builder: (context, snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          // Enquanto estiver esperando, continue exibindo a SplashScreen
          return const SplashScreen();
        } else {
          // Quando o atraso terminar, navegue para a próxima tela (AuthPage)
          return const AuthPage();
        }
      },
    );
  }
