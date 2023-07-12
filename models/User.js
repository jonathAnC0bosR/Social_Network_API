const { Schema, model } = require('mongoose');
//npm helper package to validate is a unique field in the DB
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema(
    {
        username: { type: String, required: true, unique: true, trim: true },
        email: { type: String, required: [true, "Email required"], unique: true, 
            validate: {
                //A regex validator since mongoose don´t have one integrated
                validator: function (v) {
                    return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v)
                },
                message: 'Please enter a valid mail'
            },
        },
        thoughts: [{ type: Schema.Types.ObjectId, ref: 'thought'}],
        friends: [{ type: Schema.Types.ObjectId, ref: 'user'}]
    },
    {
        toJSON: { virtuals: true },
        id: false, 
    }
);

//Create a virtual property to that gets the amount of friends each user has. 
userSchema.
    virtual('friendsCount')
    .get( function () {
        return this.friends.length;
});

//Apply the uniqueValidator plugin to the userSchema
userSchema.plugin(uniqueValidator);

//Initialize the User model
const User = model('user', userSchema);

module.exports = User;