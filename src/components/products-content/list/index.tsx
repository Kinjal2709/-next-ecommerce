import useSwr from "swr";

import type { ProductTypeList } from "@/types";

import ProductItem from "../../product-item";
import ProductsLoading from "./loading";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductsContent = () => {
  // const fetcher = (url: string) => fetch(url).then((res) => res.json());
  // const { data, error } = useSwr("/api/products", fetcher);
  const [newData, setNewData] = useState<any[]>([]);

  useEffect(() => {
    console.log("API CALL HERE")
    axios.get('https://fakestoreapi.com/products')
      .then((res: any) => {
        console.log("DATA IS ", JSON.stringify(res.data))
        setNewData(res.data);
      })
  }, []);
  // if (error) return <div>Failed to load users</div>;
  return (
    <>
      {!newData && <ProductsLoading />}

      {newData && (
        <section className="products-list">
          {newData.map((item: ProductTypeList) => (
            <ProductItem
              id={item.id}
              name={item.name}
              price={item.price}
              color={item.color}
              currentPrice={item.currentPrice}
              key={item.id}
              images={item.images}
              title={item.title}
              image={item.image}
            />
          ))}
        </section>
      )}
    </>
  );
};

export default ProductsContent;
