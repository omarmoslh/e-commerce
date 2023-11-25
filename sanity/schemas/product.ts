export default {
  name: 'product',
  type: 'document',
  title: 'product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name Of Product',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Product Images',
      of: [{type: 'image'}],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description Of Product',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Product Slug',
      Options: {
        source: 'name',
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'category',
      title: 'Product Category',
      type: 'reference',
      to:[
        {
            type: "category",
        }
      ]
    },
  ],
}
