export default{
    name:'certificates',
    title:'Certificates',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type:'image',
            options: {
                hotspot: true,
              },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'certificateLink',
            title: 'Certificate Link',
            type: 'string',
        },
    ]
}