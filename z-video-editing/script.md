# 🎯 The Core Objective

I’m creating a high-converting, 1-minute 2D/3D anime-style video ad targeted directly at a local regional audience for Patel World Tour, promoting their Singapore and Malaysia travel packages in Hindi and Gujarati.

Instead of using boring standard stock footage, I’m leveraging viral pop-culture inspired characters—Raju & Billu (based on Nobita & Doraemon)—to instantly grab attention, drive engagement, and hook viewers on Instagram Reels and YouTube Shorts.

# 🎬 The Content Narrative

The video follows a fast-paced, comedic 12-shot storyline:
    The Conflict: Raju (the boy) is crying hysterically because his friend Suneo is flexing a Singapore trip.
    The Inciting Incident: Billu (the blue cat) introduces a solution, but Raju demands a luxury, VIP-style trip (cruise, flights, hotels).
    The Reveal: Billu uses a smart gadget to find an affordable, all-inclusive package with Patel World Tour.
    The Resolution: Raju gets overjoyed realizing he can out-flex Suneo, and both characters end with a high-energy call-to-action urging viewers to book before the upcoming deadline.

# Short Master Workflow
1. Audio Generation (ElevenLabs)
    Action: Generate individual .mp3 files for each line of dialogue.
    Key Detail: Record exact clip durations to set video pacing.

2. Background Generation (Gemini)
    Action: Generate your master room plates (1 1 -whole-room.png, 12-high-angle.png, etc.) using 9:16 aspect ratio.
    Key Detail: Turn off Magic Prompt to prevent AI from altering your scene layout.

3. Scene Image Generation (Gemini)
    Action: Upload reference character assets (01-raju.png, 02-billu.png) + room background plates + scene prompts.
    Key Detail: Use 9:16 aspect ratio and high Image Weight (60–80%) to lock character consistency.

4. Image-to-Video Animation (Luma Dream Machine)
    Action: Convert generated scene images into subtle motion clips (5-second outputs).
    Key Detail: Keep camera motion simple. Separate Action Shots (heavy movement) from Dialogue Shots (talking heads).

5. AI Lip-Sync (Morph Studio / SadTalker)
    Action: Take dialogue scene clips/images and pair them with ElevenLabs .mp3 files to sync mouth movements.
    Key Detail: Use front-facing or 3/4 angle shots to avoid facial warping.

6. Assembly & Editing (CapCut)
    Action: Import 9:16 video clips and voiceovers into the timeline.
    Key Detail: Layer BGM, apply text pop-ups ("Singapore", "3N/4D"), insert phone screen overlays, trim glitchy frames, and export.
