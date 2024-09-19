import { OrdeStatus } from '@prisma/client';

export const OrderStatusList = [
  OrdeStatus.PENDING,
  OrdeStatus.CANCELLED,
  OrdeStatus.DELIVERED,
];
