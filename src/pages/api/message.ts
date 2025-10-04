import { getDb } from "@/config/db";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  success?: boolean;
  received?: any;
  message?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === "GET") {
    // Handle GET requests
    return res.status(200).json({ message: "Message received via GET" });
  }

  if (req.method === "POST") {
    // Handle POST requests
    const data = req.body;
    console.log("Received from client:", data);
    // const db = await getDb()
    // return res.status(400).json({ success: false, message: "Invalid input" });
    return res.status(200).json({
      success: true,
      message: "Message received successfully!",
    });
  }

  // For other HTTP methods
  res.status(405).json({ message: "Method not allowed" });
}
