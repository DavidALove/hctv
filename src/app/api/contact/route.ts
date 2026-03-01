import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (supabase) {
      const { error } = await supabase.from('contact_submissions').insert({
        name,
        email,
        subject,
        message,
      });

      if (error) {
        console.error('Supabase error:', error);
        return NextResponse.json(
          { error: 'Failed to save message' },
          { status: 500 }
        );
      }
    } else {
      // Fallback to file storage when Supabase is not configured
      const messagesFile = path.join(process.cwd(), 'messages.json');
      const newMessage = {
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        name,
        email,
        subject,
        message,
      };

      let messages: object[] = [];
      if (fs.existsSync(messagesFile)) {
        try {
          const fileContent = fs.readFileSync(messagesFile, 'utf-8');
          messages = JSON.parse(fileContent);
          if (!Array.isArray(messages)) messages = [];
        } catch {
          messages = [];
        }
      }
      messages.push(newMessage);
      fs.writeFileSync(messagesFile, JSON.stringify(messages, null, 2));
    }

    return NextResponse.json(
      { success: true, message: 'Message saved successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving message:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
