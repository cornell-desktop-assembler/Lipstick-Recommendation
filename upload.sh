cd frontend
npm run build
cd ..
git add .
git add -f ./frontend/build
git commit -m "updated clear search field"
git push