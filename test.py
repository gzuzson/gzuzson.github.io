import xml.etree.ElementTree as ET
from collections import Counter

def extract_fill_attributes(svg_file):
    tree = ET.parse(svg_file)
    root = tree.getroot()

    fills = []
    for elem in root.iter():
        if 'fill' in elem.attrib:
            fills.append(elem.attrib['fill'])

    fill_counts = Counter(fills)
    sorted_fills = fill_counts.most_common()

    return sorted_fills

# Example usage:
svg_file = './my-website/hero.svg'  # Replace with your SVG file path
fill_statements = extract_fill_attributes(svg_file)
print("Fill statements sorted by frequency:")
for fill, count in fill_statements:
    print(f"Fill: {fill}, Count: {count}")

