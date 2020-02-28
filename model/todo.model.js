import mongoose from "mongoose"
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true
    }
});

const TodoModel = mongoose.model("Todo", TodoSchema);

module.exports = TodoModel;