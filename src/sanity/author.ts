import { defineType,defineField } from "sanity";

export const author =  defineType(
    {
    name:"author",
    type:"document",
    title:"Author",
    fields:[
        defineField({
            name:"name",
            type:"string",
            title:"Author Name"
        }),
        defineField({
            name:"bio",
            type:"text",
            title:"Author Bio"
        }),
        defineField({
            name:"image",
            type:"image",
            title:"Author's Image",
            options:{
                hotspot:true
            }
        })
    ]

}
)