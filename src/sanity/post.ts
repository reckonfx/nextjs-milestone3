
import {defineField,defineType,defineArrayMember} from "sanity"
export default defineType({
    name:"post",
    type:"document",
    title:"post",
    fields:[
        defineField(
        {
            name:"name",
            type:"string",
            title:"title",
            validation:(Rule) => Rule.required().warning("data must be entered"),
                      // .warning("this field is required").error("must field")
            description:"title of the post"
        }),
        defineField({
            name:"slug",
            type:"slug",
            title:"slug",
            options:{
                source:"name",
                maxLength:96
            }
            
            
            
        }),
        defineField(
            {
                name:"summary",
                type:"text",
                title:"summary",
                validation:Rule =>Rule.required()
            }
        ),
        defineField({
            name:"image",
            type:"image",
            title:"Image"
        }),
        defineField({
            name:"content",
            type:"array",
            of:[
                {
                    type:"block"
                }
            ]
        }),
        defineField({
            name:"author",
            type:"reference",
            title:"Author",
            to:[
                {type:"author"}
            ]
        })

       

         

       


    ]
})



// for radio and menu options code is below

// defineField(
//     {
//         name:"gender",
//         type:"string",
//         title:"Gender",
//         options:{
//             list:[
//                 {title:"Male",value:"male"},
//                 {title:"Female",value:"female"},
//                 {title:"Others",value:"others"}
//             ],
//             direction:"horizontal",
//             layout:"radio"
//         }
//     },
   
// ),

