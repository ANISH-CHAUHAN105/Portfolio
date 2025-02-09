import { connectDB } from "@/lib/mongodb";
import Visitor from "@/models/Visitor";

export async function GET() {
  try {
    await connectDB();
    let visitor = await Visitor.findOne();

    if (!visitor) {
      visitor = new Visitor({ count: 1 });
    } else {
      visitor.count += 1;
    }

    await visitor.save();
    return Response.json({ count: visitor.count });
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch visitors" },
      { status: 500 }
    );
  }
}
