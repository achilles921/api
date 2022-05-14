import mongoose from 'mongoose';

import Collection from './collection';

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

const models = { Collection };

export { connectDb };

export default models;
