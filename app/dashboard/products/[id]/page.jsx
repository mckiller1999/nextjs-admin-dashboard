import { updateProduct } from "@/app/lib/action";
import { fetchProduct } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/product/singleProduct/singleProduct.module.css";
import Image from "next/image";
const singleProductPage = async ({ params }) => {
  const { id } = params;
  const prod = await fetchProduct(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={prod.img || "/noproduct.jpg"} alt="" fill />
        </div>
        {prod.title}
      </div>

      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" value={prod.id} name="id" />
          <label for="">Title</label>
          <input type="text" name="title" placeholder={prod.title} />
          <label for="">Price</label>
          <input type="number" name="price" placeholder={prod.price} />
          <label for="">Stock</label>
          <input type="number" name="stock" placeholder={prod.stock} />
          <label for="">Color</label>
          <input type="text" name="color" placeholder={prod.color} />
          <label for="">Size</label>
          <input type="text" name="size" placeholder={prod.size} />
          <label for="">Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computers">Computers</option>
          </select>
          <label for="">Desc</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={prod.desc}
          ></textarea>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default singleProductPage;
