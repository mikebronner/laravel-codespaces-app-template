# Codespaces Template for Laravel Apps

 ## Codespace Setup
 1. Make sure you are signing commits on all repositories, follow this guide:
   https://docs.github.com/en/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces
 2. Downloand and install the recommended fonts on your system:
   - [MesloLGS NF Regular.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Regular.ttf)
   - [MesloLGS NF Bold.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold.ttf)
   - [MesloLGS NF Italic.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Italic.ttf)
   - [MesloLGS NF Bold Italic.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold%20Italic.ttf)
 3. Create your codespace.
 4. If you don't yet have a `.env` file, copy `.env.example` to `.env`:
   ```
   cp .env.example .env
   ```
 5. Run `composer update`.
 6. You will be prompted for a GitHub access token, be sure to use the link for
   private repositories.
 7. Run `pa key:generate`.
 8. Once booted, change the HTTP port to have a visibility of "Private to
   Organization".
 9. Copy the new HTTPS URL and set the `APP_URL` environment variable in `.env`.
 10. You should now be able to access Bid Manager via that URL in your browser,
   as well as via REST API calls.
