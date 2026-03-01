import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
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

    if (supabase) {
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
    } else {
      // Fallback to file storage when Supabase is not configured
      const submissionsFile = path.join(process.cwd(), 'get-involved-submissions.json');
      const newSubmission = {
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        name,
        email,
        phone: phone || '',
        category,
        location: location || '',
        links: links || '',
        message,
      };

      let submissions: object[] = [];
      if (fs.existsSync(submissionsFile)) {
        try {
          const fileContent = fs.readFileSync(submissionsFile, 'utf-8');
          submissions = JSON.parse(fileContent);
          if (!Array.isArray(submissions)) submissions = [];
        } catch {
          submissions = [];
        }
      }
      submissions.push(newSubmission);
      fs.writeFileSync(submissionsFile, JSON.stringify(submissions, null, 2));
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
