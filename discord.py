import datetime
import hashlib
import os

import aiohttp
import disnake
import dotenv
from disnake.ext import tasks

dotenv.load_dotenv()
client = disnake.Client(intents=disnake.Intents.all())


async def send_api_request(data: dict):
    async with aiohttp.ClientSession() as session:
        headers = {
            "Content-Type": "application/json",
            "Authorization": hashlib.sha256(
                os.environ["BOT_TOKEN"].encode()
            ).hexdigest(),
        }
        url = os.environ.get("API_URL")
        if not url:
            raise ValueError("API_URL environment variable is not set.")
        res = await session.post(url, json=data, headers=headers)
        if res.status != 200:
            raise Exception(
                f"Failed to send data to API: {res.status} - {await res.text()}"
            )


@tasks.loop(seconds=15)
async def check_status():
    sarth: disnake.Member | None = client.get_guild(1378103460934848672).get_member(
        1134016724132446208
    )
    if sarth is None:
        return
    data = {
        "username": sarth.display_name,
        "avatar_url": sarth.display_avatar.url,
        "activity": {},
    }
    if sarth.activities is None:
        return data

    if any(
        act1 := [
            act for act in sarth.activities if isinstance(act, disnake.CustomActivity)
        ]
    ):
        custom = {
            "value": act1[0].name,
            "emoji": act1[0].emoji.name if act1[0].emoji else None,
        }
    if any(
        act2 := [
            act for act in sarth.activities if act.type == disnake.ActivityType.playing
        ]
    ):
        playing = {
            "name": act2[0].name,
            "details": f"{act2[0].state} | {act2[0].details}"
            if act2[0].__dict__.get("details", None)
            else None,
            "url": act2[0].url if act2[0].url else None,
            "large_image_url": act2[0].large_image_url
            if act2[0].large_image_url
            else "/jeffdefault.png",
            "small_image_url": act2[0].small_image_url
            if act2[0].small_image_url
            else "/jeffdefault.png",
            "state": act2[0].state if act2[0].state else None,
            "timestamps": {
                "start": act2[0].start.isoformat() if act2[0].start else None,
                "end": act2[0].end.isoformat() if act2[0].end else None,
            },
        }
    if any(
        act3 := [act for act in sarth.activities if isinstance(act, disnake.Spotify)]
    ):
        spotify = act3[0]
        listening = {
            "album": spotify.album,
            "album_cover_url": spotify.album_cover_url
            if spotify.album_cover_url
            else "/jeffdefault.png",
            "artist": spotify.artist,
            "artists": spotify.artists,
            "color": getattr(spotify, "color", None),
            "colour": getattr(spotify, "colour", None),
            "created_at": spotify.created_at.isoformat()
            if getattr(spotify, "created_at", None)
            else None,
            "duration": spotify.duration,
            "end": spotify.end.isoformat() if spotify.end else None,
            "large_image_text": getattr(spotify, "large_image_text", None),
            "large_image_url": spotify.large_image_url
            if spotify.large_image_url
            else "/jeffdefault.png",
            "name": spotify.name,
            "party_id": getattr(spotify, "party_id", None),
            "small_image_text": getattr(spotify, "small_image_text", None),
            "small_image_url": spotify.small_image_url
            if spotify.small_image_url
            else "/jeffdefault.png",
            "start": spotify.start.isoformat() if spotify.start else None,
            "title": getattr(spotify, "title", None),
            "track_id": spotify.track_id,
            "track_url": spotify.track_url,
            "type": spotify.type.name
            if hasattr(spotify.type, "name")
            else spotify.type
            if hasattr(spotify, "type")
            else None,
        }

    def stringify(obj):
        if isinstance(obj, dict):
            return {k: stringify(v) for k, v in obj.items()}
        elif isinstance(obj, list):
            return [stringify(i) for i in obj]
        elif obj is None:
            return None
        else:
            return str(obj)

    data["activity"] = stringify(
        {
            "custom": custom if "custom" in locals() else None,
            "playing": playing if "playing" in locals() else None,
            "listening": listening if "listening" in locals() else None,
            "spotify": spotify if "spotify" in locals() else None,
        }
    )
    await send_api_request(data)
    print(f'activated at {datetime.datetime.now()}')


@client.event
async def on_ready():
    await client.wait_until_ready()
    check_status.start()


client.run(os.environ.get("BOT_TOKEN"))
