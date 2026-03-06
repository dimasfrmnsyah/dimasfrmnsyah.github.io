/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repository = process.env.GITHUB_REPOSITORY || "";
const [owner, repo] = repository.split("/");
const isUserOrOrgPage =
  Boolean(owner && repo) &&
  repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const basePath =
  isGithubActions && repo && !isUserOrOrgPage ? `/${repo}` : "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    dangerouslyAllowSVG: true,
    unoptimized: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  }
};

export default nextConfig;
