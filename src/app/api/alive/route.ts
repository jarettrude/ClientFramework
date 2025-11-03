import { NextRequest, NextResponse } from 'next/server';

declare global {
  var __RUNTIME_CONFIG__: Record<string, any> | undefined;
}

export async function GET(request: NextRequest) {
  return NextResponse.json(global.__RUNTIME_CONFIG__ || {});
}
