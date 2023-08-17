import { Schema, model, models } from "mongoose";

const CitasSchema = new Schema(
    {
        firstname: { type: String, required: true },
        lastname: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        message: { type: String, required: true },
    },
);

export default models.Citas || model("Citas", CitasSchema);
