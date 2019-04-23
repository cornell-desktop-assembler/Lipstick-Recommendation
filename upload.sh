cd frontend
npm run build
cd ..
git add .
git add -f ./frontend/build
git commit -m $1
git push