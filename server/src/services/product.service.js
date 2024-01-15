import DatabaseService from "./database.services.js";

class ProductServices {
  constructor() {
    this.sql_getProductList =
      "select product_id,name,price,image_path from products";
    this.sql_getProductById = "select * from products where product_id = ?";
  }
  async getProductList() {
    const result = await DatabaseService.query(this.sql_getProductList);
    return result;
  }
  async getProductById(id) {
    const result = await DatabaseService.query(this.sql_getProductById, [id]);
    console.log(result.length);
    return result[0] ? result[0] : null;
  }
  async getProductQuantityAndSizeById(id) {
    const sql = "select size,quantity from storage where product_id = ?";
    const result = await DatabaseService.query(sql, [id]);
    return result ? result : null;
  }
}
const productServices = new ProductServices();

export default productServices;
