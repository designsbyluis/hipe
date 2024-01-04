import * as z from "zod"

export const OpportunitiesformSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters"),
    description: z.string().min(3, "Description must be at least 3 characters").max(400, "Description must be less then 400 characters"),
    location: z.string().min(3, "Location must be at least 3 characters").max(400, "Description must be less then 400 characters"),
    deadline: z.date(),
    imageUrl: z.string(),
    startDateTime: z.date(),
    endDateTime: z.date(),
    categoryId: z.string(),
    compensation: z.string(),
    isFree: z.boolean(),
    url: z.string().url()
  })