// ====== OPPORTUNITY PARAMS
export type CreateOpportunityParams = {
  userId: string
  opportunity: {
    title: string
    description: string
    location: string
    imageUrl: string
    deadline: Date
    startDateTime: Date
    endDateTime: Date
    categoryId: string
    compensation: string
    isFree: boolean
    url: string
  }
  path: string
}

export type UpdateOpportunityParams = {
  userId: string
  opportunity: {
    _id: string
    title: string
    description: string
    location: string
    imageUrl: string
    deadline: Date
    startDateTime: Date
    endDateTime: Date
    categoryId: string
    compensation: string
    isFree: boolean
    url: string
  }
  path: string
}

export type DeleteOpportunityParams = {
  opportunityId: string
  path: string
}

export type GetAllOpportunitiesParams = {
  query: string
  category: string
  limit: number
  page: number
}

export type GetOpportunitiesByUserParams = {
  userId: string
  limit?: number
  page: number
}

export type GetRelatedOpportunitiesByCategoryParams = {
  categoryId: string
  opportunitiesId: string
  limit?: number
  page: number | string
}

export type Opportunity = {
  _id: string
  title: string
  description: string
  compensation: string
  isFree: boolean
  imageUrl: string
  location: string
  deadline: Date
  startDateTime: Date
  endDateTime: Date
  url: string
  creator: {
    _id: string
    firstName: string
  }
  category: {
    _id: string
    name: string
  }
}

// ====== CATEGORY PARAMS
export type CreateCategoryParams = {
  categoryName: string
}

// ====== ORDER PARAMS
export type CheckoutOrderParams = {
  eventTitle: string
  eventId: string
  price: string
  isFree: boolean
  buyerId: string
}

export type CreateOrderParams = {
  stripeId: string
  eventId: string
  buyerId: string
  totalAmount: string
  createdAt: Date
}

export type GetOrdersByEventParams = {
  eventId: string
  searchString: string
}

export type GetOrdersByUserParams = {
  userId: string | null
  limit?: number
  page: string | number | null
}

// ====== URL QUERY PARAMS
export type UrlQueryParams = {
  params: string
  key: string
  value: string | null
}

export type RemoveUrlQueryParams = {
  params: string
  keysToRemove: string[]
}

export type SearchParamProps = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}