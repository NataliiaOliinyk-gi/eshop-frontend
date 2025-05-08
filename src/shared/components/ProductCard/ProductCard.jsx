/** @jsxImportSource @emotion/react */

import { AddToCartIcon } from "../icons";

import {
    productCardWrapperStyle,
    productCardImageWrapperStyle,
    productCardImageStyle,
    productCardTitleStyle,
    productCardPriceNameStyle,
    productCardPriceStyle,
    productCardActionsStyle,
    productCardAddToCartIconStyle
} from "./styles"

const ProductCard = ({ id, image, name, price, addToCart }) => {
    return (
        <div css={productCardWrapperStyle}>
            <div css={productCardImageWrapperStyle}>
                <img
                    css={productCardImageStyle}
                    src={image}
                    alt={name}
                />
            </div>
            <p css={productCardTitleStyle}>{name}</p>
            <div css={productCardActionsStyle}>
                <div>
                    <span css={productCardPriceNameStyle}>Цена:</span>
                    <span css={productCardPriceStyle}>{price} €</span>
                </div>
                <span css={productCardAddToCartIconStyle} onClick={() => addToCart(id)}><AddToCartIcon /></span>
            </div>
        </div>
    );
};

export default ProductCard;