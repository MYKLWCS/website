import { NextRequest, NextResponse } from "next/server";
import { getSessionUserId } from "@/lib/session";
import { addDocuments } from "@/lib/mockDb";

export async function POST(request: NextRequest) {
  try {
    const sessionUserId = getSessionUserId();
    if (!sessionUserId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await request.formData();
    const category = formData.get("category") as string;
    const files = formData.getAll("files") as File[];
    const applicationId = (formData.get("applicationId") as string | null) || undefined;
    const vehicleId = (formData.get("vehicleId") as string | null) || undefined;

    if (!category || files.length === 0) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate file types and sizes
    const validTypes = ["application/pdf", "image/jpeg", "image/png", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    for (const file of files) {
      if (!validTypes.includes(file.type)) {
        return NextResponse.json(
          { error: `Invalid file type: ${file.type}` },
          { status: 400 }
        );
      }
      if (file.size > 10 * 1024 * 1024) {
        return NextResponse.json(
          { error: `File too large: ${file.name}` },
          { status: 400 }
        );
      }
    }

    const uploadedFiles = addDocuments(
      sessionUserId,
      files.map((file) => ({
        category,
        name: file.name,
        size: file.size,
        type: file.type,
        applicationId,
        vehicleId
      }))
    );

    return NextResponse.json({
      success: true,
      message: `Successfully uploaded ${files.length} document(s)`,
      category,
      files: uploadedFiles
    });
  } catch (error) {
    console.error("Document upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload documents" },
      { status: 500 }
    );
  }
}
