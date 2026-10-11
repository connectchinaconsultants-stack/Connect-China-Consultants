"""Generate valid local placeholder images for Connect China Consultants."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import math
import random

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "assets" / "images"
OUT.mkdir(parents=True, exist_ok=True)

NAVY = (12, 28, 46)
TEAL = (29, 107, 98)
GOLD = (184, 149, 106)
IVORY = (246, 243, 236)
DEEP = (8, 18, 32)
WARM = (140, 72, 58)
SAGE = (90, 122, 104)
SLATE = (58, 78, 96)


def font(size, bold=False):
    candidates = [
        "C:/Windows/Fonts/segoeui.ttf",
        "C:/Windows/Fonts/segoeuib.ttf" if bold else "C:/Windows/Fonts/segoeui.ttf",
        "C:/Windows/Fonts/arial.ttf",
        "C:/Windows/Fonts/arialbd.ttf" if bold else "C:/Windows/Fonts/arial.ttf",
    ]
    for path in candidates:
        p = Path(path)
        if p.exists():
            try:
                return ImageFont.truetype(str(p), size)
            except OSError:
                continue
    return ImageFont.load_default()


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


def fill_gradient(img, c1, c2, vertical=True):
    w, h = img.size
    draw = ImageDraw.Draw(img)
    steps = h if vertical else w
    for i in range(steps):
        t = i / max(steps - 1, 1)
        color = lerp(c1, c2, t)
        if vertical:
            draw.line([(0, i), (w, i)], fill=color)
        else:
            draw.line([(i, 0), (i, h)], fill=color)


def add_noise(img, amount=12):
    rnd = random.Random(42)
    px = img.load()
    w, h = img.size
    for y in range(0, h, 2):
        for x in range(0, w, 2):
            n = rnd.randint(-amount, amount)
            r, g, b = px[x, y][:3]
            c = (max(0, min(255, r + n)), max(0, min(255, g + n)), max(0, min(255, b + n)))
            px[x, y] = c
            if x + 1 < w:
                px[x + 1, y] = c
            if y + 1 < h:
                px[x, y + 1] = c
                if x + 1 < w:
                    px[x + 1, y + 1] = c


def arches(draw, w, h, color, count=5):
    span = w // (count + 1)
    for i in range(count):
        cx = span * (i + 1)
        r = int(min(w, h) * 0.18)
        y = int(h * 0.72)
        draw.arc([cx - r, y - r * 2, cx + r, y], 180, 360, fill=color, width=3)


def centered_text(draw, text, y, fnt, fill, w):
    bbox = draw.textbbox((0, 0), text, font=fnt)
    tw = bbox[2] - bbox[0]
    draw.text(((w - tw) / 2, y), text, font=fnt, fill=fill)


def photo_placeholder(path, size, title, subtitle, c1, c2, accent=GOLD):
    img = Image.new("RGB", size)
    fill_gradient(img, c1, c2)
    overlay = Image.new("RGB", size)
    fill_gradient(overlay, c2, c1, vertical=False)
    img = Image.blend(img, overlay, 0.28)
    add_noise(img, 10)
    draw = ImageDraw.Draw(img, "RGBA")
    w, h = size

    # Architectural suggestion
    for i in range(7):
        x = int(w * (0.08 + i * 0.13))
        draw.rectangle([x, int(h * 0.38), x + 18, int(h * 0.92)], fill=(*accent, 40))
    arches(draw, w, h, (*accent, 90), 6)

    # Soft vignette
    vignette = Image.new("L", size, 0)
    vd = ImageDraw.Draw(vignette)
    vd.ellipse([-w * 0.1, -h * 0.2, w * 1.1, h * 1.2], fill=255)
    vignette = vignette.filter(ImageFilter.GaussianBlur(80))
    dark = Image.new("RGB", size, DEEP)
    img = Image.composite(img, dark, vignette)

    draw = ImageDraw.Draw(img)
    bar_y = int(h * 0.58)
    draw.rectangle([0, bar_y, w, h], fill=(12, 28, 46, 180) if False else (12, 28, 46))
    draw.rectangle([0, bar_y, w, bar_y + 4], fill=accent)
    centered_text(draw, title, bar_y + int(h * 0.06), font(max(28, size[0] // 28), True), IVORY, w)
    centered_text(draw, subtitle, bar_y + int(h * 0.14), font(max(16, size[0] // 48)), GOLD, w)
    draw.text((32, 28), "CONNECT CHINA", font=font(18), fill=GOLD)
    img.save(path, quality=88, optimize=True)


def logo_mark(path, size=(512, 512)):
    img = Image.new("RGBA", size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    w, h = size
    pad = 24
    draw.rounded_rectangle([pad, pad, w - pad, h - pad], radius=96, fill=NAVY)
    draw.rounded_rectangle([pad + 18, pad + 18, w - pad - 18, h - pad - 18], radius=82, outline=GOLD, width=6)
    # Circle motif
    cx, cy = w // 2, int(h * 0.42)
    draw.ellipse([cx - 70, cy - 70, cx + 70, cy + 70], outline=GOLD, width=5)
    draw.arc([cx - 48, cy - 48, cx + 48, cy + 48], 200, 40, fill=TEAL, width=8)
    fnt = font(92, True)
    bbox = draw.textbbox((0, 0), "CC", font=fnt)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    draw.text(((w - tw) / 2, cy - th / 2 - 8), "CC", font=fnt, fill=IVORY)
    label = font(22)
    text = "CONSULTANTS"
    bbox = draw.textbbox((0, 0), text, font=label)
    tw = bbox[2] - bbox[0]
    draw.text(((w - tw) / 2, int(h * 0.72)), text, font=label, fill=GOLD)
    img.save(path)


def horizontal_logo(path, size=(1400, 360)):
    img = Image.new("RGBA", size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    w, h = size
    draw.rounded_rectangle([0, 0, h, h], radius=72, fill=NAVY)
    draw.rounded_rectangle([16, 16, h - 16, h - 16], radius=58, outline=GOLD, width=5)
    fnt = font(78, True)
    bbox = draw.textbbox((0, 0), "CC", font=fnt)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    draw.text(((h - tw) / 2, (h - th) / 2 - 6), "CC", font=fnt, fill=IVORY)
    draw.text((h + 36, 70), "Connect China", font=font(72, True), fill=NAVY)
    draw.text((h + 36, 170), "Consultants", font=font(42), fill=TEAL)
    draw.rectangle([h + 36, 230, h + 220, 234], fill=GOLD)
    draw.text((h + 36, 250), "International Education", font=font(24), fill=SLATE)
    img.save(path)


def favicon(path, size=(64, 64)):
    img = Image.new("RGBA", size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    draw.rounded_rectangle([0, 0, 63, 63], radius=16, fill=NAVY)
    draw.text((10, 10), "CC", font=font(26, True), fill=GOLD)
    img.save(path)


def poster(path, size, title, line):
    img = Image.new("RGB", size)
    fill_gradient(img, NAVY, TEAL)
    add_noise(img, 8)
    draw = ImageDraw.Draw(img)
    w, h = size
    draw.rectangle([40, 40, w - 40, h - 40], outline=GOLD, width=3)
    draw.rectangle([52, 52, w - 52, h - 52], outline=(232, 213, 181), width=1)
    centered_text(draw, "CONNECT CHINA CONSULTANTS", 90, font(22), GOLD, w)
    centered_text(draw, title, int(h * 0.38), font(42, True), IVORY, w)
    centered_text(draw, line, int(h * 0.52), font(24), GOLD, w)
    centered_text(draw, "Medical Education in China", int(h * 0.78), font(20), IVORY, w)
    img.save(path, quality=88, optimize=True)


def main():
    random.seed(7)
    logo_mark(OUT / "main-logo.png")
    horizontal_logo(OUT / "horizontal-logo.png")
    favicon(OUT / "favicon-icon.png")

    photo_placeholder(
        OUT / "home-hero-image.jpg",
        (1920, 1080),
        "Your Gateway to Medical Education",
        "Universities across China · MBBS · Nursing · Language",
        (18, 42, 58),
        (28, 86, 78),
    )
    photo_placeholder(
        OUT / "about-student-support.jpg",
        (1400, 1000),
        "Student Support in China",
        "Counseling · Arrival · Campus guidance",
        (46, 28, 36),
        (22, 52, 62),
        WARM,
    )
    photo_placeholder(
        OUT / "program-mbbs.jpg",
        (1200, 800),
        "MBBS / Clinical Medicine",
        "5+1 year English-medium medical degree",
        (22, 36, 54),
        (90, 48, 48),
        WARM,
    )
    photo_placeholder(
        OUT / "program-nursing.jpg",
        (1200, 800),
        "B.Sc. Nursing",
        "Four-year clinical nursing pathway",
        (22, 54, 58),
        (40, 90, 86),
        TEAL,
    )
    photo_placeholder(
        OUT / "program-chinese-language.jpg",
        (1200, 800),
        "Chinese Language",
        "Mandarin, HSK preparation, culture",
        (54, 38, 26),
        (120, 86, 48),
        GOLD,
    )

    universities = [
        ("university-jinggangshan.jpg", "Jinggangshan University", "Ji'an, Jiangxi"),
        ("university-hubei-polytechnic.jpg", "Hubei Polytechnic University", "School of Medicine"),
        ("university-nanchang-medical.jpg", "Nanchang Medical University", "Jiangxi"),
        ("university-jiujiang-medical.jpg", "Jiujiang Medical University", "Jiangxi"),
        ("university-hunan-medical.jpg", "Hunan Medical University", "Hunan"),
        ("university-shandong-first-medical.jpg", "Shandong First Medical College", "Shandong"),
        ("university-kunming-medical.jpg", "Kunming Medical University", "Yunnan"),
        ("university-yangtze.jpg", "Yangtze University", "Hubei"),
        ("university-gannan-medical.jpg", "Gannan Medical University", "Jiangxi"),
        ("university-chifeng-medical.jpg", "Chifeng Medical University", "Inner Mongolia"),
        ("university-yichuan-medical.jpg", "Yichuan Medical University", "Name pending confirmation"),
        ("university-yangtze-medical.jpg", "Yangtze Medical University", "Name pending confirmation"),
        ("university-binzhou-medical.jpg", "Binzhou Medical University", "Shandong"),
        ("university-jiangxi-medical.jpg", "Jiangxi Medical University", "Name pending confirmation"),
        ("university-harbin-medical.jpg", "Harbin Medical University", "Heilongjiang"),
        ("university-jilin.jpg", "Jilin University", "Jilin"),
    ]
    palettes = [
        ((20, 48, 62), (18, 86, 78)),
        ((36, 28, 48), (62, 42, 72)),
        ((28, 42, 36), (72, 92, 70)),
        ((42, 28, 28), (96, 52, 48)),
        ((24, 40, 64), (48, 78, 110)),
        ((48, 36, 24), (110, 82, 48)),
        ((22, 52, 48), (36, 88, 92)),
        ((32, 32, 48), (70, 70, 98)),
    ]
    for i, (name, title, sub) in enumerate(universities):
        c1, c2 = palettes[i % len(palettes)]
        photo_placeholder(OUT / name, (1400, 900), title, sub, c1, c2)

    poster(OUT / "jinggangshan-poster-01.jpg", (900, 1200), "Jinggangshan University", "MBBS · Nursing · Ji'an")
    poster(OUT / "jinggangshan-poster-02.jpg", (900, 1200), "Study in Jiangxi", "English-medium medical programs")

    # Small logo tiles for carousel (crop of campus placeholders)
    for i, (name, title, sub) in enumerate(universities):
        src = Image.open(OUT / name)
        tile = src.crop((0, 0, 1400, 900)).resize((480, 300))
        stem = name.replace("university-", "logo-").replace(".jpg", ".png")
        tile.save(OUT / stem)

    print(f"Wrote placeholders to {OUT}")


if __name__ == "__main__":
    main()
