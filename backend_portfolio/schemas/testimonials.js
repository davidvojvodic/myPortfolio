export default {
    name:'testimonials',
    title:'Testimonials',
    type: 'document',
    fields:[
        { 
            name:'year',
            title:'Year',
            type: 'string'
        },
        {
            name:'description',
            title:'Description',
            type:'string'
        },
        {
            name:'icon',
            title:'Icon',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ],
    orderings: [
        {
          title: 'Year, New',
          name: 'yearDesc',
          by: [
            {field: 'year', direction: 'desc'}
          ]
        },
        {
          title: 'Year, Old',
          name: 'yearAsc',
          by: [
            {field: 'year', direction: 'asc'}
          ]
        }
    ]
}