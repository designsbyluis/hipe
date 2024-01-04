import { Document, Schema, model, models } from "mongoose";

export interface IOpportunity extends Document {
  _id: string;
  title: string;
  description?: string;
  location?: string;
  createdAt: Date;
  imageUrl: string;
  deadline: Date;
  startDateTime: Date;
  endDateTime: Date;
  compensation: string;
  isFree: boolean;
  url?: string;
  category: { _id: string, name: string }
  creator: { _id: string, firstName: string }
}

const OpportunitySchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  createdAt: { type: Date, default: Date.now },
  imageUrl: { type: String, required: true },
  deadline: { type: Date, default: Date.now },
  startDateTime: { type: Date, default: Date.now },
  endDateTime: { type: Date, default: Date.now },
  compensation: { type: String },
  isFree: { type: Boolean, default: false },
  url: { type: String },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  creator: { type: Schema.Types.ObjectId, ref: 'User' },
})

const Opportunity = models.Opportunity || model('Opportunity', OpportunitySchema);

export default Opportunity;