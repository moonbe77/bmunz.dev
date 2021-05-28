const { Client } = require('@notionhq/client');

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export default async (req, res) => {
  const {
    query: { sort, tag, query },
  } = req;

  const data = await notion.search({
    database_id: process.env.NOTION_DB,
    query,
    filter: {
      property: 'object',
      value: 'page',
    },
    sorts: [
      {
        property: 'name',
        direction: sort || 'ascending', // ascending || descending
      },
    ],
  });
  return res.status(200).json(data);
};
