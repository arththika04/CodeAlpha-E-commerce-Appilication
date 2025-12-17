import 'package:flutter/material.dart';
import 'orders_screen.dart';

class CartScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Cart")),
      body: Center(
        child: ElevatedButton(
          child: Text("Pay Now"),
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (_) => OrdersScreen()),
            );
          },
        ),
      ),
    );
  }
}
