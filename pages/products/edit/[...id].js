import Layout from "@/components/Layout";
import {useRouter} from "next/router";
import { useEffect } from "react";
import axios from "axios";
import ProductForm from "@/components/ProductForm";

export default function EditProductPage()
{
    const [productInfo, setProductInfo] = useState(null);
    const router = useRouter();
    //grab id from the router query , read from the console log
    const {id} = router.query;
    useEffect(() => {
        if (!id) {
          return;
        }
        axios.get('/api/products?id='+id).then(response => {
            console.log(response.data);
        });
      }, [id]);
    return(
        <Layout>
             <h1>Edit product</h1>
            {productInfo && (
                <ProductForm {...productInfo} />
             )}
        </Layout>
    );
}