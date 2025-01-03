import { title } from "process";

export const comments = {
    name:"comments",
    type:"document",
    title:"Comments",
    fields:[
    
    {
        name:"name",
         type:"string",
         title:"Name"
    },
    {
        name:"email",
        type:"string",
        title:"Email"
    },
    {
        name:"comment",
        type:"text",
        title:"Comment"
    }

    
    ]
}