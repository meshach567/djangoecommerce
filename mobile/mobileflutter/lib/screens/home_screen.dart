import 'package:flutter/material.dart';
import '../widgets/product_tile.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Product List'),
      ),
      body: ListView(
        children: [
          ProductTile(
            productName: 'Product 1',
            description: 'This is the description of Product 1',
            price: 29.99,
          ),
          ProductTile(
            productName: 'Product 2',
            description: 'This is the description of Product 2',
            price: 49.99,
          ),
          ProductTile(
            productName: 'Product 3',
            description: 'This is the description of Product 3',
            price: 19.99,
          ),
        ],
      ),
    );
  }
}
