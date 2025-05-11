#!/bin/bash

# Deploy the project and capture the URL
URL=$(vercel --prod --yes | grep -Eo 'https?://[a-zA-Z0-9.-]+\.vercel\.app')

# Exit if URL is not captured
if [ -z "$URL" ]; then
  echo "Deployment failed or URL not found."
  exit 1
fi

# Update README.md with new URL
if grep -q "Live Site" README.md; then
  # Replace the existing URL
  sed -i "s|https://.*\.vercel\.app|$URL|" README.md
else
  # Append new link if not present
  echo -e "\n## Live Site\n[$URL]($URL)" >> README.md
fi

# Commit and push the updated README
git add README.md
git commit -m "Update README with latest deployment URL"
git push

echo "README updated with: $URL"
