"use client"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from "zod"


import { Textarea } from "../ui/textarea";
import { usePathname, useRouter } from "next/navigation";

import { PostValidation } from '@/lib/validations/post';
import { createPost } from "@/lib/actions/post.actions";
import FileUploader from "../shared/FileUploader";
// import { updateUser } from "@/lib/actions/user.actions";

interface Props {
    user: {
        id: string;
        objectId: string;
        username: string;
        name: string;
        school: string;
        bio: string;
        image: string;
    };
    btnTitle: string;
}


function PostPost({ userId}: {userId: string }) {
    const router = useRouter();
    const pathname = usePathname();
    
      const form = useForm({
          resolver: zodResolver(PostValidation),
          defaultValues: {
              post: '',
              accountId: userId,
              file: [],
          }
      })

      const onSubmit = async (values: z.infer<typeof PostValidation>) => {
        // Handle file upload logic
        const uploadedFiles = values.file;
      
        if (Array.isArray(uploadedFiles) && uploadedFiles.length > 0) {
          // Ensure convertFileToUrl is defined or replace it with your logic
          const convertFileToUrl = (file: File) => URL.createObjectURL(file);
      
          // Upload each file and get their URLs
          const imageUrls = await Promise.all(
            uploadedFiles.map(async (file) => {
              return await convertFileToUrl(file);
            })
          );
      
          // Now you can use imageUrls in the createPost function
          await createPost({
            text: values.post,
            author: userId,
            communityId: null,
            path: pathname,
         
          });
        } else {
          // If no files were uploaded, create post without images
          await createPost({
            text: values.post,
            author: userId,
            communityId: null,
            path: pathname,
         
          });
        }
      
        router.push("/");
      };

    return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 flex flex-col justify-start gap-6">

        <FormField
            control={form.control}
            name="post"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full gap-1">
                <FormLabel className="text-base-semibold text-dark-2">
                    Content
                </FormLabel>
                <FormControl>
                  <Textarea
                    rows={8} 
                    className="account-form_input no-focus"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

<FormField
    control={form.control}
    name="file"  // Make sure the name matches the one in defaultValues
    render={({ field }) => (
        <FormItem className="flex flex-col w-full gap-1">
            <FormLabel className="text-base-semibold text-dark-2">Add Photos</FormLabel>
            <FormControl>
                <FileUploader fieldChange={field.onChange} mediaUrl="" />
            </FormControl>
            <FormMessage />
        </FormItem>
    )}
/>

          <Button type="submit" className="bg-primary-500">Post</Button>
        </form>
        </Form>
    )
}

export default PostPost;