// all crud operations in controller

const { Product } = require("../model/Product");

exports.createProduct = async (req, res) => {
  // ye frontend se aayegi
  const product = new Product(req.body);
  try {
    const response = await product.save();
    res.status(201).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.fetchAllProducts = async (req, res) => {
  // here we need all query string

  // filter = {"category": ["smartphone", "laptops"]}
  // sort = {_sort: "price", _order: "desc"}
  // ye frontend se aayegi

  // await query to result de deti he hame add up krna he

//   TODO: How to do sorting on the basis of the discountedPrice
  // TODO: we have to try with multiple category and brands after change in frontend
  let query = Product.find({});
  let totalProductsQuery = Product.find({});

  if (req.query.category) {
    query = query.find({ category: req.query.category });
    totalProductsQuery = totalProductsQuery.find({
      category: req.query.category,
    });
  }
  if (req.query.brand) {
    query = query.find({ brand: req.query.brand });
    totalProductsQuery = totalProductsQuery.find({ brand: req.query.brand });
  }
  if (req.query._sort && req.query._order) {
    query = query.sort({ [req.query._sort]: req.query._order });
    totalProductsQuery = totalProductsQuery.sort({
      [req.query._sort]: req.query._order,
    });
  }

  const totalDocs = await totalProductsQuery.count().exec();
  console.log({ totalDocs });

  if (req.query._page && req.query._limit) {
    const pageSize = req.query._limit;
    const page = req.query._page;
    query = query.skip(pageSize * (page - 1)).limit(pageSize);
  }

  try {
    const docs = await query.exec();
    res.set("X-Total-Count", totalDocs);
    res.status(201).json(docs);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.fetchProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateProduct = async (req, res)=>{
    const {id} = req.params;

    try {
        // we want new document to be returned
        const product = await Product.findByIdAndUpdate(id, req.body, {new:true});
        res.status(201).json(product);
      } catch (err) {
        res.status(400).json(err);
      }
}
