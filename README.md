# 🚀 me-cbsdev | cbsdev.me

Welcome to the codebase for my personal portfolio! This is where I showcase my full-stack projects, design work, certifications, and a bit of my journey as a developer.

🌍 **Live Site:** [cbsdev.me](https://cbsdev.me)

## 🛠️ Tech Stack

This project is built with modern web technologies for maximum performance and a great developer experience:

- **Framework:** [Next.js](https://nextjs.org/) (React)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Deployment:** [Cloudflare Workers](https://workers.cloudflare.com/) via [OpenNext](https://opennext.js.org/)
- **CI/CD:** GitHub Actions + [Release Please](https://github.com/google-github-actions/release-please-action)

## 🚢 CI/CD & Deployments

This project uses a robust, two-environment automated deployment pipeline:

- **🧪 Test Environment (`deploy-test.yml`):** Any push to any branch automatically builds and deploys to the `cbsdev-test` Cloudflare Worker. Fast and seamless previews!
- **📦 Releases (`release.yml`):** Pushing to the `main` branch triggers Google's `release-please`. It automatically opens a Release PR, updating the changelog and bumping the `package.json` version.
- **🚀 Production (`deploy-prod.yml`):** Once a Release PR is merged and a GitHub Release is published, the exact tagged code is deployed straight to the `cbsdev-prod` Cloudflare Worker.

## ☕ Support

If you like what you see, feel free to [buy me a chai](https://buymeachai.ezee.li/cbsdev)!

---

_Built with ❤️ and way too much caffeine._
