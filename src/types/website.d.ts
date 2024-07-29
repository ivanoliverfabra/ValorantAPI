import { APIResponse } from ".";

export type ValorantNewsArticleV1Response = APIResponse<ValorantNewsArticleV1Item[], 400 | 403 | 404 | 408 | 429 | 500 | 501 | 503>;

export type ValorantNewsArticleV1Item = {
  banner_url: string;
  category: string;
  date: string;
  external_link: string;
  title: string;
  url: string;
};
