import * as z from "zod";

export const PostValidation = z.object({
    
    post: z.string().min(3, { message: 'Minimum 3 characters'}),
    accountId: z.string(),
    file: z.array(z.string()), // Assuming file is an array of string URLs
});

export const CommentValidation = z.object({
    post: z.string().min(3, { message: 'Minimum 3 characters'})

})
