export const FetchproductDataAsync = async (formdata) => {
  let data = new FormData();
  data.append(formdata.key, formdata.value);
  try {
    const AllEmpData = await fetch("http://localhost/vms_back/index.php", {
      method: "POST",
      headers: {},
      body: data,
    })
      .then((response) => response.json())
      .then((dat) => dat);
    return AllEmpData;
  } catch (error) {
    alert(error);
  }
};

export const FetchProductById = async (productid) => {
  console.log(productid);
  let formdata = new FormData();
  const action = { key: "REQUEST", value: "FETCH_PRODUCT_BY_ID" };
  formdata.append(action.key, action.value);
  formdata.append("product_id", productid);

  try {
    const Data = await fetch("http://localhost/ecom-back/server.php", {
      method: "POST",
      headers: {},
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => data);
    return Data;
  } catch (error) {
    throw new Error(error);
  }
};

export const UpdateproductDataWithId = async (productData) => {
  let formdata = new FormData();
  const action = { key: "ACTION", value: "UPDATE_PRODUCT_BY_ID" };
  formdata.append(action.key, action.value);

  formdata.append("product_category_id", productData.productCategoryID);
  formdata.append("product_vendor_id", productData.productVendorID);
  formdata.append("product_vendor_name", productData.productVendorName);
  formdata.append("product_description", productData.productDescription);
  formdata.append("product_price", productData.productPrice);
  formdata.append("product_name", productData.productName);
  formdata.append("date_Added", productData.dateAdded);
  formdata.append("product_units", productData.productUnits);
  formdata.append("product_tags", productData.productTags);
  formdata.append("product_image", productData.productImage);
  formdata.append("product_id", productData.productID);
  productData.newImg
    ? formdata.append("new_img", "true")
    : formdata.append("new_img", "false");
  try {
    const Data = await fetch("http://localhost/ecom-back/server.php", {
      method: "POST",
      headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json",
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => data);

    return Data;
  } catch (error) {
    alert(error);
  }
};
export const CreateNewProduct = async (productData) => {
  console.log(productData);
  let formdata = new FormData();
  const action = { key: "REQUEST", value: "ADD_NEW_PRODUCT" };
  formdata.append(action.key, action.value);

  formdata.append("product_category_id", productData.productCategoryID);
  formdata.append("product_category_name", productData.productCategoryName);
  formdata.append("product_vendor_id", productData.productVendorID);
  formdata.append("product_vendor_name", productData.vendorName);
  formdata.append("product_description", productData.productDescription);
  formdata.append("product_price", productData.productPrice);
  formdata.append("product_name", productData.productName);
  formdata.append("date_Added", productData.dateAdded);
  formdata.append("product_units", productData.productUnits);
  formdata.append("product_tags", productData.productTags);
  formdata.append("product_image", productData.productImage);
  // formdata.append("vendor_id", productData.vendorName);

  try {
    const Data = await fetch("http://localhost/ecom-back/server.php", {
      method: "POST",
      headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json",
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => data);

    return Data;
  } catch (error) {
    throw new Error(error);
  }
};

export const CreateNewvendor = async (vendorData) => {
  console.log(vendorData);
  let formdata = new FormData();
  const action = { key: "REQUEST", value: "ADD_NEW_VENDOR" };
  formdata.append(action.key, action.value);

  formdata.append("vendor_category_id", vendorData.vendorCategoryID);
  formdata.append("vendor_description", vendorData.vendorDescription);
  formdata.append("vendor_name", vendorData.vendorName);
  formdata.append("vendor_tags", vendorData.vendorTags);
  formdata.append("date_Added", vendorData.dateAdded);
  formdata.append("vendor_image", vendorData.vendorImage);
  formdata.append("vendor_contact", vendorData.vendorContact);
  formdata.append("vendor_email", vendorData.vendorEmail);
  formdata.append("vendor_address", vendorData.vendorAddress);
  formdata.append("vendor_category", vendorData.vendorCategory);

  // formdata.append("vendor_id", productData.vendorName);

  try {
    const Data = await fetch("http://localhost/ecom-back/server.php", {
      method: "POST",
      headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json",
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => data);

    console.log(Data);

    return Data;
  } catch (error) {
    throw new Error(error);
  }
};
export const Updatevendor = async (vendorData) => {
  console.log(vendorData);
  let formdata = new FormData();
  const action = { key: "REQUEST", value: "UPDATE_VENDOR" };
  formdata.append(action.key, action.value);

  formdata.append("vendor_category_id", vendorData.vendorCategoryID);
  formdata.append("vendor_description", vendorData.vendorDescription);
  formdata.append("vendor_name", vendorData.vendorName);
  formdata.append("vendor_tags", vendorData.vendorTags);
  formdata.append("date_Added", vendorData.dateAdded);
  formdata.append("vendor_image", vendorData.vendorImage);
  formdata.append("vendor_contact", vendorData.vendorContact);
  formdata.append("vendor_email", vendorData.vendorEmail);
  formdata.append("vendor_address", vendorData.vendorAddress);
  formdata.append("vendor_category", vendorData.vendorCategory);
  formdata.append("Vendor_id", vendorData.VendorID);
  vendorData.newImg
    ? formdata.append("new_img", "true")
    : formdata.append("new_img", "false");
  // formdata.append("vendor_id", productData.vendorName);

  try {
    const Data = await fetch("http://localhost/ecom-back/server.php", {
      method: "POST",
      headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json",
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => data);

    console.log(Data);

    return Data;
  } catch (error) {
    throw new Error(error);
  }
};
export const CreateNewCategory = async (categoryData) => {
  console.log(categoryData);
  let formdata = new FormData();
  const action = { key: "REQUEST", value: "ADD_NEW_CATEGORY" };
  formdata.append(action.key, action.value);

  formdata.append("category_description", categoryData.categoryDescription);
  formdata.append("category_name", categoryData.categoryName);
  formdata.append("date_added", categoryData.dateAdded);

  // formdata.append("vendor_id", productData.vendorName);

  try {
    const Data = await fetch("http://localhost/ecom-back/server.php", {
      method: "POST",
      headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json",
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => data);

    console.log(Data);

    return Data;
  } catch (error) {
    throw new Error(error);
  }
};
export const FetchAllVendors = async () => {
  let formdata = new FormData();
  const action = { key: "REQUEST", value: "FETCH_ALL_VENDORS" };
  formdata.append(action.key, action.value);

  // formdata.append("vendor_id", productData.vendorName);

  try {
    const Data = await fetch("http://localhost/ecom-back/server.php", {
      method: "POST",
      headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json",
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => data);

    console.log(Data);

    return Data;
  } catch (error) {
    throw new Error(error);
    console.log(error);
  }
};

export const FetchVendorById = async (vendorid) => {
  let formdata = new FormData();
  const action = { key: "REQUEST", value: "FETCH_VENDORS_BY_ID" };
  formdata.append(action.key, action.value);
  formdata.append("vendor_id", vendorid);

  try {
    const Data = await fetch("http://localhost/ecom-back/server.php", {
      method: "POST",
      headers: {},
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => data);
    return Data;
  } catch (error) {
    throw new Error(error);
  }
};

export const FetchAllCategories = async () => {
  let formdata = new FormData();
  const action = { key: "REQUEST", value: "FETCH_ALL_CATEGORIES" };
  formdata.append(action.key, action.value);

  // formdata.append("vendor_id", productData.vendorName);

  try {
    const Data = await fetch("http://localhost/ecom-back/server.php", {
      method: "POST",
      headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json",
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => data);

    console.log(Data);

    return Data;
  } catch (error) {
    throw new Error(error);
  }
};
export const FetchAllProducts = async () => {
  let formdata = new FormData();
  const action = { key: "REQUEST", value: "FETCH_ALL_PRODUCTS" };
  formdata.append(action.key, action.value);

  // formdata.append("vendor_id", productData.vendorName);

  try {
    const Data = await fetch("http://localhost/ecom-back/server.php", {
      method: "POST",
      headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json",
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => data);

    console.log(Data);

    return Data;
  } catch (error) {
    throw new Error(error);
  }
};
export const FetchProductsByCategory = async (categoryId) => {
  let formdata = new FormData();
  formdata.append("category_id", categoryId);

  const action = { key: "REQUEST", value: "FETCH_PRODUCTS_BY_CATEGORY_ID" };
  formdata.append(action.key, action.value);

  try {
    const Data = await fetch("http://localhost/ecom-back/server.php", {
      method: "POST",
      headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json",
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => data);

    console.log(Data);

    return Data;
  } catch (error) {
    throw new Error(error);
  }
};
