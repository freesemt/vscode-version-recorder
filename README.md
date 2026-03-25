# vscode-version-recorder

VS Code 拡張機能。ワークスペース内の `.github/vscode-version.txt` に VS Code のバージョンを自動記録します。

## 背景

GitHub Copilot の `init.prompt.md` で `alwaysApply: true` を使う場合、VS Code 1.99 以上が必要です。  
Copilot は VS Code のバージョンを自律的に取得できないため、この拡張機能がその橋渡しをします。

詳しくは [AI Context Management Standard](https://github.com/freesemt/humanomics) を参照してください。

## 動作

VS Code 起動時（`onStartupFinished`）に、ワークスペース内の **`.github` フォルダが存在する全フォルダ** に対して `.github/vscode-version.txt` を自動更新します。

```text
# VS Code version used in this workspace
# Auto-updated by vscode-version-recorder extension
# Required for alwaysApply: true in init.prompt.md (VS Code 1.99+)
1.114.0-insider
```

`.github` フォルダが存在しないワークスペースフォルダはスキップされます。

## インストール

マーケットプレイスには公開していません。GitHub Releases から `.vsix` を取得してインストールしてください。

### `gh` CLI を使う場合（推奨）

```powershell
gh release download v0.1.0 --repo freesemt/vscode-version-recorder --pattern "*.vsix" --dir $env:TEMP
code --install-extension "$env:TEMP\vscode-version-recorder-0.1.0.vsix"
```

### 手動の場合

1. [Releases](https://github.com/freesemt/vscode-version-recorder/releases) から `vscode-version-recorder-x.x.x.vsix` をダウンロード
2. VS Code で `Ctrl+Shift+P` → `Extensions: Install from VSIX...` → ダウンロードした `.vsix` を選択

インストール後、**VS Code を再起動**してください。

## 使い方

インストールして再起動するだけです。自動で動作します。

`init.prompt.md` との連携では、ステップ0で `.github/vscode-version.txt` 内の `Auto-updated by vscode-version-recorder extension` という行を確認することで、拡張機能が正常に動作しているかを判定します。

## ビルド（開発者向け）

```powershell
npm install
npm run compile
npx vsce package --no-dependencies
```

## ライセンス

MIT
