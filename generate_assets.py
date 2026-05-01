from PIL import Image, ImageDraw, ImageFont

bg = (11,15,26)
gold = (201,164,99)
white = (255,255,255)

def create_horizontal(bg_on):
    img = Image.new("RGBA",(1400,400), bg if bg_on else (0,0,0,0))
    d = ImageDraw.Draw(img)
    d.text((80,140),"GM",fill=white)
    d.text((300,150),"GradMentor",fill=white)
    d.text((300,240),"GUIDE. STRATEGIZE. SUCCEED.",fill=gold)
    return img

def create_stacked(bg_on):
    img = Image.new("RGBA",(800,800), bg if bg_on else (0,0,0,0))
    d = ImageDraw.Draw(img)
    d.text((250,180),"GM",fill=white)
    d.text((180,350),"GradMentor",fill=white)
    d.text((180,450),"GUIDE. STRATEGIZE. SUCCEED.",fill=gold)
    return img

def create_icon(bg_on):
    img = Image.new("RGBA",(512,512), bg if bg_on else (0,0,0,0))
    d = ImageDraw.Draw(img)
    d.text((150,200),"GM",fill=white)
    d.line((320,180,420,80),fill=gold,width=6)
    d.polygon([(420,80),(390,100),(405,120)],fill=gold)
    return img

create_horizontal(True).save("H2_horizontal_bg.png")
create_horizontal(False).save("H2_horizontal_transparent.png")

create_stacked(True).save("S1_stacked_bg.png")
create_stacked(False).save("S1_stacked_transparent.png")

create_icon(True).save("GM_icon_bg.png")
create_icon(False).save("GM_icon_transparent.png")

print("Assets created successfully.")
