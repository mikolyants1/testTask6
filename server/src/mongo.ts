import mongoose,{Schema} from "mongoose";
import uri from './env.js'

mongoose.connect(uri)
.then(()=>{
    console.log('connect to db')
})
.catch((err)=>{
    console.log(err)
})

const PostSchema = new Schema({
    title:{
      type:String,
      require:true
    },
    status:{
      type:String,
      require:true
    },
    description:{
      type:String,
      require:true
    }
})

export const Post = mongoose.model("Post",PostSchema);