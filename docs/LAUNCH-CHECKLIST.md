# Launch checklist and current boundaries

## Current prototype

The repository contains a bilingual, responsive static web prototype and PWA shell. Its fixtures are sample content. The demo match form stores data in the visitor's own browser only; it is not a shared or secure admin system.

## Preview deployment

A GitHub Pages workflow is configured in `.github/workflows/pages.yml`. To publish the static preview, a repository owner must enable Pages in repository Settings and select **GitHub Actions** as the build/deployment source. After that, push to `main` or run the workflow manually under Actions. Confirm the repository's visibility and the organization's/account plan before enabling Pages; publishing a Pages site can make the site publicly accessible. Do not put private information or credentials in this static prototype.

## Production work still required

- Select and configure a secure backend/database and hosting account owned by the project owner.
- Implement administrator sign-in, role-based permissions, validation and audit history. The primary admin should be created through the backend provider's secure account setup, not by committing credentials.
- Confirm official competition, team, season, fixture and result data, including the correct names and rules for standings.
- Test the application and set up backups, monitoring and privacy/security practices.
- Decide whether to package the site as an installable PWA or build native Android/iOS applications; app-store publishing requires the owner's developer accounts and review.

## Project owner role

The project owner has stated they will be the overall administrator. This document records that decision; it does not create an authenticated admin account because no production backend or identity provider is configured yet.
