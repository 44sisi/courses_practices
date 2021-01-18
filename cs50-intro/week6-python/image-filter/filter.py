from PIL import Image, ImageFilter


def main():
    before = Image.open("img.jpg")
    after = before.filter(ImageFilter.BoxBlur(10))
    after.save("out.jpg")


if __name__ == "__main__":
    main()
