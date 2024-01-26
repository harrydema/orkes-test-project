import { NextRequest, NextResponse } from "next/server";

async function apiHandler(
  req: NextRequest,
  { params }: { params: { pageNumber: string } }
) {
  console.log(req.nextUrl.searchParams);
  const response = await fetch(
    `https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/${params.pageNumber}`
  );

  return NextResponse.json(await response.json());
}

export const GET = apiHandler;
