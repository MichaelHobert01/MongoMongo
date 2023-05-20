const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            max_length: 20,
            trim: true,
            unique: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!'],
        },

        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought'
            }
        ],

        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user'
            }
        ]
    }

);

userSchema.virtual('friendCount').get(function(){
    return this.friends.length
})
const User = model('user', userSchema);
module.exports = User;