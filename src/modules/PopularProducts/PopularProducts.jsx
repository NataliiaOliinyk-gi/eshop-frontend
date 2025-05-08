/** @jsxImportSource @emotion/react */

import Container from "../layout/Container/Container";
import Loader from "../../shared/components/Loader/Loader";
import LoadingError from "../../shared/components/LoadingError/LoadingError";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import ProductCard from "../../shared/components/ProductCard/ProductCard";

import useFetch from "../../shared/hooks/useFetch";

import { getPopularProducts } from "../../shared/api/products-api";

import { popularProductsStyle, productListStyle } from './styles'

const PopularProducts = () => {

    const { data: products, loading, error } = useFetch({
        request: getPopularProducts,
        initialData: [],
    });

    const elements = products.map((item) => (
        <ProductCard key={item._id} {...item} />
    ));

    return (
        <div css={popularProductsStyle}>
            <Container>
                <SectionTitle title="Товары" />
                <Loader loading={loading} />
                {error && <LoadingError>{error}</LoadingError>}
                {Boolean(products.length) && (
                    <div css={productListStyle}>{elements}</div>
                )}
            </Container>
        </div>
    );
};

export default PopularProducts;