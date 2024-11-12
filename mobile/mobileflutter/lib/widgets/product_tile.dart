import 'package:flutter/material.dart';

class ProductTile extends StatelessWidget {
  final String productName;
  final String description;
  final double price;

  const ProductTile({
    Key? key,
    required this.productName,
    required this.description,
    required this.price,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 4,
      margin: const EdgeInsets.all(8),
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              productName,
              style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 8),
            Text(description),
            const SizedBox(height: 8),
            Text(
              '\$${price.toStringAsFixed(2)}',
              style: const TextStyle(fontSize: 16, color: Colors.green),
            ),
          ],
        ),
      ),
    );
  }
}
