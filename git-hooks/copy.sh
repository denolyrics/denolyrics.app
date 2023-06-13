#!/bin/bash

# Get the source and destination directories
src_dir="git-hooks/scripts"
dst_dir=".git/hooks"

# Check if the source directory exists
if [ ! -d "$src_dir" ]; then
  echo "Source directory does not exist." >&2
  exit 1
fi

# Check if the destination directory exists
if [ ! -d "$dst_dir" ]; then
  echo "Destination directory does not exist." >&2
  exit 1
fi

# Copy all files from the source directory to the destination directory
for file in "$src_dir"/*; do
  cp -r "$file" "$dst_dir"

  # SPLIT DIRECTORIES AND GET LAST VALUE BY EXAMPLE git-hooks/scripts/pre-commit -> pre-commit
  script_name=$(echo "$file" | awk -F'/' '{print $NF}')

  chmod +x "$dst_dir/$script_name"
done

echo "✅ Git Hooks successfully copied"
# The script is finished
exit 0
