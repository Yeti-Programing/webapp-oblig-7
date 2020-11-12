import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema(
    {
            mail: {
                type: String,
                required: true,
            },
            userid: {
                type: String,
                required: true,
            }
    }
);

export default mongoose.model('User', UserSchema);