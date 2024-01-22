export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name: 'h_image',
        title: 'Horizantal Images',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      {
        name: 'v_image',
        title: 'Vertical Images',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      { 
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90,
        }
      },
      {
        name: 'category',
        title: 'Category name',
        type: 'reference',
        to: [{ type: 'category' }], // Reference to the Category schema
        options: {
          // Use the 'name' field from the referenced Category schema as the display value
          list: [{ title: 'Slug', value: 'slug' }],
        },
      },
      { 
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      { 
        name: 'details',
        title: 'Project Details',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Title',
                type: 'string'
              },
              {
                name: 'text',
                title: 'Text',
                type: 'string'
              }
            ]
          }
        ]
      },
    ]
  } 