const { Client } = require('@notionhq/client');

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export default async (req, res) => {
  const {
    query: { sort, tag, search },
  } = req;

  const compoundFilter = [
    {
      property: 'onWeb',
      checkbox: {
        equals: true,
      },
    },
  ];

  if (tag === '' || tag === undefined) {
    compoundFilter.push({
      property: 'tags',
      multi_select: {
        is_not_empty: true,
      },
    });
  } else {
    compoundFilter.push({
      property: 'tags',
      multi_select: {
        contains: tag,
      },
    });
  }

  const data = await notion.databases.query({
    database_id: process.env.NOTION_DB,
    filter: {
      and: [...compoundFilter],
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
