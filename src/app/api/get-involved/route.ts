import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

const CATEGORIES = [
  'Investor / Strategic Partner',
  'Content Creator / Filmmaker',
  'On-Air Talent',
  'Show Development / Producer',
  'Editor / Motion / Post',
  'Sales / Sponsorships',
  'Partnership / Distribution',
  'Community Tip / Story Lead',
  'Internship / Volunteer',
];

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, category, location, links, message } = data;

    if (!name || !email || !category || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, category, and message are required' },
        { status: 400 }
      );
    }

    if (!CATEGORIES.includes(category)) {
      return NextResponse.json(
        { error: 'Invalid category selected' },
        { status: 400 }
      );
    }

    if (!supabase) {
      return NextResponse.json(
        { error: 'Database not configured' },
        { status: 503 }
      );
    }

    const { error } = await supabase.from('get_involved_submissions').insert({
      name,
      email,
      phone: phone || null,
      category,
      location: location || null,
      links: links || null,
      message,
    });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to save submission' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Submission received successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
