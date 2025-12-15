import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const userId = formData.get("userId") as string;
    const category = formData.get("category") as string;
    const files = formData.getAll("files") as File[];

    if (!userId || !category || files.length === 0) {
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

    // In a real application, you would:
    // 1. Save files to cloud storage (S3, GCS, etc.)
    // 2. Store metadata in database
    // 3. Trigger document review process
    // 4. Send confirmation email

    // For this mock, we'll just return success
    const uploadedFiles = files.map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
      uploadedAt: new Date().toISOString()
    }));

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
