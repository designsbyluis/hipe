"use server"

import { CreateOpportunityParams } from "@/types"
import { handleError } from "../utils"
import { connectToDB } from "../mongoose"
import User from "../models/user.model"
import { revalidatePath } from "next/cache"
import Opportunity from "@/lib/models/opportunity.model"

// CREATE
export async function createOpportunity({ userId, opportunity, path }: CreateOpportunityParams) {
    try {
      await connectToDB()
  
      const creator = await User.findById(userId)
      if (!creator) throw new Error('Creator not found')
  
      const newOpportunity = await Opportunity.create({ ...opportunity, category: opportunity.categoryId, creator: userId })
      revalidatePath(path)
  
      return JSON.parse(JSON.stringify(newOpportunity))
    } catch (error) {
      console.log(error);
      handleError(error);
    }
  }