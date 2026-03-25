# vscode-version-recorder

A VS Code extension that automatically records the current VS Code version to `.github/vscode-version.txt` in each workspace folder.

## Background

Using `alwaysApply: true` in `init.prompt.md` for GitHub Copilot requires VS Code 1.99 or later.  
Since Copilot cannot autonomously retrieve the VS Code version, this extension acts as the bridge — writing the version to a file that Copilot can read.

See the [AI Context Management Standard](https://github.com/freesemt/humanomics) for details.

## How It Works

On startup (`onStartupFinished`), the extension writes `.github/vscode-version.txt` in every workspace folder that has a `.github` directory.

```text
# VS Code version used in this workspace
# Auto-updated by vscode-version-recorder extension
# Required for alwaysApply: true in init.prompt.md (VS Code 1.99+)
1.114.0-insider
```

Workspace folders without a `.github` directory are skipped.

## Installation

This extension is not published to the Marketplace. Install it from GitHub Releases via `.vsix`.

### Using `gh` CLI (recommended)

```powershell
gh release download v0.1.0 --repo freesemt/vscode-version-recorder --pattern "*.vsix" --dir $env:TEMP
code --install-extension "$env:TEMP\vscode-version-recorder-0.1.0.vsix"
```

### Manual

1. Download `vscode-version-recorder-x.x.x.vsix` from [Releases](https://github.com/freesemt/vscode-version-recorder/releases)
2. In VS Code: `Ctrl+Shift+P` → `Extensions: Install from VSIX...` → select the downloaded file

**Restart VS Code** after installation.

## Usage

Install and restart. The extension runs automatically on every startup.

In `init.prompt.md`, Step 0 detects whether the extension is active by checking for the line `Auto-updated by vscode-version-recorder extension` in `.github/vscode-version.txt`.

## Build (for developers)

```powershell
npm install
npm run compile
npx vsce package --no-dependencies
```

## License

MIT
