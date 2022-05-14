import mongoose from 'mongoose';

const collectionSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  editors: [String],
  payment_tokens: [{ type: mongoose.Schema.Types.Mixed }],
  primary_asset_contracts: [{ type: mongoose.Schema.Types.Mixed }],
  traits: { type: mongoose.Schema.Types.Mixed },
  stats: { type: mongoose.Schema.Types.Mixed },
  banner_image_url: { type: String },
  chat_url: { type: String },
  created_date: { type: String },
  default_to_fiat: { type: Boolean },
  description: { type: String },
  dev_buyer_fee_basis_points: { type: String },
  dev_seller_fee_basis_points: { type: String },
  discord_url: { type: String },
  display_data: { type: mongoose.Schema.Types.Mixed },
  external_url: { type: String },
  featured: { type: Boolean },
  featured_image_url: { type: String },
  hidden: { type: Boolean },
  safelist_request_status: { type: String },
  image_url: { type: String },
  is_subject_to_whitelist: { type: Boolean },
  large_image_url: { type: String },
  medium_username: { type: String },
  name: { type: String },
  only_proxied_transfers: { type: Boolean },
  opensea_buyer_fee_basis_points: { type: String },
  opensea_seller_fee_basis_points: { type: String },
  payout_address: { type: String },
  require_email: { type: Boolean },
  short_description: { type: String },
  slug: { type: String },
  telegram_url: { type: String },
  twitter_username: { type: String },
  wiki_url: { type: String },
  is_nsfw: { type: Boolean },
  updated_date: { type: Date }
});

const Collection = mongoose.model('Collection', collectionSchema);

export default Collection;
