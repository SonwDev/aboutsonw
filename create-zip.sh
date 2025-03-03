
#!/bin/bash

# Create a zip file of the entire project
zip -r portfolio-website.zip \
  client/ \
  server/ \
  shared/ \
  .gitignore \
  drizzle.config.ts \
  package.json \
  package-lock.json \
  postcss.config.js \
  tailwind.config.ts \
  theme.json \
  tsconfig.json \
  vite.config.ts \
  --exclude="*node_modules*" \
  --exclude="*dist*" \
  --exclude="*.git*"

echo "Project packaged as portfolio-website.zip"
