// import { Schema, model, connect } from 'mongoose';

export type Inventory = {
  quantity: number;
  inStock: boolean;
};

export type Variant = {
  type: string;
  value: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: Variant[];
  inventory: Inventory;
};
