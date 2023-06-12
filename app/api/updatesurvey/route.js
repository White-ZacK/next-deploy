import Prompt from "@models/answers";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, prompt } = await request.json();

    try {
        await connectToDB();
        console.log("connected here")
        const newPrompt = new Prompt({ creator: userId, prompt });

        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}
