import styles from "./transaction.module.css";
import Image from "next/image";
const Transaction = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transaction</h2>
      <table className={styles.table}>
        <thead>
          <tr key="">
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr key="">
            <td>
              <div className={styles.user}>
                <Image
                  src={"/noavatar.png"}
                  alt=""
                  width={50}
                  height={50}
                  className={styles.userImage}
                />
                Hoang Le
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.peding}`}>
                Pending
              </span>
            </td>
            <td>15.01.2024</td>
            <td>$3.200</td>
          </tr>
          <tr key="">
            <td>
              <div className={styles.user}>
                <Image
                  src={"/noavatar.png"}
                  alt=""
                  width={50}
                  height={50}
                  className={styles.userImage}
                />
                Hoang Le
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>15.01.2024</td>
            <td>$3.200</td>
          </tr>
          <tr key="">
            <td>
              <div className={styles.user}>
                <Image
                  src={"/noavatar.png"}
                  alt=""
                  width={50}
                  height={50}
                  className={styles.userImage}
                />
                Hoang Le
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>15.01.2024</td>
            <td>$3.200</td>
          </tr>
          <tr key="">
            <td>
              <div className={styles.user}>
                <Image
                  src={"/noavatar.png"}
                  alt=""
                  width={50}
                  height={50}
                  className={styles.userImage}
                />
                Hoang Le
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.peding}`}>
                Pending
              </span>
            </td>
            <td>15.01.2024</td>
            <td>$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
