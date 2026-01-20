
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: NextRequest,
  props: { params: Promise<{ slug: string }> }
) {
  const params = await props.params;
  const slug = params.slug;
  
  if (!slug) {
    return new NextResponse('Bad Request', { status: 400 });
  }

  // Security: prevent directory traversal
  const safeSlug = slug.replace(/[^a-zA-Z0-9-_]/g, '');
  
  const filePath = path.join(process.cwd(), 'content', 'pdf-bilingual', `${safeSlug}.pdf`);

  if (!fs.existsSync(filePath)) {
    return new NextResponse('Not Found', { status: 404 });
  }

  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename="${safeSlug}.pdf"`,
    },
  });
}
