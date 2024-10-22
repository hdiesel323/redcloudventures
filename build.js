const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const contentFile = path.join(__dirname, 'src', 'cms', 'content.json');
const content = JSON.parse(fs.readFileSync(contentFile, 'utf-8'));

const buildSite = (siteName) => {
  console.log(`Building site: ${siteName}`);
  
  // Update siteConfig.ts
  const siteConfigPath = path.join(__dirname, 'src', 'config', 'siteConfig.ts');
  let siteConfigContent = fs.readFileSync(siteConfigPath, 'utf-8');
  siteConfigContent = siteConfigContent.replace(
    /const siteConfig: SiteConfig = {[\s\S]*};/,
    `const siteConfig: SiteConfig = ${JSON.stringify(content[siteName], null, 2)};`
  );
  fs.writeFileSync(siteConfigPath, siteConfigContent);

  // Build the site
  execSync('npm run build', { stdio: 'inherit' });

  // Move the build to a site-specific folder
  const buildDir = path.join(__dirname, 'dist');
  const siteDir = path.join(__dirname, 'builds', siteName);
  fs.mkdirSync(siteDir, { recursive: true });
  fs.renameSync(buildDir, siteDir);

  console.log(`Site ${siteName} built successfully!`);
};

// Build all sites
Object.keys(content).forEach(buildSite);

console.log('All sites built successfully!');