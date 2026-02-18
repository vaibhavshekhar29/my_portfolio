## Portfolio (GitHub Pages)

This repo contains a React portfolio page and a GitHub Actions workflow that deploys it to GitHub Pages.

### Run locally

```bash
npm install
npm run dev
```

### Deploy to GitHub Pages

- Push to the `main` branch
- In GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**
- The workflow at `.github/workflows/deploy.yml` will build and deploy automatically

### Keep your work GitHub login untouched (recommended: SSH host alias)

If you use multiple GitHub accounts (work + personal), configure separate SSH keys and an alias host.

1) Create a personal SSH key:

```bash
ssh-keygen -t ed25519 -C "your-personal-email" -f ~/.ssh/id_ed25519_personal
```

2) Add the public key (`~/.ssh/id_ed25519_personal.pub`) to your **personal** GitHub account:
- GitHub → Settings → SSH and GPG keys → New SSH key

3) Add this to `~/.ssh/config`:

```sshconfig
Host github.com-personal
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_personal
  IdentitiesOnly yes
```

4) Point this repo’s remote to your personal account (example):

```bash
git remote set-url origin git@github.com-personal:PERSONAL_USERNAME/REPO_NAME.git
```

This is per-repo and does not log you out or change your work GitHub session.

### Optional: set per-repo commit identity (safe)

```bash
git config user.name "Your Name"
git config user.email "your-personal-email"
```


