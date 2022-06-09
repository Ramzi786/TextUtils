touch .gitnore
git config --global user.name Ramzi
git config --global user.email "k.ramzi73@gmail.com"
git init
git add .
git commit -m "Initial commit"
git status
ssh-keygen -t rsa -b 4096 -C "k.ramzi73@gmail.com"
git remote add origin <ssh url.git> 
git push origin master

git@github.com:Ramzi786/React-1.git