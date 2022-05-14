import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  let skip = 0;
  let limit = 20;
  
  if (req.query.skip)
    skip = parseInt(req.query.skip);
  if (req.query.limit)
    limit = parseInt(req.query.limit);

  const collections = await req.context.models.Collection.find().skip(skip).limit(limit);
  return res.send(collections);
});

router.get('/:slug', async (req, res) => {
  const collection = await req.context.models.Collection.find({
    slug: req.params.slug,
  });
  return res.send(collection);
});

export default router;
