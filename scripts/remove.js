const { execSync, exec } = require('child_process');
const fs = require('fs');

// 读取 package.json
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const allDependencies = {
  ...packageJson.dependencies,
  ...packageJson.devDependencies,
  ...packageJson.optionalDependencies,
  ...packageJson.peerDependencies
};

// 查找所有以 vuepress- 开头的包
const vuepressPackages = Object.keys(allDependencies)
  .filter(pkg => pkg.startsWith('@vuepress'));

if (vuepressPackages.length === 0) {
  console.log('没有找到 vuepress- 相关的包');
  process.exit(0);
}

console.log('找到以下 vuepress- 相关的包:');
vuepressPackages.forEach(pkg => console.log(`- ${pkg}`));

// 询问确认
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('确定要移除这些包吗？(y/N): ', (answer) => {
  if (answer.toLowerCase() === 'y') {
    try {
      console.log('正在移除...');
      execSync(`yarn remove ${vuepressPackages.join(' ')}`, { stdio: 'inherit' });
      console.log('移除完成！');
    } catch (error) {
      console.error('移除过程中出错:', error.message);
    }
  } else {
    console.log('已取消移除操作');
  }
  rl.close();
});