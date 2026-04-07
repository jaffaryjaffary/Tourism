const { default: mongoose } = require("mongoose");

const HelpSchema = new mongoose.Schema({
    number: {
        type: String,
        required: true,
    }
},{ timestamps: true });
    const Help =  mongoose.models.Help || mongoose.model('Help', HelpSchema);
    export default Help