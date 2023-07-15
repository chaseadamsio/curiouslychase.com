#!/bin/bash

# Stash changes in the root repository
git stash

# Checkout the main branch in the root repository
git checkout main

# Run the npm command to update content and public
npm run cp-notes-and-images

# Add the changes in content
cd content
git add .
git commit -m "Update content"
cd ..

# Add the changes in public
cd public
git add .
git commit -m "Update public"
cd ..

# Add the changes in the root repository
git add .
git commit -m "Update"
git push

# Push the content and public repositories
cd content
git push
cd ..

cd public
git push
cd ..