#!/bin/bash
# Fix missing react-router-dom index.mjs file

echo "Fixing react-router-dom missing files..."

# Copy index.js to index.mjs if it doesn't exist
if [ ! -f "node_modules/react-router-dom/dist/index.mjs" ]; then
  if [ -f "node_modules/react-router-dom/dist/index.js" ]; then
    cp node_modules/react-router-dom/dist/index.js node_modules/react-router-dom/dist/index.mjs
    echo "Created missing index.mjs file"
  else
    echo "Warning: index.js not found either"
  fi
else
  echo "index.mjs already exists"
fi

echo "React Router fix completed"