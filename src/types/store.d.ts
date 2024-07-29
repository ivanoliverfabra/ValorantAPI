export type FeaturedStoreV1Response = {
  status: 200;
  data: FeaturedStoreV1;
} | {
  errors: DataError<400 | 403 | 404 | 408 | 429 | 500 | 501 | 503>[];
};

export type FeaturedStoreV1 = {
  FeaturedBundle: FeaturedStoreV1BundleDetails;
};

export type FeaturedStoreV1BundleDetails = {
  Bundle: FeaturedStoreV1Bundle;
  Bundles: FeaturedStoreV1Bundle[];
};

export type FeaturedStoreV1Bundle = {
  ID: string;
  DataAssetID: string;
  CurrencyID: string;
  Items: FeaturedStoreV1Item[];
  Wholesaleonly: boolean;
};

export type FeaturedStoreV1Item = {
  Item: FeaturedStoreV1ItemDetails;
  CurrencyID: string;
  DiscountPercent: number;
  IsPromoItem: boolean;
};

export type FeaturedStoreV1ItemDetails = {
  ItemTypeID: string;
  ItemID: string;
  Amount: string;
};

export type FeaturedStoreV2Response = {
  status: 200;
  data: FeaturedStoreV2Bundle[];
} | {
  errors: DataError<400 | 403 | 404 | 408 | 429 | 500 | 501 | 503>[];
};

export type FeaturedStoreV2Bundle = {
  bundle_uuid: string;
  bundle_price: number;
  whole_sale_only: boolean;
  expires_at: string;
  items: FeaturedStoreV2Item[];
};

export type FeaturedStoreV2Item = {
  uuid: string;
  name: string;
  image: string;
  type: string;
  discount_percent: number;
  promo_item: boolean;
};

export type StoreOffersV1Response = {
  status: 200;
  data: {
    Offers: StoreOffersV1Offer[];
    UpgradeCurrencyOffers: StoreOffersV1UpgradeCurrencyOffer[];
  };
} | {
  errors: DataError<400 | 403 | 404 | 408 | 429 | 500 | 501 | 503>[];
};

export type StoreOffersV1Offer = {
  OfferID: string;
  IsDirectPurchase: number;
  StartDate: string;
  Cost: {
    [key: string]: number;
  };
  Rewards: StoreOffersV1Reward[];
};

export type StoreOffersV1Reward = {
  ItemTypeID: string;
  ItemID: string;
  Quantity: number;
};

export type StoreOffersV1UpgradeCurrencyOffer = {
  OfferID: string;
  StorefrontItemID: string;
  Offer: StoreOffersV1OfferDetails;
  DiscountedPercent: number;
};

export type StoreOffersV1OfferDetails = {
  OfferID: string;
  IsDirectPurchase: number;
  StartDate: string;
  Cost: {
    [key: string]: number;
  };
  Rewards: StoreOffersV1Reward[];
};


export type StoreOffersV2Response = {
  status: 200;
  data: StoreOffersV2;
} | {
  errors: DataError<400 | 403 | 404 | 408 | 429 | 500 | 501 | 503>[];
};

export type StoreOffersV2 = {
  offers: StoreOfferV2[];
};

export type StoreOfferV2 = {
  offer_id: string;
  cost: number;
  name: string;
  icon: string;
  type: string;
  skin_id: string;
  content_tier: StoreOfferV2ContentTier;
};

export type StoreOfferV2ContentTier = {
  name: string;
  dev_name: string;
  icon: string;
};
