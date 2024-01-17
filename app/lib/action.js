"use server";

import { redirect } from "next/navigation";
import { Product, User } from "./model";
import { connectDB } from "./utils";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

//import revalidatePath from 'next/cache'

//addItems
export const addUser = async (fromData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(fromData);

  try {
    connectDB();
    const salt = await bcrypt.genSalt(10);
    const hashePassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashePassword,
      phone,
      address,
      isAdmin,
      isActive,
    });
    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create user!");
  }
  redirect("/dashboard/users");
};

//import revalidatePath from 'next/cache'

export const addProduct = async (fromData) => {
  const { title, desc, price, stock, img, color, size } =
    Object.fromEntries(fromData);

  try {
    connectDB();
    // const salt = await bcrypt.genSalt(10);
    // const hashePassword = await bcrypt.hash(password, salt);
    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      img,
      color,
      size,
    });
    await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create product!");
  }
  redirect("/dashboard/products");
};

//delete
export const deleteProduct = async (fromData) => {
  const { id } = Object.fromEntries(fromData);

  try {
    connectDB();
    // const salt = await bcrypt.genSalt(10);
    // const hashePassword = await bcrypt.hash(password, salt);

    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete product!");
  }
  redirect("/dashboard/products");
};

export const deleteUser = async (fromData) => {
  const { id } = Object.fromEntries(fromData);

  try {
    connectDB();
    // const salt = await bcrypt.genSalt(10);
    // const hashePassword = await bcrypt.hash(password, salt);

    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete user!");
  }
  redirect("/dashboard/users");
};

//update
export const updateUser = async (fromData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(fromData);

  try {
    connectDB();
    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );
    await User.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update user!");
  }
  redirect("/dashboard/users");
};

export const updateProduct = async (fromData) => {
  const { id, title, desc, price, stock, img, color, size } =
    Object.fromEntries(fromData);

  try {
    connectDB();
    const updateFields = {
      title,
      desc,
      price,
      stock,
      img,
      color,
      size,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );
    await Product.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update product!");
  }
  redirect("/dashboard/products");
};
//----------------------------------------------------
//login

export const authenticate = async (formData) => {
  const { username, password } = Object.fromEntries(formData);
  //console.log(formData);
  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);
    throw err;
  }
  //redirect("/dashboard"); //manually redirect
};
//
// };
