import productServices from "../services/product.service.js";

export const productList = (req, res) => {
  productServices
    .getProductList()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
};

export const getProductInfoById = async (req, res) => {
  try {
    const product = await productServices.getProductById(req.params.id);
    const quantity = await productServices.getProductQuantityAndSizeById(
      req.params.id
    );
    console.log(quantity);
    console.log(product);
    if (product) {
      const productWithQuantity = { ...product, quantity };
      res.status(200).json(productWithQuantity);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
