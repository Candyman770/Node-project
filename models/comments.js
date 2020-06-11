const mongoose=require('mongoose');
const schema=mongoose.Schema;

const commentSchema=new schema({
	rating:{
		type:Number,
		min:1,
		max:5,
		required:true
	},
	comment:{
		type:String,
		required:true
	},
	author:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'User'
	},
	dish:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'Dish'
	}
},{
	timestamps:true
});

const comments=mongoose.model('Comment',commentSchema);

module.exports=comments;