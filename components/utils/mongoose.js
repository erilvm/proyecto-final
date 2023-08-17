import mongoose from "mongoose";

const conn = {
    isConnected: false,
};

export async function dbConnect() {
    if (conn.isConnected) {
        return;
    }

    try {
        const db = await mongoose.connect(
            process.env.MONGODB_URI || "mongodb+srv://ubaldo:Nasaspacex1@cluster1.vneebil.mongodb.net/?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        // You might want to check if the connection was successful
        conn.isConnected = db.connections[0].readyState === 1;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

mongoose.connection.on("connected", () => console.log("Mongodb connected to db"));

mongoose.connection.on("error", (err) => console.error("Mongodb Error:", err.message));
