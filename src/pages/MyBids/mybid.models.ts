export interface MyBidInterface {
  id: number;
  bid_user: string;
  bid_product: string;
  bid_price: string;
  is_notified: boolean;
}
export interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}