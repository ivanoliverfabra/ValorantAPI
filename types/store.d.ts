type FeaturedStoreV1Response = {
  status: 200;
  data: FeaturedStoreV1;
} | {
  errors: DataError<400 | 403 | 404 | 408 | 429 | 500 | 501 | 503>[];
};

type FeaturedStoreV1 = {
  FeaturedBundle: FeaturedStoreV1BundleDetails;
};

type FeaturedStoreV1BundleDetails = {
  Bundle: FeaturedStoreV1Bundle;
  Bundles: FeaturedStoreV1Bundle[];
};

type FeaturedStoreV1Bundle = {
  ID: string;
  DataAssetID: string;
  CurrencyID: string;
  Items: FeaturedStoreV1Item[];
  Wholesaleonly: boolean;
};

type FeaturedStoreV1Item = {
  Item: FeaturedStoreV1ItemDetails;
  CurrencyID: string;
  DiscountPercent: number;
  IsPromoItem: boolean;
};

type FeaturedStoreV1ItemDetails = {
  ItemTypeID: string;
  ItemID: string;
  Amount: string;
};

type FeaturedStoreV2Response = {
  status: 200;
  data: FeaturedStoreV2Bundle[];
} | {
  errors: DataError<400 | 403 | 404 | 408 | 429 | 500 | 501 | 503>[];
};

type FeaturedStoreV2Bundle = {
  bundle_uuid: string;
  bundle_price: number;
  whole_sale_only: boolean;
  expires_at: string;
  items: FeaturedStoreV2Item[];
};

type FeaturedStoreV2Item = {
  uuid: string;
  name: string;
  image: string;
  type: string;
  discount_percent: number;
  promo_item: boolean;
};

type StoreOffersV1Response = {
  status: 200;
  data: {
    Offers: StoreOffersV1Offer[];
    UpgradeCurrencyOffers: StoreOffersV1UpgradeCurrencyOffer[];
  };
} | {
  errors: DataError<400 | 403 | 404 | 408 | 429 | 500 | 501 | 503>[];
};

type StoreOffersV1Offer = {
  OfferID: string;
  IsDirectPurchase: number;
  StartDate: string;
  Cost: {
    [key: string]: number;
  };
  Rewards: StoreOffersV1Reward[];
};

type StoreOffersV1Reward = {
  ItemTypeID: string;
  ItemID: string;
  Quantity: number;
};

type StoreOffersV1UpgradeCurrencyOffer = {
  OfferID: string;
  StorefrontItemID: string;
  Offer: StoreOffersV1OfferDetails;
  DiscountedPercent: number;
};

type StoreOffersV1OfferDetails = {
  OfferID: string;
  IsDirectPurchase: number;
  StartDate: string;
  Cost: {
    [key: string]: number;
  };
  Rewards: StoreOffersV1Reward[];
};


type StoreOffersV2Response = {
  status: 200;
  data: StoreOffersV2;
} | {
  errors: DataError<400 | 403 | 404 | 408 | 429 | 500 | 501 | 503>[];
};

type StoreOffersV2 = {
  offers: StoreOfferV2[];
};

type StoreOfferV2 = {
  offer_id: string;
  cost: number;
  name: string;
  icon: string;
  type: string;
  skin_id: string;
  content_tier: StoreOfferV2ContentTier;
};

type StoreOfferV2ContentTier = {
  name: string;
  dev_name: string;
  icon: string;
};
