import mongoose from 'mongoose';

const { Schema } = mongoose 

const PollSchema = new Schema (
    {
        pollid: {
            type: String,
            required: true,
        },
        creatorid: {
            type: String,
            required: true,
        },
        question: {
            type: String,
            required: true,
        }
    }
)

export default mongoose.model('poll', PollSchema);