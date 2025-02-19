export async function GET() {
  const videoApiUrl = "https://asiansurf.co/wp-json/wp/v2/media/11728";

  try {
    // Fetch metadata video dari WordPress API
    const response = await fetch(videoApiUrl);
    const videoData = await response.json();
    const videoUrl = videoData.source_url;

    if (!videoUrl) {
      return new Response(JSON.stringify({ error: "Video not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify({ videoUrl }), { status: 200 });
  } catch (error) {
    console.error("Error fetching video:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
