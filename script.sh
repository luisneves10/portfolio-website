#!/bin/bash

OUTPUT="output.txt"
SCRIPT_NAME="$(basename "$0")"

# Clear or create the output file
> "$OUTPUT"

# Find all files except:
# - this script itself
# - the output file
# - anything inside node_modules/ or public/
# - README.md
# - package-lock.json
# - common image files (png, jpg, jpeg, gif, bmp, tiff, svg, webp, ico)
find . -type f \
    ! -name "$SCRIPT_NAME" \
    ! -name "$OUTPUT" \
    ! -name "README.md" \
    ! -name "package-lock.json" \
    -not -path "./node_modules/*" \
    -not -path "./public/*" \
    ! -iname "*.png" \
    ! -iname "*.jpg" \
    ! -iname "*.jpeg" \
    ! -iname "*.gif" \
    ! -iname "*.bmp" \
    ! -iname "*.tiff" \
    ! -iname "*.svg" \
    ! -iname "*.webp" \
    ! -iname "*.ico" | while read -r file; do
        echo "### $(realpath "$file") ###" >> "$OUTPUT"
        cat "$file" >> "$OUTPUT"
        printf "\n\n\n" >> "$OUTPUT"   # 3 empty lines
done
