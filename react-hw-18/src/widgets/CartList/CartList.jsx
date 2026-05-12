import { useGetUserCartQuery } from '@/entities/cartItem/api/cartItemApi';
import { CartItemCardWithActions } from '@/entities/cartItem';
import { useTranslation } from 'react-i18next';

export default function CartList({ userId }) {
  const { t } = useTranslation();
  const { data: cart = {}, isLoading } = useGetUserCartQuery(userId);

  const items = Object.entries(cart).filter(([_, item]) => item);

  const total = items.reduce(
    (sum, [_, item]) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  if (isLoading) return <div className="p-4">{t('common.loading')}</div>;

  if (items.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        {t('cart.empty')}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {items.map(([productId, item]) => (
        <CartItemCardWithActions
          key={productId}
          item={item}
          productId={productId}
          userId={userId}
        />
      ))}

      <div className="mt-4 p-4 border-t border-gray-200 dark:border-gray-700 text-right font-bold text-lg">
        {t('cart.total')}: {total} $
      </div>
    </div>
  );
}