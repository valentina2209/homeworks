import CartItemCard from './CartItemCard';
import { CartIncreaseButton, CartDecreaseButton, CartRemoveButton } from '@/features/cart';

export function CartItemCardWithActions({ item, productId, userId }) {
    return (
        <CartItemCard item={item}>
            <div className="flex items-center gap-2">
                <CartDecreaseButton userId={userId} productId={productId} />
                <span className="font-medium px-2">{item.quantity || 1}</span>
                <CartIncreaseButton
                    userId={userId}
                    productId={productId}
                    product={item}
                />
                <CartRemoveButton userId={userId} productId={productId} />
            </div>
        </CartItemCard>
    );
}