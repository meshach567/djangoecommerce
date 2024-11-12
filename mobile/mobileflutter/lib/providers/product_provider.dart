import 'package:flutter/material.dart';
import '../models/product.dart';
import '../services/api_service.dart';

class ProductProvider with ChangeNotifier {
  List<Product> _products = [];

  List<Product> get products => _products;

  Future<void> fetchProducts() async {
    final data = await ApiService.getRequest('products');
    _products = (data as List).map((json) => Product.fromJson(json)).toList();
    notifyListeners();
  }
}
