
# Publish to GitHub Pages
# githubactionspushtoken is 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
ls
cd .vuepress/dist
git init
git config user.name "warma16"
git config user.email "metalstudio@126.com"
git add -A
#info 的格式是 [vuepress]自动构建，构建时间:{year}/{month}/{date} {hours}:{minutes}:{seconds}
time3=$(date "+%Y-%m-%d%H:%M:%S")
#info字符串等于prefix的字符串形式加上time3的字符串形式
info="[vuepress]自动构建，构建时间: $time3"
git branch
git commit -m "$info"
git push --force "https://${TOKEN}@github.com/warma16/oceroBlog.git" "main:main"
 
 
# Cleanup
cd ../..
rm -rf .vuepress/dist