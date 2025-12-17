import { Octokit } from "@octokit/rest";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_OWNER = process.env.GITHUB_OWNER;
const GITHUB_REPO = process.env.GITHUB_REPO;

export async function saveSubmissionToRepo(applicationId: string, data: any) {
  if (!GITHUB_TOKEN || !GITHUB_OWNER || !GITHUB_REPO) {
    console.error("Missing GitHub configuration");
    throw new Error("Missing GitHub configuration");
  }

  const octokit = new Octokit({
    auth: GITHUB_TOKEN,
  });

  const path = `submissions/application_${applicationId}.json`;
  const content = Buffer.from(JSON.stringify(data, null, 2)).toString("base64");
  const message = `New submission: Application ${applicationId}`;

  try {
    // Check if file exists to get sha for update, though we usually expect new files
    let sha;
    try {
      const { data: existingFile } = await octokit.repos.getContent({
        owner: GITHUB_OWNER,
        repo: GITHUB_REPO,
        path,
      });
      if (!Array.isArray(existingFile)) {
        sha = existingFile.sha;
      }
    } catch (e) {
      // File doesn't exist, which is good
    }

    await octokit.repos.createOrUpdateFileContents({
      owner: GITHUB_OWNER,
      repo: GITHUB_REPO,
      path,
      message,
      content,
      sha, // only needed if updating
    });
    
    return true;
  } catch (error) {
    console.error("Error saving submission to GitHub:", error);
    throw error;
  }
}
