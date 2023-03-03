require('dotenv').config();

const Airtable = require('airtable-node');

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table(process.env.AIRTABLE_TABLE);

exports.handler = async (event, context, cb) => {
  try {
    const resp = await airtable.list({ maxRecords: 200 });

    const products = resp.records.map((product) => {
      const { id, fields } = product;
      //   console.log(fields);
      const {
        name,
        featured,
        price,
        colors,
        company,
        description,
        category,
        shipping,
        images,
      } = fields;
      const { url } = images[0];
      return {
        id,
        featured,
        name,
        price,
        colors,
        company,
        description,
        category,
        shipping,
        image: url,
      };
    });

    // console.log('#####');
    // console.log(products);
    // console.log('#####');
    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: 'There was an error',
    };
  }
};
