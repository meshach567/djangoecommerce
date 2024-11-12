import 'dart:convert';
import 'package:http/http.dart' as http;

class ApiService {
  static const String baseUrl = 'http://localhost:8000/api';

  static Future<dynamic> getRequest(String endpoint) async {
    final response = await http.get(Uri.parse('$baseUrl/$endpoint'));
    return jsonDecode(response.body);
  }
}
