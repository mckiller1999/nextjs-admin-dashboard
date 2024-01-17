import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/product/product.module.css";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

import { fetchProducts } from "@/app/lib/data";
import { deleteProduct } from "@/app/lib/action";

const ProductPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const { count, product } = await fetchProducts(q, page);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a Prodcut..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addBtn}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr key="">
            <td>Title</td>
            <td>Desc</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {product.map((prod) => (
            <tr key={prod.id}>
              <td>
                <div className={styles.product}>
                  <Image
                    src={prod.img || "/noproduct.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImg}
                  />
                  {prod.title}
                </div>
              </td>
              <td>{prod.desc}</td>
              <td>{prod.price}$</td>
              <td>{prod.createdAt.toString().slice(4, 16)}</td>
              <td>{prod.stock}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/${prod.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteProduct}>
                    <input type="hidden" name="id" value={prod.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default ProductPage;
