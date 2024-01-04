"use client"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { OpportunitiesDefaultValues } from "@/constants"
import { OpportunitiesformSchema } from "@/lib/validator"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import DropDown from "./DropDown"
import { Textarea } from "../ui/textarea"
import { FileUploader } from "./FileUploader"
import { useState } from "react"
import Image from "next/image"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Checkbox } from "../ui/checkbox"
import { useUploadThing } from "@/lib/uploadthing";
import { useRouter } from "next/navigation"
import { createOpportunity } from "@/lib/actions/opportunity.actions"
 
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

type OpportunitiesFormProps = {
    userId: string
    type: "Create" | "Edit"
}

const OpportunitiesForm = ({userId, type}: OpportunitiesFormProps) => {
    const [files, setFiles] = useState<File[]>([])
    const initialValues = OpportunitiesDefaultValues;
    const router = useRouter();

    const { startUpload } = useUploadThing('media')

    const form = useForm<z.infer<typeof OpportunitiesformSchema>>({
        resolver: zodResolver(OpportunitiesformSchema),
        defaultValues: initialValues
      })
    
    async function onSubmit(values: z.infer<typeof OpportunitiesformSchema>) {
        const opportunityData = values;

        let uploadedImageUrl = values.imageUrl;

        if (files.length > 0) {
            const uploadedImages = await startUpload(files)

            if (!uploadedImages) {
                return
            }

            uploadedImageUrl = uploadedImages[0].url
        }

        if (type === 'Create') {
            try {
                const newOpportunity = await createOpportunity({
                    opportunity: {...values, imageUrl: uploadedImageUrl },
                    userId,
                    path: '/applications'
                })

                if (newOpportunity) {
                    form.reset();
                    router.push(`/opportunities/${newOpportunity._id}`)
                }
            } catch (error) {
                console.log(error);
            }
        }
      }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">

        <div className="flex flex-col gap-5 md:flex-row">
            <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                    <FormItem className="w-full">
                        <FormControl>
                            <Input placeholder="Opportunities title" {...field} className="input-field" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <DropDown onChangeHandler={field.onChange} value={field.value} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl className="h-72">
                <Textarea placeholder="Description" {...field} className="textarea rounded-2xl" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl className="h-72">
                <FileUploader 
                    onFieldChange={field.onChange}
                    imageUrl={field.value}
                    setFiles={setFiles}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />      
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
        <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                    <FormItem className="w-full">
                        <FormControl>
                            <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-gray-100 px-4 py-2">
                                <Image 
                                    src="/assets/location-grey.svg"
                                    alt="location"
                                    width={24}
                                    height={24}
                                />
                            
                            <Input placeholder="Opportunity location or Online" {...field} className=" bg-gray-100 input-field" />
                            </div>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
        <FormField
                control={form.control}
                name="deadline"
                render={({ field }) => (
                    <FormItem className="w-full">
                        <FormControl>
                            <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-gray-100 px-4 py-2">
                                <Image 
                                    src="/assets/deadline.svg"
                                    alt="calendar"
                                    width={24}
                                    height={24}
                                    className="filter-grey"
                                />
                            <p className="ml-3 whitespace-nowrap text-gray-500">Deadline:&nbsp;</p>
                            <DatePicker 
                                selected={field.value} 
                                onChange={(date: Date) => field.onChange(date)}
                                showTimeSelect
                                timeInputLabel="Time:"
                                dateFormat="MM/dd/yyyy h:mm aa"
                                className="bg-gray-100"
                                wrapperClassName="datePicker"
                            />
                            </div>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
           </div>
        <div className="flex flex-col gap-5 md:flex-row">
        <FormField
                control={form.control}
                name="startDateTime"
                render={({ field }) => (
                    <FormItem className="w-full">
                        <FormControl>
                            <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-gray-100 px-4 py-2">
                                <Image 
                                    src="/assets/calendar.svg"
                                    alt="calendar"
                                    width={24}
                                    height={24}
                                    className="filter-grey"
                                />
                                <p className="ml-3 whitespace-nowrap text-gray-500">Start Date:&nbsp;</p>
                                <DatePicker 
                                    selected={field.value} 
                                    onChange={(date: Date) => field.onChange(date)}
                                    dateFormat="MM/dd/yyyy"
                                    className="bg-gray-100"
                                    wrapperClassName="datePicker"
                                    />
                            </div>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        <FormField
                control={form.control}
                name="endDateTime"
                render={({ field }) => (
                    <FormItem className="w-full">
                        <FormControl>
                            <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-gray-100 px-4 py-2">
                                <Image 
                                    src="/assets/calendar.svg"
                                    alt="calendar"
                                    width={24}
                                    height={24}
                                    className="filter-grey"
                                />
                                <p className="ml-3 whitespace-nowrap text-gray-500">End Date:&nbsp;</p>
                                <DatePicker 
                                    selected={field.value} 
                                    onChange={(date: Date) => field.onChange(date)}
                                    dateFormat="MM/dd/yyyy"
                                    className="bg-gray-100"
                                    wrapperClassName="datePicker"
                                    />
                            </div>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
        <FormField
                control={form.control}
                name="compensation"
                render={({ field }) => (
                    <FormItem className="w-full">
                        <FormControl>
                            <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-gray-100 px-4 py-2">
                                <Image 
                                    src="/assets/dollar.svg"
                                    alt="dollar"
                                    width={24}
                                    height={24}
                                    className="filter-grey"
                                />
                                <Input 
                                  type="number" placeholder="Compensation" {...field} className="p-regular-16 border-0 bg-gray-100 outline-offset-0 focus-border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                                />
                              <FormField
                                control={form.control}
                                name="isFree"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <div className="flex items-center">
                                              <label htmlFor="isFree" className="whitespace-nowrap pr-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                No compensation
                                              </label>
                                              <Checkbox onCheckedChange={field.onChange} checked={field.value} id="isFree" className="mr-2 h-5 w-5 border-2 border-primary-500" />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />            
                            </div>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                    <FormItem className="w-full">
                        <FormControl>
                            <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-gray-100 px-4 py-2">
                                <Image 
                                    src="/assets/url.svg"
                                    alt="link"
                                    width={24}
                                    height={24}
                                />
                            
                            <Input placeholder="URL" {...field} className="input-field" />
                            </div>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>

        <Button 
          type="submit"
          size="lg"
          disabled={form.formState.isSubmitting} 
          className="button col-span-2 w-full bg-primary-500">{form.formState.isSubmitting ? ('Submitting...' ): `${type} Opportunity`}</Button>
      </form>
    </Form>
  )
}

export default OpportunitiesForm