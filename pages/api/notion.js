export default async (req, res) => {
  const {
    query: { sort, tag },
  } = req;

  const tags =
    tag === ''
      ? {
          property: 'tags',
          multi_select: {
            does_not_contains: '',
          },
        }
      : {
          property: 'tags',
          multi_select: {
            contains: tag,
          },
        };

  const filter = {
    and: [
      {
        property: 'onWeb',
        checkbox: {
          equals: true,
        },
      },
      {
        tags,
      },
    ],
  };

  const endpoint = '/databases/5cec8fdf-129f-4cc0-ab74-2293cc5ea1c5/query';
  const response = await fetch(process.env.NOTION_BASE_URL + endpoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      filter: { ...filter },
      sorts: [
        {
          property: 'name',
          direction: sort || 'ascending', // ascending || descending
        },
      ],
    }),
  });

  const data = await response.json();
  return res.status(200).json(data);
};
